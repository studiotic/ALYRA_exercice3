import { useState, useEffect } from "react";
import useEth from "../contexts/EthContext/useEth";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

import Compte from "./Compte";
import AddVoter from "./AddVoter";
import AddProposal from "./AddProposal";
import StartVoting from "./StartVoting";
import AddVote from "./AddVote";
import TallyVotes from "./TallyVotes";
import GetWinner from "./GetWinner";
console.log("Voting.jsx :  fin des imports");


function Voting() {

  console.log("Voting.jsx :  debut fonction");

  const { state: { contract, accounts } } = useEth();
  const { state } = useEth();

  const [etatVote, setEtatVote] = useState(0);


  console.log("avantReadEtat");



  //va evaluer le statut actuel
  const readEtat = async () => {
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    console.log("L'etape de vote est ." + parseInt(value));
    setEtatVote(parseInt(value));
  };

  console.log("AprèsReadEtat");


  useEffect(() => {
    console.log("use effect voting");
    //evalue l'etape du vote
  }, [etatVote]);//etatVote






  const voting =
    <>
      <div >
        <Compte />

        <button onClick={readEtat}>Evalue etat</button>

        {/* register = 0 etat du debut */}
        {(etatVote === 0) && (<AddVoter etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* start proposal =1 */}
        {(etatVote === 1) && (<AddProposal etatVote={etatVote} setEtatVote={setEtatVote} />)}


        {/* end proposal = 2 */}
        {(etatVote === 2) && (<StartVoting etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* start voting  = 3 */}
        {(etatVote === 3) && (<AddVote etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {/* end voting  = 4 */}
        {(etatVote === 4) && (<TallyVotes etatVote={etatVote} setEtatVote={setEtatVote} />)}

        {(etatVote === 5) && (<GetWinner etatVote={etatVote} setEtatVote={setEtatVote} />)}

      </div>
    </>;


  return (

    <div>

      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            voting
      }

    </div>
  );
}

export default Voting;

