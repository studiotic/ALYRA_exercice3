import React from 'react';
//import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";

const TallyVotes = ({ etatVote, setEtatVote }) => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const lanceTallyVote = async e => {
        //console.log(inputAdress);
        await contract.methods.tallyVotes().send({ from: accounts[0] });
        console.log("Lance Tally Vote.")
        setEtatVote(5);
    };

    return (
        < div className='bloc' >
            <button onClick={lanceTallyVote} className='actionButton'>Lancer le dépouillement</button>
        </div >
    );
};

export default TallyVotes;