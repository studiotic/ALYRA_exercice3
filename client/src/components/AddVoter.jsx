import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";


const AddVoter = (props) => {

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

        await contract.methods.addVoter(inputAdress).send({ from: accounts[0] });

    };


    const startProposal = async e => {
        await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
    };



    return (

        < div >
            <p>Ma propos : {props.etatVote}</p>

            <input
                type="text"
                placeholder="indiquer l'adresse du votant"
                value={inputAdress}
                onChange={handleInputAdress}
            />

            <button onClick={addVoter}>ajoute un votant</button>
            <p> une fois l'opération terminée cliquée sur le bouton Start Proposal registering </p>
            <button onClick={startProposal}>Start Proposal registering</button>




        </div >


    );
};

export default AddVoter;

