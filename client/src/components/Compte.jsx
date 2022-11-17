import React from 'react';
//import { useEffect } from "react";
import useEth from "../contexts/EthContext/useEth";


const Compte = ({ setEtatVote }) => {

    const { state: { contract, accounts } } = useEth();

    //va evaluer le statut actuel
    const readEtat = async () => {
        const value = await contract.methods.WorkflowStatus().call({ from: accounts[0] });
        alert("L'etape de vote est ." + value);
        setEtatVote(value);
    };

    //va evaluer le statut actuel
    const getOwner = async () => {
        const value = await contract.getOwner.call({ from: accounts[0] });
        alert("L'etape de vote est ." + value);
        setEtatVote(value);
    };




    return (
        <div>

            <p>Votre compte connecté Metamask   {accounts && accounts[0] && <pre>{accounts[0]}</pre>} </p>
            <br />
            <button onClick={readEtat}> Quel etat de vote </button>
            <br />
            <button onClick={getOwner}> owner </button>
        </div>
    );
};

export default Compte;