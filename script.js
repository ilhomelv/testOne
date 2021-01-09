

//let web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/db82b7b2e5cf4a46adb6e58f158c3cd6"));

let web3 = new Web3("https://rinkeby.infura.io/v3/db82b7b2e5cf4a46adb6e58f158c3cd6");


var abiJSON = web3.eth.contract([
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


var contractAddress =   abiJSON.at('0xAff036FA0Cf3c5782ed2c1214AEbBCc6149931fa');

console.log(contractAddress);
console.log(web3);



if (typeof web3 !== 'undefined'){

	web3.eth.getAccounts(function(err, accounts){
		myAccountAddress = accounts[0];

		var myContract = new web3.eth.contract(abiJSON, contractAddress, {
			from: myAccountAddress, // default from address
			});

	});

}
