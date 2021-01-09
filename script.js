

let web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/db82b7b2e5cf4a46adb6e58f158c3cd6"));

//let web3 = new Web3(Web3.givenProvider);


var abi = web3.eth.contract([
	{
		"constant": false,
		"inputs": [],
		"name": "add",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "subtract",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);


console.log(web3);


console.log(web3.eth.getAccounts);
