var Web3 = require('web3');

// Local Ethereum URL with Ganache GUI 
var url = 'HTTP://127.0.0.1:7545';

var web3 = new Web3(url);

//List all the accounts.
web3.eth.getAccounts().then(accounts => console.log(accounts));
