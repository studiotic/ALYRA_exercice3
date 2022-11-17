import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";

const StartVoting = ({ etatVote, setEtatVote }) => {


    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const startVoting = async e => {
        await contract.methods.startVotingSession().send({ from: accounts[0] });
        setEtatVote(3);
    };



    return (
        <div>
            etat du vote : {etatVote}
            <br />

            <p> Pour commencer le vote cliquer sur le bouton</p>
            <button onClick={startVoting}>Start Voting</button>
        </div>
    );
};

export default StartVoting;