var Web3 = require('web3');
var constants = require("./constants");

//Make sure you update the constant.js file
var web3 = new Web3(constants.TEST_ETH_URL);

//Print out the account balance in Wei
web3.eth.getBalance(constants.TEST_ETH_ADDRESS, (err, bal) => { 
    console.log("Balance:" + bal + " Wei"); 
});


//Print out the account balance in Ether
web3.eth.getBalance(constants.TEST_ETH_ADDRESS, (err, bal) => { 
    ether = web3.utils.fromWei(bal, 'ether')
    console.log("Balance:" + ether + " Ether"); 
});


//Get the transaction count
web3.eth.getTransactionCount(constants.TEST_ETH_ADDRESS).then(count => {
    console.log("Transaction Count: " + count);

});