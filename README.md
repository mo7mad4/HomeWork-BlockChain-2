# HomeWork-BlockChain-2
<h4>In the file blockchain.js we show this code</h4>

```js
//Writing
function saveJSON(filename = "") {
    return file.writeFileSync(filename, JSON.stringify(blockChainCoin, null, 2));
  }
```

  ```js
//Load
  const dataSaved = loadJSON("./src/dataSaved.json");
  ```
  ```js
  //Add Block 2
  console.log("Mining block 2...");
  blockChainCoin.addBlock(new Block(4, "2/04/2022", { amount: 10 }));
```
```js
    //Add Block 3
  console.log("Mining block 3...");
  blockChainCoin.addBlock(new Block(5, "3/04/2022", { amount: 20 }));
  ```
  ```js
    //Add Block 4
  console.log("Mining block 4...");
  blockChainCoin.addBlock(new Block(6, "4/04/2022", { amount: 30 }));
  ```
  ```js
    //Add Block 5
  console.log("Mining block 5...");
  blockChainCoin.addBlock(new Block(7, "5/04/2022", { amount: 40 }));
  ```
  ```js
    //Add Block 6
  console.log("Mining block 6...");
  blockChainCoin.addBlock(new Block(8, "6/04/2022", { amount: 50 }));
  ```
  ```js
    //Add Block 7
  console.log("Mining block 7...");
  blockChainCoin.addBlock(new Block(9, "7/04/2022", { amount: 60 }));
 ```
 ```js
 //Add Block 8
  console.log("Mining block 8...");
  blockChainCoin.addBlock(new Block(10, "8/04/2022", { amount: 70 }));
  ```
  ```js
  //Save
  saveJSON("./src/dataSaved.json", data);
  ```
  ```js
  //print
  console.log(loadJSON('./src/dataSaved.json'));
  ```
  
  <h1>Output</h1>
  <h4>In file json dataSaved we well get this output</h4>

  ```json
{
    "chain": [
      {
        "index": 0,
        "timestamp": "25/12/2020",
        "data": "Genesis block",
        "previousHash": "0",
        "hash": "0fc4187c265dec7cefcacf8e07b88f656b8db3686f4985d61ceb8354e3722bee",
        "nonce": 0
      },
      {
        "index": 1,
        "timestamp": "18/02/2021",
        "data": {
          "amount": 4
        },
        "previousHash": "0fc4187c265dec7cefcacf8e07b88f656b8db3686f4985d61ceb8354e3722bee",
        "hash": "000b47f2e95447b64ae15db48a485794164f4563351d093ba5b1a29f4e892342",
        "nonce": 796
      },
      {
        "index": 2,
        "timestamp": "18/04/2021",
        "data": {
          "amount": 8
        },
        "previousHash": "000b47f2e95447b64ae15db48a485794164f4563351d093ba5b1a29f4e892342",
        "hash": "00e7da753fccc66491563fcdf2571c88e39f83780e6875f56f38cdb86791ab2d",
        "nonce": 588
      },
      {
        "index": 3,
        "timestamp": "18/04/2021",
        "data": {
          "amount": 10
        },
        "previousHash": "00e7da753fccc66491563fcdf2571c88e39f83780e6875f56f38cdb86791ab2d",
        "hash": "00cadfacb09eec905bff1b385b91a154db4d664e23f646c8401709c0d08f4062",
        "nonce": 345
      },
      {
        "index": 4,
        "timestamp": "2/04/2022",
        "data": {
          "amount": 10
        },
        "previousHash": "00cadfacb09eec905bff1b385b91a154db4d664e23f646c8401709c0d08f4062",
        "hash": "00c117cd9cd9d585aa08db1c5be40ff768c6533bf57c14c7222234eafa7210b0",
        "nonce": 303
      },
      {
        "index": 5,
        "timestamp": "3/04/2022",
        "data": {
          "amount": 20
        },
        "previousHash": "00c117cd9cd9d585aa08db1c5be40ff768c6533bf57c14c7222234eafa7210b0",
        "hash": "00a7256630c9b4b4699c69935e30478943684211df65dca74b24e886a399b95d",
        "nonce": 206
      },
      {
        "index": 6,
        "timestamp": "4/04/2022",
        "data": {
          "amount": 30
        },
        "previousHash": "00a7256630c9b4b4699c69935e30478943684211df65dca74b24e886a399b95d",
        "hash": "004ae8f9c35891d1742f7f06824cb08c9e0743eb51ac1ee4f7688efff2d795b9",
        "nonce": 31
      },
      {
        "index": 7,
        "timestamp": "5/04/2022",
        "data": {
          "amount": 40
        },
        "previousHash": "004ae8f9c35891d1742f7f06824cb08c9e0743eb51ac1ee4f7688efff2d795b9",
        "hash": "00cfb337fd9d1606f0eb24986be1b104d5ea92ba7df17b23c2fcc32b2cbaeba9",
        "nonce": 81
      },
      {
        "index": 8,
        "timestamp": "6/04/2022",
        "data": {
          "amount": 50
        },
        "previousHash": "00cfb337fd9d1606f0eb24986be1b104d5ea92ba7df17b23c2fcc32b2cbaeba9",
        "hash": "0048017ade1a542c409660e4f3befdc20213fcd747392688891f1e1266d5dec8",
        "nonce": 832
      },
      {
        "index": 9,
        "timestamp": "7/04/2022",
        "data": {
          "amount": 60
        },
        "previousHash": "0048017ade1a542c409660e4f3befdc20213fcd747392688891f1e1266d5dec8",
        "hash": "00eb2a71401facb6e808ac2d82ae5f877282749f80216d2a9e8d6964866fb881",
        "nonce": 62
      },
      {
        "index": 10,
        "timestamp": "8/04/2022",
        "data": {
          "amount": 70
        },
        "previousHash": "00eb2a71401facb6e808ac2d82ae5f877282749f80216d2a9e8d6964866fb881",
        "hash": "00c6ac3d211f2df60a602419174aaf53ad012db0c45e6aac9a4890e2c70f566c",
        "nonce": 130
      }
    ],
    "difficulty": 2
  }
```
