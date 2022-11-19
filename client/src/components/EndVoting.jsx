import React from 'react';
//import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";

const EndVoting = ({ etatVote, setEtatVote }) => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const endVoting = async e => {
        await contract.methods.endVotingSession().send({ from: accounts[0] });
        setEtatVote(4);
    };


    return (
        <div className='bloc' >

            <button onClick={endVoting} className='actionButton'>Fin de la session de vote</button>
        </div>
    );
};

export default EndVoting;