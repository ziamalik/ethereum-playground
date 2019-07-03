var Web3 = require('web3');
var constants = require("./constants");

//Make sure you update the constant.js file
var web3 = new Web3(constants.ETH_URL);

//Print out the account balance in Wei
web3.eth.getBalance(constants.ETH_ADDRESS, (err, bal) => { 
    console.log(bal); 
});

