import Head from 'next/head'
import Image from 'next/image'
import orcas from '../images/orca-breach.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import indexStyles from '../styles/Index.module.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


export const index =() =>{
  return (
    <div classname={indexStyles.home}>
    <Head>
      <title>Orcasound liste live for orcas</title>
      <meta name ='keywords' content='orcasound allows your to listen to live southern killer resident whales live through our hydrophones'/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
   <body>
     <Image 
     className={indexStyles.landingImage}
     src={orcas}
     width={1400}
     height={600}/>

<h2 className={indexStyles.landingText}> Listen to Orcas Live</h2>
<br></br>
<h2 className={indexStyles.landingIntro}> What is Orcasound</h2>
<br></br>

<p className={indexStyles.paragraph}> Orcasound Connets your Headphones to live  hydrophones (underwater microphones),
your ears to the ocean sound. <br></br> 
Orcasound helps us explore and conserve marine life around the globe.Starting with studying and saving
the Southern Resident of the Pacific Northwest. <br></br>
At Orcasound you can listen for whales or learn more about marine bioacustics.
</p>


<div classname={indexStyles.card}  width={100}
    height={200} >

<CardDeck>
  <Card  >
    <Card.Img  classname={indexStyles.img}variant="top" src="https://i2.wp.com/www.orcasound.net/wp2017/wp-content/uploads/2020/10/Screen-Shot-2020-10-20-at-1.40.28-PM.png?resize=660%2C725&ssl=1" 
    width={300}
    height={400}/>
    <Card.Body>
     
      <Card.Text>
       bush point locationn 
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
   
    <Card.Body classname={indexStyles.hydro}>
      <Card.Title>Hydrophone Location</Card.Title>
      <Card.Text>
      <br></br>
         Orcasound is a cooperative hydrophone network and an open-source software &
hardware projects
<br></br>
<br></br>

We welcome your participation. If you'd like to host a hydrophone, do research, or 
incorporate Orcasound into the educational or outreach efforts of your organization,
you can join us as a member of the network{' '}
<br></br>
<br></br>

<Button classname={indexStyles.btn1} width={100}  height={100} margin ={10}>GET INVOLVED</Button> 

<Button classname={indexStyles.btn2}  width={100}  height={100} margin ={15} >LEARN </Button>
      </Card.Text>
    </Card.Body>
   
  
  </Card>
</CardDeck>
    
</div>

</body>

  </div>
  
  )
}

export default index