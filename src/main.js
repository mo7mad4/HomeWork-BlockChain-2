const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('fac47fe316527784096af0e5a53212d4033842029f96a61b4e9d4c5de5c26002');
const myWalletAddress = myKey.getPublic('hex');

let savjeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);


console.log('\n Starting the miner. . . ');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is', savjeeCoin.getBalanceOfAddress(myWalletAddress));

//savjeeCoin.chain[1].transactions[0].transactions = 1;

console.log('Is chain valid?', savjeeCoin.isChainValid());