import React from 'react';
//import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";

const StartVoting = ({ etatVote, setEtatVote }) => {


    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const startVoting = async e => {
        await contract.methods.startVotingSession().send({ from: accounts[0] });
        setEtatVote(3);
    };



    return (
        <div className='bloc' >
            <h2> Pour lancer le vote cliquer sur le bouton</h2>
            <br />
            <button onClick={startVoting} className='actionButton'>Lancer la session de vote</button>
        </div>
    );
};

export default StartVoting;