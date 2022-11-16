//import { useState } from "react";
import useEth from "../contexts/EthContext/useEth.js";

import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

import AddVoter from "./AddVoter";
import AddProposal from "./AddProposal";
import AddVote from "./AddVote";


function Voting() {

  const { state } = useEth();

  //const [addressVotant, setInputAdress] = useState("");

  const voting =
    <>
      <div >
        <AddVoter />
        <AddProposal />
        <AddVote />
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

