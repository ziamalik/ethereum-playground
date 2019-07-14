var Web3 = require('web3');
var EthereumTransaction = require("ethereumjs-tx").Transaction;

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

//Get the Gas Price in the network
web3.eth.getGasPrice().then(p => {console.log("Gas price: " + p);});

var rawTransaction = { 
    nonce: 0, 
    to: receivingAddress, 
    gasPrice: 2000, 
    gasLimit: 30000, 
    value: 1000000000000000000, 
    data: "" 
};

//Signing the transactions
var privateKeySender = 'ed03d5e3799e759abd8ceb303592a7fb0dbe5912db115ff57625fd901ded9357';
var privateKeySenderHex = new Buffer(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

//Sending the transaction to network
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction).then(receipt => console.log("Transaction receipt: ", receipt));







