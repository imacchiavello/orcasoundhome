import Head from 'next/head'
import frequency1 from '../images/frequency1.png'
import Link from 'next/link'
import Image from 'next/image'
import orca from '../images/orca2.png'
import orcabreach from '../images/orca-breach.jpg'
import Carousel from 'react-bootstrap/Carousel'
import roundorca from '../images/roundorca.png'
import salishseai from '../images/salishsea.png'
import learnStyles from '../styles/Learn.module.css'
import ReactAudioPlayer from 'react-audio-player';
import orcasound from '../public/music/orcasound1.mp3'
export const learn = () => {

   
    return (
        <>
        <Head>
<title>Orcasound</title>

        </Head>
        
       
 
    <body>
    <Image  className ={learnStyles.img}src={orca}
 width={1400}
 height={500}/>

    <h1 className={learnStyles.intro}>Learn</h1>
      <h2 className={learnStyles.tex}>orcasound</h2>
      <ul className={learnStyles.hello}> 
      <li>Sounds of the Salish Sea</li>
      <li>3 common calls</li>
      <li>Souther Resident Killer Whale Call Catalog</li>
      <li>Exhibits</li>
      </ul>

      <h1 className={learnStyles.salish}> Sounds Of The Salish Sea</h1>
      <p className={learnStyles.salishsea}>Explore common sounds of the Salish Sea by selecting the animals and  other objects in this
      panoramic soundscape of the inlandwaters of Washington State(USA) and British Columbia(Canada)</p>
      <div className={learnStyles.imageWrapper}>
<Image className={learnStyles.salishseaimg}
src={salishseai}
width={800}
height={450}
layout="intrinsic"
quality={65}/>
 </div>
 <div className={learnStyles.orca}>
 <Image src={roundorca}
 width={400}
 height={350}
 layout="intrinsic"
 quality={65}/>
 </div>
 <h2 className={learnStyles.calls}> 3 Common Calls</h2>

 <p className={learnStyles.callone}> 
 Conviniently a few calls are used almost 
 <br></br>
 exclusively by each souther resident killer pod.
 <br></br>
 This means that by memorizing just 3 calls.
 <br></br>
 you can tell with great certanty that you are hearing 
 <br></br>
 a particular pod of orcas</p>
<div>
 <div className={learnStyles.gallery}>
<Image src={frequency1}/>
<h6>J pod's Favorite call:501</h6>
<p>More description goes here</p>

<div>
<ReactAudioPlayer className={learnStyles.audio}
  src={orcasound}
  autoPlay={false}
  controls
/>
</div>

</div>



<div className={learnStyles.image}>
<Image src={frequency1}/>
<h6>K pod's Favorite call:516</h6>
<p>More description goes here</p>
<div>
<ReactAudioPlayer className={learnStyles.audio}
  src={orcasound}
  autoPlay={false}
  controls
/>

</div>


</div>




<div className={learnStyles.gallery2}>
<Image src={frequency1}/>
<h6>L pod's Favorite call:519</h6>
<p>More description goes here</p>

<div>
<ReactAudioPlayer className={learnStyles.audio}
  src={orcasound}
  autoPlay={false}
  controls
  alt="l pod favorite call"
/>
</div>
</div>
</div>

<p className={learnStyles.pods}>To learn more about differnt pods, visit Orcasound Youtube channel</p>
  

<div className={learnStyles.box}>

<Carousel fade>
  <Carousel.Item>
    <img
    width={500}
      className="d-block w-100"
      src="https://bloximages.chicago2.vip.townnews.com/goskagit.com/content/tncms/assets/v3/editorial/a/c5/ac5f9149-dae5-5b53-9ae4-676c7723878f/54714e3a792ad.image.jpg"
    />
    <Carousel.Caption>
      <h3>Southern Resident Killer Whale</h3>
      <p>L Pod.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://www.mmc.gov/wp-content/uploads/nmmlweb-killerwhale-lrg-101.jpg'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</div>
  


     
      </body>
        </>
    )
}

export default learn
