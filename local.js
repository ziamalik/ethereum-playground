var Web3 = require('web3');
var EthereumTransaction = require("ethereumjs-tx");

// Local Ethereum URL with Ganache GUI 
var url = 'HTTP://127.0.0.1:7545';

var web3 = new Web3(url);

//List all the accounts.
web3.eth.getAccounts().then(accounts => {
    console.log("All Accounts:");
    console.log(accounts);
});


//Preparing for the transaction
var sendingAddress = '0x3493652Fb3E0e63D1B14fCc648743Cf1A5254f74';
var receivingAddress = '0xb21a1201dE48B9deBEaD7F1d7e9aBC707ddB6e96';

web3.eth.getBalance(sendingAddress).then(sb => {
    console.log("Sending Account Balance: " + sb);
});
web3.eth.getBalance(receivingAddress).then(rb => {
    console.log("Receiving Account Balance: " + rb);
});