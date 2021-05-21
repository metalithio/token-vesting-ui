import Network from "./network";
import Web3 from 'web3';
import TokenVesting from './abis/TokenVesting';
import SimpleToken from './abis/SimpleToken';


export async function getTokenVesting(address) {
	const provider = await Network.provider();
	const web3 = new Web3(provider);
  const tokenVesting = new web3.eth.Contract(
  		TokenVesting.abi,
  		address,
  	)
  return tokenVesting;
}

export async function getSimpleToken(address) {
  const provider = await Network.provider();
  const web3 = new Web3(provider);

  const simpleToken = new web3.eth.Contract(
  	SimpleToken.abi,
  	address,
  );
  return simpleToken
}
