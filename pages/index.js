
import Head from 'next/head';
import UselessButton from '../components/useless-button';
import Script from 'next/script';
import Cards from '../components/card';
import Container from 'react-bootstrap/Container';
import { Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <main className="flex items-center h-full static items-center justify-center">
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <Head>
        <title>KMJ</title>
        <meta name="description" content="KMJ"></meta>
      </Head>
      <div className='p-8 mr-32'>
        <h1 className="font-primary text-dark text-9xl mb-4">KMJ</h1>
        <h2 className='text-primary font-primary text-7xl font-mono'>
          The Student Crypto,<br/>Of OHIO STATE
        </h2>
        <div className='mt-12'>
          <UselessButton to={"https://traderjoexyz.com/trade?inputCurrency=&outputCurrency=0x640fa02abe368f18f0456ac51c9f7737c2383f9e"}>
            <span className='text-secondary hover-underline-animation text-lg'>click to buy</span>
          </UselessButton>
        </div>
      </div>
      <figure>
        <model-viewer style={{width:"400px",height:"600px"}} loading="eager" auto-rotate-delay="1000" camera-orbit="0 80deg 0"
          interaction-prompt="none" rotation-per-second="200%" camera-controls auto-rotate environment-image="neutral" 
          disable-zoom shadow-intensity="0.6" src="/blockO.glb"></model-viewer>
      </figure>
    </main>
    

  )
}

/*
<main className="flex items-center h-full static items-center justify-center">
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <Head>
        <title>KMJ</title>
        <meta name="description" content="KMJ"></meta>
      </Head>
      <div className='p-8 mr-32'>
        <h1 className="font-primary text-dark text-9xl mb-4">KMJ</h1>
        <h2 className='text-primary font-primary text-7xl font-mono'>
          The Student Crypto,<br/>Of OHIO STATE
        </h2>
        <div className='mt-12'>
          <UselessButton to={"https://traderjoexyz.com/trade?inputCurrency=&outputCurrency=0x640fa02abe368f18f0456ac51c9f7737c2383f9e"}>
            <span className='text-secondary hover-underline-animation text-lg'>click to buy</span>
          </UselessButton>
        </div>
      </div>
      <figure>
        <model-viewer style={{width:"400px",height:"600px"}} loading="eager" auto-rotate-delay="1000" camera-orbit="0 65deg 0"
          interaction-prompt="none" rotation-per-second="200%" camera-controls auto-rotate environment-image="neutral" 
          disable-zoom shadow-intensity="0.6" src="/blockO.glb"></model-viewer>
      </figure>
    </main>
*/

/* Tried to make the site more mobile Friendly
<main className="flex items-center h-full static items-center justify-center">
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      <Head>
        <title>KMJ</title>
        <meta name="description" content="KMJ"></meta>
      </Head>
        <Container fluid="md" >
        <Row lg={1}>
            <Col>
            <div className='p-8 mr-32'>
            <h1 className="font-primary text-dark text-9xl mb-4">KMJ</h1>
            <h2 className='scarlet font-primary text-7xl font-mono wid'>
              The Student Crypto,<br/>Of OHIO STATE
            </h2>
            <div className='mt-12'>
              <UselessButton to={"https://traderjoexyz.com/trade?inputCurrency=&outputCurrency=0x640fa02abe368f18f0456ac51c9f7737c2383f9e"}>
                <span className='text-secondary hover-underline-animation text-lg'>click to buy</span>
              </UselessButton>
            </div>
          </div>
            </Col>
            </Row>
        </Container>
      <figure>
        <model-viewer style={{width:"400px",height:"520px"}} loading="eager" auto-rotate-delay="1000" camera-orbit="0 65deg 0"
          interaction-prompt="none" rotation-per-second="200%" camera-controls auto-rotate environment-image="neutral" 
          disable-zoom shadow-intensity="0.6" src="/blockO.glb"></model-viewer>
      </figure>

    </main>
*/
