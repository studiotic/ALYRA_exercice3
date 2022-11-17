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
            alert("Please enter a proposal to write.");
            return;
        }


        //console.log(inputProposal);

        await contract.methods.addProposal(inputProposal).send({ from: accounts[0] });
    };


    const endProposal = async e => {
        await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
        setEtatVote(2);
    };





    return (

        < div >
            etat du vote : {etatVote}
            <br/>


            <input
                type="text"
                placeholder="indiquer lvotre proposal"
                value={inputProposal}
                onChange={handleInputProposal}
            />

            <button onClick={addProposal}>ajoute une proposition</button>


            <p> Une fois l'opération terminée cliquée sur le bouton End Proposal registering </p>


            <button onClick={endProposal}>End Proposal registering</button>



       




        </div >


    );
};

export default AddProposal;


