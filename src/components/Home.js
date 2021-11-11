import 'react-slideshow-image/dist/styles.css'
import {Container } from 'react-bootstrap'
import { Fade } from 'react-slideshow-image';
import Img4 from './assets/img4.jpg'
import Img3 from './assets/img3.JPG'
import Img2 from './assets/img2.JPG';
import Img1 from './assets/img1.jpg';
import Ev1 from './assets/event1.JPG';
import Ev2 from './assets/event2.JPG';
import Banner from './assets/banner.png';
import './assets/animate.min.css';
import './assets/mobile.css';


function Home() {
  return (
    /*
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
    </div>*/
    <div>
    <main>
      <center>

      <div class="d-flex flex-column min-vh-100">

<div id="o-banner" class="d-flex flex-column-reverse flex-grow-1">
    <div id="c1" class="w-100 d-flex flex-wrap justify-content-around bg-white">
        <div class="my-3 d-flex flex-nowrap animate__animated animate__zoomIn animate__faster animate__delay-1s">
        </div>
        <div class="my-3 d-flex flex-nowrap animate__animated animate__zoomIn animate__faster animate__delay-1s">
        </div>
        <div class="my-3 align-self-center animate__animated animate__zoomIn animate__faster animate__delay-1s">
         </div>
    </div>
    <div id="c2" class="p-2 p-sm-4 ml-md-auto col-12 col-md-8 col-lg-5" style={{backgroundColor: 'grey'}}>
        <h2 class="m-3 mx-sm-4 text-normal text-center animate__animated animate__backInUp animate__faster" style={{color:'white'}}> Welcome to</h2><br/><br/><br/>
        <div class="text-center mt-sm-4">
            <h1 class="mx-2 mx-sm-4 display-3 font-weight-bold animate__animated animate__backInLeft animate__faster animate__delay-1s" style={{color:'white'}}>Bhaktivedanta Institute</h1><br/><br/><br/><br/>
        </div>
    </div>
    <img id="replace" src={Banner} alt="Banner" />
</div>
</div>

<main class="container-lg px-0 flex-grow-1">
<div class="m-4">
    <hr style={{backgroundColor: 'grey', height: 1}}/>
    <div class="row row-cols-2 my-2 my-sm-4">
        <div class="col-12 col-sm-4 col-lg-6 order-sm-2">
            <div class="h-100 d-flex flex-column justify-content-center">
                <h1 class="title text-center my-2">Events</h1>
            </div>
        </div>
        <div class="col-12 col-sm-8 col-lg-6 order-sm-1">
          <Fade>
                        <div>
                            <img src={Ev1} class="d-block w-100" alt="Topic 1" />
                            <div class="carousel-caption">
                                <h4 style={{color: 'white'}}>Started the Construction (2016) </h4>
                            </div>
                        </div>
                        <div>
                            <img src={Ev2} class="d-block w-100" alt="Topic 2"/>
                            
                        </div>
          </Fade>
        </div>
    </div>
    <br/>
    <hr style={{backgroundColor: 'grey', height: 1}}/>
    <br/>
    <div class="row row-cols-2 my-2 my-sm-4">
        <div class="col-12 col-sm-4 col-lg-6 order-sm-1">
            <div class="h-100 d-flex flex-column justify-content-center">
                <h1 class="title text-center my-2">Gallery</h1>
            </div>
        </div>
        <div class="col-12 col-sm-8 col-lg-6 order-sm-2">
          <Fade style={{backgroundColor: 'purple'}}>
                        <div>
                            <div class="text-center d-flex flex-column justify-content-center">
                                <img src={Img1} style={{height:350}} />
                                <div class="align-self-center mb-3"><br/>
                                    <h3 class="text-white">Inauguration By IIT Bhubaneswar Director, Prof. Ratnam V. Raja Kumar</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-center d-flex flex-column justify-content-center">
                                <img src={Img3} style={{height:350}} />
                                <div class="align-self-center mb-3"><br/>
                                    <h3 class="text-white">Aissq 2018 at IIT Bhubaneswar</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-center d-flex flex-column justify-content-center">
                                <img src={Img4} style={{height:350}} />
                                <div class="align-self-center mb-3"><br/>
                                    <h3 class="text-white">Seminar on Being Human in the Age of Science and Technology, at IIT Bhubaneswar on 29 Jan, 2020
</h3>
                                </div>
                            </div>
                        </div>
        </Fade>
        </div>
    </div>
    
</div>
</main>

<div id="quote" class="mt-4 mt-sm-4">
    <blockquote class="container-lg mx-auto m-0 blockquote p-3 p-sm-5">
        <div class="rounded-lg p-3 p-sm-4 p-md-5 bg-white">
            <p class="text-justify"><span class="h5">A Seminar on ‘Being Human in the Age of Science and Technology’, at IIT Bhubaneswar on 29 Jan, 2020. Speakers from IIT Bhubaneswar, IIT (BHU) Varanasi, IIT Tirupati and Bhaktivedanta Institute spoke on multiple topics such as ‘Being Human in the Era of Artificial Intelligence’ , ‘What is Life – Lessons learned from the foundations of Science and Spirituality’, ‘Being Human in the age of Science and Technology – An Attempt towards Perfection’, ‘Being Human – A Vedantic Perspective’ and others.</span>
            </p>
        </div>
    </blockquote>
</div>
      </center>
    </main>
    </div>
    
  );
}

export default Home;