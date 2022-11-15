const Web3 = require('web3')

const monIdINFURA = "2689492c57d4411d8b71ca981d4c06d2";

const rpcURL = "https://goerli.infura.io/v3/" + monIdINFURA;

const web3 = new Web3(rpcURL)

const adresseContrat = "0x4b984D560387C22f399B76a38edabFE52903E599"

web3.eth.getBalance(adresseContrat, (err, wei) => {

    console.log("La balance en wei : " + wei + " wei");

    balance = web3.utils.fromWei(wei, 'ether'); // convertir la valeur en ether

    console.log("La balance en ether est : " + balance + " ethers");


});

//autre manière pour l'avoir et lafficher
web3.eth.getBalance(adresseContrat).then(console.log);

//essai de la stocker dans une variable
Mabalance = web3.eth.getBalance(adresseContrat);
console.log("La balance en wei via variable: " + + " wei");

