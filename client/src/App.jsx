import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import "./App.css";
import HeaderPage from "./components/HeaderPage";
import Addvoter from "./components/ADDVOTER/Addvoter";
import AddProposal from "./components/ADDPROPOSAL/AddProposal";
import Vote from "./components/VOTE/Vote";
import TallyVote from "./components/TALLYVOTE/TallyVote";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <HeaderPage />
          <hr />
          <Addvoter />
          <hr />
          <AddProposal />
          <hr />
          <Vote />
          <hr />
          <TallyVote />
          <hr />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
