
import { Card, Row, Col, Container } from 'react-bootstrap'
import Loc from './assets/location.png'
import Mail from './assets/mail.jpg'
import Phone from './assets/phone.jpg'

function Contact() {
    return (
      <div>
         <main>
           <center>
             <div>
					     <div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg">
					     </div>
				     </div>
             <div style={{paddingTop: 50}}></div>
             <h1><b style={{ color:'black'}}>Contact Details </b></h1><br/><br/>
             <Container style={{ backgroundColor: 'white', color: 'black'}}>
              <Row>
                <Col>
               <div align="center">
               <img src={Loc} height="255" /><br/>
               <div>Bhaktivedanta Institute Bhubaneswar,<br/> near IIT Bhubaneswar, Khudupur, Jatni,<br/> Khordha, Odisha, 752050</div>
               </div>
               <br/>
               </Col>
               <Col>
               <div align="center">
               <img src={Mail} height="255" /><br/>
               <a href="mailto:jdhal@binstitute.org" style={{ textDecoration: 'none', color: 'black'}}>jdhal@binstitute.org</a><br/>
               <a href="http://www.binstitute.org/" style={{ textDecoration: 'none', color: 'black'}} target="_blank" rel="noopener noreferrer">www.binstitute.org</a>
               </div>
               <br/>
               </Col>
               <Col>
               <div align="center">
               <img src={Phone} height="255" /><br/>
               <a href="tel:+91-9330010818" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black'}}>+91-9330010818</a>
               </div>
               <br/>
               </Col>
              </Row>
             </Container>
             <div style={{paddingTop: 100}}></div>
           </center>
          </main>
    </div>
  );
}

export default Contact;