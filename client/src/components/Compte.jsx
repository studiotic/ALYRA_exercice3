import React from 'react';
//import { useEffect } from "react";
import useEth from "../contexts/EthContext/useEth";

const Compte = () => {

    const { state: { accounts } } = useEth();

    return (
        <div className='bloc'>
            <p className='compteMetaMask'>Votre compte connecté Metamask   </p>
            {accounts && accounts[0] && <pre className='preText'>{accounts[0]}</pre>}
            <br />
            <br />
        </div>
    );
};

export default Compte;