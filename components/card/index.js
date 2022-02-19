import React from "react";
import Container from 'react-bootstrap/Container';
//import addIconWallet from "pages/_app.js";

const tokenAddress = '0x640fa02abe368f18f0456ac51c9f7737c2383f9e';
const tokenSymbol = 'STFR';
const tokenDecimals = 18;
const tokenImage = 'https://kmjcoin.netlify.app/mask_clear.png';

async function addIconWallet() {
  try {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });
  } catch (error) {
    console.error(error)
  }
}

export default class Cards extends React.Component {
    
  render() {
    return (
      <div>
        <Container>
          <div className=' flex space-x-4 justify-center items-center'>
          <a className='text-neutral bodyFont2 hover-underline-animation' target='_blank' rel="noreferrer" href='https://snowtrace.io/address/0x00a1f22156A6dbf56C9e9cb16Ec63B0F9Ba94ad7'>contract</a>
          <p>|</p>
          <a className='text-neutral bodyFont2 hover-underline-animation' target='_blank' rel="noreferrer" href='https://www.coinbase.com/price/avalanche'>Buy Avalanche</a>
          <p>|</p>
          <a className='text-neutral bodyFont2 hover-underline-animation cursor-pointer' onClick={addIconWallet}>add to Metamask</a>
        </div>
        </Container>
        </div>
    );
  }
}
