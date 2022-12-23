import web3 from './web3'

let address = '0xD45f7Db3dDEb41fF9c039fa3520c390CefD79dB0';
let abi = [{"inputs":[{"internalType":"address payable","name":"creator","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"inputs":[{"internalType":"string","name":"studentHash","type":"string"}],"name":"isbuyer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3a7e7426"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x481c6a75"},{"inputs":[],"name":"minimumPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x7f386b6c"},{"inputs":[{"internalType":"string","name":"studentHash","type":"string"}],"name":"registerBuyer","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0x0c6a27bc"},{"inputs":[],"name":"sendAllEtherToManager","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x183adf2e"}]
let contract = false;

if (web3 != false) {
    contract = new web3.eth.Contract(abi, address);
} 


export default contract