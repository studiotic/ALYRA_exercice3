# Application de Voting
La réalisation d'une petite DAPP au design minimaliste exploitant le contrat de voting déployé sur le testnet Goerli.

## adresse de deploiement de l'application dur le réseaau GOERLI
https://alyra-exercice3.vercel.app/

## correction de sécurité
Par rapport au contrat voting.sol d'origine, un correctif de sécurité à été apporté.
La boucle de parcours du tableau lors du talling a été remplacée par un test conditionnel lors de chaque vote pour évaluer l'id de la proposition gagnante.

## Revue de code
L'application est organisée autour d'un composant central voting.jsx dans lequel les composants suivants sont ajoutés
- AddVoter.jsx 
- AddProposal.jsx  
- EndProposal.jsx  
- StartVoting.jsx 
- AddVote.jsx  
- EndVoting.jsx  
- TallyVotes.jsx  
- GetWinner.jsx  

Selon une règle prennant en compte à la fois le compte de l'usager, à savoir si il est owner ou non, et l'etape du vote en cours, on affiche uniquement le composant qui correpond au contexte.

## une démonstration video est disponible au premier niveau du github
voting.mp4

## Déploiement sur Goerli

Truffle compilation and deploying on Goerli

studiotic@NUNGESSER:~/CoursAlyra/ALYRA_exercice3/truffle$ truffle migrate --network goerli

Compiling your contracts...

- Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)

- Network name:    'goerli-fork'
-Network id:   5
- Block gas limit: 30000000 (0x1c9c380)


1_deploy_voting.js


   Deploying 'Voting'
   > block number:        7993238
   > block timestamp:     1669035777
   > account:             0x867b5457aCFc1253123774c49d2814Ff4383B1Ec
   > balance:             0.286245349164925759
   > gas used:            2068131 (0x1f8ea3)
   > gas price:           72.762194169 gwei
   > value sent:          0 ETH
   > total cost:          0.150481749388928139 ETH

   -------------------------------------
   > Total cost:     0.150481749388928139 ETH

Summary
- Total deployments:   1
- Final cost:          0.150481749388928139 ETH


Starting migrations...
- Network name:    'goerli'
- Network id:      5
- Block gas limit: 30000000 (0x1c9c380)


1_deploy_voting.js


Deploying 'Voting'
   - transaction hash:    0x862680b076dcaada25b5ff3c0818b5ce4008766c3bed64baef93a453d7bfb23f
   - Blocks: 0            Seconds: 16
   - contract address:    0x563Fa2c815d6D545bf53ca60351191Dd486c5494
   - block number:        7993243
   - block timestamp:     1669035804
   - account:             0x867b5457aCFc1253123774c49d2814Ff4383B1Ec
   - balance:             0.239800408553713096
   - gas used:            2068131 (0x1f8ea3)
   - gas price:           95.219640342 gwei
   - value sent:          0 ETH
   - total cost:          0.196926690000140802 ETH

   - Saving artifacts
   -------------------------------------
   - Total cost:     0.196926690000140802 ETH

Summary

- Total deployments:   1
- Final cost:          0.196926690000140802 ETH


##instruction pour installer et tester en local le contrat

- installer node, truffle, ganache

ouvir un nouvau terminal :
- lancer ganache au moyen du terminal avec la commande ganache

ouvir un nouvau terminal :
- cd truffle
- truffle migrate

ouvir un nouvau terminal :
- cd client
- npm run start

