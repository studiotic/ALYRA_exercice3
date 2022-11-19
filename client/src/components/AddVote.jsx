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


    // const endVoting = async e => {
    //     await contract.methods.endVotingSession().send({ from: accounts[0] });
    //     setEtatVote(4);
    // };





    return (

        < div className='bloc'  >
            <h2>A vous de voter !</h2>
            <br />
            <input
                className='inputProposal'
                type="text"
                placeholder="indiquer le numéro de votre proposition"
                value={inputVote}
                onChange={handleInputVote}
            />
            <br /> <br />
            <button onClick={addVote} className='valideButton'>A voté !</button>






        </div >


    );
};

export default AddVote;


