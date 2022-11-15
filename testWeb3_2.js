const Web3 = require('web3')

const monIdINFURA = "2689492c57d4411d8b71ca981d4c06d2";

const rpcURL = "https://goerli.infura.io/v3/" + monIdINFURA;

const web3 = new Web3(rpcURL)

const adresseContrat = "0x1f9C83F7311c1b0AD188E9925E2705a3B60c4b1d"

const ABISMARTCONTRAT = [
    {
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

//on definit une instance du contrat
const simpleStorage = new web3.eth.Contract(ABISMARTCONTRAT, adresseContrat)


simpleStorage.methods.get().call((err, data) => {
    console.log("La function get renvoie : " + data);
})

