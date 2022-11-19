import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";


const AddVoter = ({ etatVote, setEtatVote }) => {



    //définition des hook
    const { state: { contract, accounts, web3 } } = useEth();

    const [inputAdress, setInputAdress] = useState("");

    const handleInputAdress = e => {
        setInputAdress(e.target.value);
    };




    const addVoter = async e => {

        // if (e.target.tagName === "INPUT") {
        //     return;
        // }

        if (!web3.utils.isAddress(inputAdress)) {
            alert("invalid address")
            return;
        }

        if (inputAdress === "") {
            alert("Please enter an adress to write.");
            return;
        }


        //console.log(inputAdress);

        //await contract.methods.addVoter(inputAdress).send({ from: accounts[0] });

        try {
            await contract.methods.addVoter(inputAdress).send({ from: accounts[0] });
        } catch (err) {
            console.log("erreur add voter" + err)
        }

    };






    const startProposal = async e => {
        await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
        setEtatVote(1);
    };






    return (

        < div className='bloc' >
            <input
                className='inputProposal'
                type="text"
                placeholder="indiquer l'adresse du votant"
                value={inputAdress}
                onChange={handleInputAdress}
            />

            <br />
            <button onClick={addVoter} className='valideButton'>ajoute un votant</button>
            <br />
            <br />
            <button onClick={startProposal} className='actionButton'>Début de l'enregistrement des propositions</button>




        </div >


    );
};

export default AddVoter;


