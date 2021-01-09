

let web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/db82b7b2e5cf4a46adb6e58f158c3cd6"));

//let web3 = new Web3(Web3.givenProvider);


console.log(web3);


console.log(web3.eth.getAccounts);
