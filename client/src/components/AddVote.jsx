import React from 'react';
import { useState } from "react";
import useEth from "../contexts/EthContext/useEth";




const AddVote = ({ etatVote, setEtatVote }) => {

    //définition des hook
    const { state: { contract, accounts } } = useEth();

    const [inputVote, setInputVote] = useState("");

    const handleInputVote = e => {
        if (/^\d+$|^$/.test(e.target.value)) {
            setInputVote(e.target.value);
        }
    };

    const addVote = async e => {

        if (inputVote === "") {
            alert("Please enter a vote number.");
            return;
        } else if (inputVote === 0) {
            alert("Please enter a vote number superior to 0.");
            return;
        }

        //console.log(inputVote);

        await contract.methods.setVote(inputVote).send({ from: accounts[0] });

    };


    const endVoting = async e => {
        await contract.methods.endVotingSession().send({ from: accounts[0] });
        setEtatVote(4);
    };





    return (

        < div >
            etat du vote : {etatVote}
            <br />
            <input
                type="text"
                placeholder="indiquer votre vote"
                value={inputVote}
                onChange={handleInputVote}
            />

            <button onClick={addVote}>Vote</button>


            <p> Une fois les votes terminés cliquer sur le bouton End Voting </p>
            <button onClick={endVoting}>End Voting</button>




        </div >


    );
};

export default AddVote;


