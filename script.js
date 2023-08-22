const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; 
const abi = [[
	{
		"inputs": [],
		"name": "increment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "storedValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]]; 

const web3 = new Web3(Web3.givenProvider);
web3.eth.defaultAccount = web3.eth.accounts[0]; // Set default account

const simpleContract = new web3.eth.Contract(abi, contractAddress);

function setValue() {
    const newValue = parseInt(document.getElementById('newValue').value);
    simpleContract.methods.set(newValue).send({ from: web3.eth.defaultAccount })
    .then(() => console.log('Value set successfully'));
}

function getValue() {
    simpleContract.methods.get().call()
    .then(value => {
        document.getElementById('valueDisplay').textContent = `Current Value: ${value}`;
    });
}

function incrementValue() {
    simpleContract.methods.increment().send({ from: web3.eth.defaultAccount })
    .then(() => console.log('Value incremented successfully'));
}
