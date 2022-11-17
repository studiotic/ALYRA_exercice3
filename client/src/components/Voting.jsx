import { useState } from "react";
import useEth from "../contexts/EthContext/useEth.js";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

import Compte from "./Compte";
import AddVoter from "./AddVoter";
import AddProposal from "./AddProposal";
import AddVote from "./AddVote";



function Voting() {

  const { state } = useEth();
  const [etatVote, setEtatVote] = useState();
 

  const voting =
    <>
      <div >
        <Compte setEtatVote={setEtatVote} />
        <AddVoter  />
        <AddProposal />
        <AddVote  />
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

