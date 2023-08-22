const contractAddress = 'CONTRACT_ADDRESS'; // Replace with your contract address
const abi = [...]; // Replace with your contract ABI

const web3 = new Web3(Web3.givenProvider);
web3.eth.defaultAccount = web3.eth.accounts[0]; // Set default account
const simpleContract = new web3.eth.Contract(abi, contractAddress);

function setValue() {
    console.log('setValue() called'); // Debugging log
    const newValue = parseInt(document.getElementById('newValue').value);
    simpleContract.methods.set(newValue).send({ from: web3.eth.defaultAccount })
    .then(() => {
        console.log('Value set successfully'); // Debugging log
        document.getElementById('resultDisplay').textContent = 'Value set successfully';
    });
}

function getValue() {
    console.log('getValue() called'); // Debugging log
    simpleContract.methods.get().call()
    .then(value => {
        console.log('Value retrieved:', value); // Debugging log
        document.getElementById('valueDisplay').textContent = `Current Value: ${value}`;
    });
}

function incrementValue() {
    console.log('incrementValue() called'); // Debugging log
    simpleContract.methods.increment().send({ from: web3.eth.defaultAccount })
    .then(() => {
        console.log('Value incremented successfully'); // Debugging log
        document.getElementById('resultDisplay').textContent = 'Value incremented successfully';
    });
}
