const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = Date.now();
    }

    calculateHash() {
        return SHA256(this.fromAddress + this.toAddress + this.amount + this.timestamp).toString();
    }

    signTransaction(signingKey) {
        if (signingKey.getPublic('hex') !== this.fromAddress) {
            throw new Error('You cannot sign transactions for other wallets!');
        }

        const hashTx = this.calculateHash();
        const sig = signingKey.sign(hashTx, 'base64');

        this.signature = sig.toDER('hex');
    }

    isValid() {

        if (this.fromAddress === null) return true;

        if (!this.signature || this.signature.length === 0) {
            throw new Error('No signature in this transaction');
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');
        return publicKey.verify(this.calculateHash(), this.signature);
    }
}

class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("BLOCK MINED: " + this.hash);
    }

    hasValidTransactions() {
        for (const tx of this.transactions) {
            if (!tx.isValid()) {
                return false;
            }
        }
        return true;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block(Date.parse("2017-01-01"), [], "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress) {
        const rewaedTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewaedTx);

        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [];
    }

    addTransaction(transaction) {
        if (!transaction.fromAddress || !transaction.toAddress) {
            throw new Error('Transaction must include from and to address');
        }
        if (!transaction.isValid()) {
            throw new Error('Cannot add invalid transaction to chain');
        }
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                if (trans.toAddress == address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (!currentBlock.hasValidTransactions()) {
                return false;
            }
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.calculateHash()) {
                return false;
            }
        }
        return true;
    }
}

//Writing
function saveJSON(filename = "") {
    return file.writeFileSync(filename, JSON.stringify(blockChainCoin, null, 2));
  }
  
  //Load
  const dataSaved = loadJSON("./src/dataSaved.json");
  
  //Add Block 2
  console.log("Mining block 2...");
  blockChainCoin.addBlock(new Block(4, "2/04/2022", { amount: 10 }));
    //Add Block 3
  console.log("Mining block 3...");
  blockChainCoin.addBlock(new Block(5, "3/04/2022", { amount: 20 }));
    //Add Block 4
  console.log("Mining block 4...");
  blockChainCoin.addBlock(new Block(6, "4/04/2022", { amount: 30 }));
    //Add Block 5
  console.log("Mining block 5...");
  blockChainCoin.addBlock(new Block(7, "5/04/2022", { amount: 40 }));
    //Add Block 6
  console.log("Mining block 6...");
  blockChainCoin.addBlock(new Block(8, "6/04/2022", { amount: 50 }));
    //Add Block 7
  console.log("Mining block 7...");
  blockChainCoin.addBlock(new Block(9, "7/04/2022", { amount: 60 }));
  
  //dataSaved.json  // save
  console.log("Mining block 8...");
  blockChainCoin.addBlock(new Block(10, "8/04/2022", { amount: 70 }));
  
  //Save
  saveJSON("./src/dataSaved.json", data);
  
  //print
  console.log(loadJSON('./src/dataSaved.json'));

module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;