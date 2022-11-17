import React from 'react';
//import { useEffect } from "react";
import useEth from "../contexts/EthContext/useEth";



const Compte = () => {

    const { state: { accounts } } = useEth();
    //const { state: { contract, accounts } } = useEth();

    // //va evaluer le statut actuel
    // const readEtat = async () => {
    //     const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    //     console.log("L'etape de vote est ." + parseInt(value));
    //     setEtatVote(parseInt(value));
    // };



    // //va evaluer le statut actuel
    // const getOwner = async () => {
    //     const value = await contract.getOwner.call({ from: accounts[0] });
    //     alert("L'etape de vote est ." + value);
    //     setEtatVote(value);
    // };

    // useEffect(){
    //     readEtat();
    // }

    //<button onClick={readEtat}> Quel etat de vote </button>
    return (
        <div>

            <p>Votre compte connecté Metamask   </p>
            {accounts && accounts[0] && <pre>{accounts[0]}</pre>}
            <br />

            <br />

        </div>
    );
};

export default Compte;