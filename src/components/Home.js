import 'react-slideshow-image/dist/styles.css'
import {Container } from 'react-bootstrap'
import { Fade } from 'react-slideshow-image';
import Img4 from './assets/img4.JPG'
import Img3 from './assets/img3.JPG'
import Img2 from './assets/img2.JPG';
import Img1 from './assets/img1.JPG';

function Home() {
  return (
    <div>
    <main>
      <center>
        <div>
               <div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg">
               </div>
               <div style={{paddingTop: 100}}></div>
               <h1 style={{color:'black'}}>Gallery</h1><br/>
               <div style={{paddingTop: 50}}></div>
               <Container>
               <div className="slide-container">
        <Fade>
            <div className="each-slide">
            <b><div style={{ color: 'black'}}>Inauguration By IIT Bhubaneswar Director, Prof. Ratnam V. Raja Kumar</div></b><br/>
              <img src={Img1} height='400'/>
            </div>
            <div className="each-slide">
            <div style={{ color: 'black'}}></div><br/><br/>
              <img src={Img2} height='500'/>
            </div>
            <div className="each-slide">
            <b><div style={{ color: 'black'}}>Aissq 2018 at IIT Bhubaneswar</div></b><br/>
              <img src={Img3} height='400'/>
            </div>
            <div className="each-slide">
            <b><div style={{ color: 'black'}}>Seminar on Being Human in the Age of Science and Technology, at IIT Bhubaneswar on 29 Jan, 2020</div></b><br/>
              <img src={Img4} height='400'/>
            </div>
        </Fade>
               </div>
               </Container>
               <div style={{paddingTop: 40}}></div>
               <hr/>
               <Container>
               <p align="justify" style={{color: 'black', fontSize: '60'}}>A Seminar on ‘Being Human in the Age of Science and Technology’, at IIT Bhubaneswar on 29 Jan, 2020. Speakers from IIT Bhubaneswar, IIT (BHU) Varanasi, IIT Tirupati and Bhaktivedanta Institute spoke on multiple topics such as ‘Being Human in the Era of Artificial Intelligence’ , ‘What is Life – Lessons learned from the foundations of Science and Spirituality’, ‘Being Human in the age of Science and Technology – An Attempt towards Perfection’, ‘Being Human – A Vedantic Perspective’ and others.</p>
               </Container>
               <div style={{paddingTop: 50}}></div>
        </div>
      </center>
    </main>
    </div>
    
  );
}

export default Home;