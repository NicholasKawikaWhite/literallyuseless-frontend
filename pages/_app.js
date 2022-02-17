import '../styles/globals.css'
import Image from 'react-bootstrap/Image';
import PriceBadge from '../components/price-badge';
import Card from '../components/card';
import Link from 'next/link';

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


function App({ Component, pageProps }) {
  return (
    <div className="pt-4 px-6 mx-auto lg:container flex flex-col">
      <header className="flex items-center justify-between flex-0">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/mask_clear.png" width="64" height="64" className="pixelated" alt="Literally Useless Logo" />
            <div className="leading-4">
              <h1 style={{"width": "400px"}} className="font-primary bodyFont leading-5 items-center text-xl tracking-tight text-dark">Mask Between Bites and Sips</h1>
            </div>
          </a>
        </Link>
        <div className='flex flex-row items-center space-x-8'>
        <a href="https://google.com" alt="Documentation button" className='font-primary bodyFont2 hover-underline-animation'>Merch Store</a>
          <a href="https://google.com" alt="Documentation button" className='font-primary bodyFont2 hover-underline-animation'>Documentation</a>
          <a href="https://google.com" alt="Documentation button" className='font-primary bodyFont2 hover-underline-animation'>How To Buy</a>

          <PriceBadge></PriceBadge>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className="w-full left-0 bottom-0 py-4 flex-0">
        <div className='w-full flex space-x-4 mb-2 justify-center items-center'>
          <a className='z-10 w-10 h-10 ' href='https://discord.com' target='_blank' rel="noreferrer">
            <Image src="/discord.png" alt="discord logo"></Image>
          </a>
          <a className='z-10 w-10 h-10 ' href='https://twitter.com/' target='_blank' rel="noreferrer">
            <Image src="/twitter.png" alt="twitter logo"></Image>
          </a>
        </div>
        <Card></Card>
        
        <div className='fixed' style={{"transform": "rotate(20deg)", left: "-420px", bottom:"-420px"}}>
          <Image src="/pileLeaves.png" alt="pile of trash"></Image>
        </div>
        <div className='fixed' style={{"transform": "rotate(-20deg)", right: "-420px", bottom:"-420px"}}>
          <Image src="/pileLeaves.png" alt="pile of trash"></Image>
        </div>
      </footer>

    </div>
  )
}

/*
          <a className='text-neutral hover-underline-animation' href='our-team'>earn $LITTY</a>
          <a className='text-neutral hover-underline-animation' href='our-team'>our team</a>
*/

export default App;