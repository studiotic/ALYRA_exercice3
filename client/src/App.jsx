import { EthProvider } from "./contexts/EthContext";
import "./App.css";

import HeaderPage from "./components/HeaderPage";
import Voting from "./components/Voting";
import Footer from "./components/Footer";


function App() {



  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <HeaderPage />
          <hr />
          <Voting />
          <hr />
          <Footer />
        </div>

      </div>
    </EthProvider>
  );
}

export default App;
