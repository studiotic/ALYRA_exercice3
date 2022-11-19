import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";


const AddProposal = ({ etatVote, setEtatVote }) => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const [inputProposal, setInputProposal] = useState("");

    const handleInputProposal = e => {
        setInputProposal(e.target.value);
    };



    const addProposal = async e => {


        if (inputProposal === "") {
            alert("Entrez une proposition de vote");
            return;
        }


        //console.log(inputProposal);

        await contract.methods.addProposal(inputProposal).send({ from: accounts[0] });
    };


    // const endProposal = async e => {
    //     await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
    //     setEtatVote(2);
    // };





    return (

        < div className='bloc' >
            <input
                className='inputProposal'
                type="text"
                placeholder="indiquez votre proposition"
                value={inputProposal}
                onChange={handleInputProposal}
            />

            <button onClick={addProposal} className='actionButton'>ajoute une proposition</button>


        </div >


    );
};

export default AddProposal;


