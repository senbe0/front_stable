import Web3 from 'web3'
var web3 = false;

    if (window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
        }

export default web3