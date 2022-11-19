import React from 'react';
//import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";

const EndProposal = ({ etatVote, setEtatVote }) => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();


    const endProposal = async e => {
        await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
        setEtatVote(2);
    };



    return (
        <div className='bloc' >
            <h2>Saisie des propositions en cours par les votants...</h2>
            <br /> <br />
            <button onClick={endProposal} className='actionButton'>Fin de l'enregistrement des propositions</button>
        </div>
    );
};

export default EndProposal;