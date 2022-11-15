import { useContext } from "react";
import EthContext from "./EthContext";

const useEth = () => useContext(EthContext);

export default useEth;

//permet d'accéder partout à notre contexte créé dans ethProvider