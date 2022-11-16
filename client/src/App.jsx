import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import HeaderPage from "./components/HeaderPage";
import Voting from "./components/Voting";
import Footer from "./components/Footer";
//import AddVoter from "./components/AddVoter";

function App() {



  return (
    <EthProvider>
      <div id="App" >

        <div className="container">

          <HeaderPage />
          <hr />
          avant voting
          <Voting />

          apres voting
          <Footer />
        </div>

      </div>
    </EthProvider>
  );
}

export default App;
