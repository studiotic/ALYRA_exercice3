import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";


const AddProposal = () => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const [inputProposal, setInputProposal] = useState("");

    const handleInputProposal = e => {
        setInputProposal(e.target.value);
    };



    const addProposal = async e => {


        if (inputProposal === "") {
            alert("Please enter a proposal to write.");
            return;
        }


        //console.log(inputProposal);

        await contract.methods.addProposal(inputProposal).send({ from: accounts[0] });
    };


    const endProposal = async e => {
        await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
    };

    const startVoting = async e => {
        await contract.methods.startVotingSession().send({ from: accounts[0] });
    };




    return (

        < div >
            <input
                type="text"
                placeholder="indiquer lvotre proposal"
                value={inputProposal}
                onChange={handleInputProposal}
            />

            <button onClick={addProposal}>ajoute une proposition</button>


            <p> Une fois l'opération terminée cliquée sur le bouton End Proposal registering </p>


            <button onClick={endProposal}>End Proposal registering</button>



            <p> Une fois l'opération terminée cliquée sur le bouton Start Voting </p>



            <button onClick={startVoting}>Start Voting</button>




        </div >


    );
};

export default AddProposal;


