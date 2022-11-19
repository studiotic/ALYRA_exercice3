import { useState, useEffect } from "react";
import useEth from "../contexts/EthContext/useEth";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

import Compte from "./Compte";
import AddVoter from "./AddVoter";

import AddProposal from "./AddProposal";
import EndProposal from "./EndProposal";

import StartVoting from "./StartVoting";
import EndVoting from "./EndVoting";


import AddVote from "./AddVote";
import TallyVotes from "./TallyVotes";
import GetWinner from "./GetWinner";

import "../App.css";

function Voting() {

  console.log("Voting.jsx :  debut fonction");

  const { state: { contract, accounts } } = useEth();
  const { state } = useEth();

  const [etatVote, setEtatVote] = useState(0);

  const [owner, setOwner] = useState(0);
  const [isAdmin, setIsAdmin] = useState(0);

  //va evaluer le statut actuel
  // const readEtat = async () => {
  //   const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
  //   console.log("L'etape de vote est ." + parseInt(value));
  //   setEtatVote(parseInt(value));
  // };

  useEffect(() => {
    console.log("use effect voting");
    //evalue l'etape du vote
  }, [etatVote]);//etatVote






  useEffect(() => {

    console.log("use effect owner");

    if (contract != null) {

      const fetchOwner = async () => {

        try {
          const currentOwner = await contract.methods.owner().call();
          setOwner(currentOwner);

          if (currentOwner === accounts[0]) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }


          const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
          setEtatVote(parseInt(value));

          console.log("owner : " + currentOwner)
        } catch (err) {
          setOwner("");
          console.log("erreur catch owner" + err)
        }

      };

      fetchOwner();
    }
  }, [contract, accounts]);



  //const owner = await votingContract.methods.owner().call();
  console.log("mon owner:" + owner);


  // const fetchOwner = async () => {
  //   try {
  //     const currentOwner = await contract.methods.owner().call();
  //     setOwner(currentOwner);
  //     console.log("owner : " + currentOwner)
  //   } catch (err) {
  //     setOwner("");
  //     console.log("erreur catch owner" + err)
  //   }
  // };



  console.log("isAdmin : " + isAdmin);

  //<button onClick={fetchOwner}>Quel owner</button>
  //<button onClick={readEtat}>Evalue etat</button>

  const voting =
    <>
      <div >
        <Compte />

        <br />
        <br />
        <br />

        {/* register = 0 etat du debut */}


        {(etatVote === 0) && (<AddVoter etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* start proposal =1 */}
        {(etatVote === 1 && isAdmin === false) && (<AddProposal etatVote={etatVote} setEtatVote={setEtatVote} />)}
        {(etatVote === 1 && isAdmin === true) && (<EndProposal etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* end proposal = 2 */}
        {(etatVote === 2) && (<StartVoting etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* start voting  = 3 */}
        {(etatVote === 3 && isAdmin === false) && (<AddVote etatVote={etatVote} setEtatVote={setEtatVote} />)}
        {(etatVote === 3 && isAdmin === true) && (<EndVoting etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* end voting  = 4 */}
        {(etatVote === 4) && (<TallyVotes etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {(etatVote === 5) && (<GetWinner etatVote={etatVote} setEtatVote={setEtatVote} />)}

      </div>
    </>;




  return (

    <div className='bloc' >
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            voting
      }

    </div>
  );
}

export default Voting;

