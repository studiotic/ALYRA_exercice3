import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";

const GetWinner = ({ etatVote, setEtatVote }) => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const getiWiningID = async e => {
        const idWinner = await contract.methods.winningProposalID().call({ from: accounts[0] });
        setEtatVote(5);
        console.log("getwinning : " + idWinner)
    };



    return (
        <div>
            <button onClick={getiWiningID}>Get Winner Proposal ID</button>
        </div>
    );
};

export default GetWinner;