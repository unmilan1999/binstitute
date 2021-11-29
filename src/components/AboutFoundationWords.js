
import { Container, Col, Row, Card } from 'react-bootstrap'
import './abt.css'

function AboutFoundationWords(){
    return(
      <div id="foundationWords">
        <main>
          <center>
            <div>
			    <div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg"></div>
		    </div>
            <Container style={{color: 'black', paddingTop: 50,paddingBottom: 50}}>
            <p align="justify">
              <p style={{textAlign:"center"}} >
                <b style={{fontSize: 30}}>Foundation Words</b><br/> <br />
                <h4>FOUNDATIONAL SLOKA OF BHAKTIVEDANTA INSTITUTE</h4>
                <h6>SRIMAD BHAGAVATAM 1.5.22</h6>
                idaṁ hi puṁsas tapasaḥ śrutasya vā <br />
                sviṣṭasya sūktasya ca buddhi-dattayoḥ <br />
                avicyuto ’rthaḥ kavibhir nirūpito <br />
                yad-uttamaśloka-guṇānuvarṇanam <br /> <br />
                <h5>TRANSLATION</h5>
                Learned circles have positively concluded that the infallible purpose of the advancement of knowledge, namely austerities, study of the Vedas, sacrifice, chanting of hymns and charity, culminates in the transcendental descriptions of the Lord, who is defined in choice poetry. <br />
                <a href="http://binstitute.org/foundation-words/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>
              </p>
            </p>
            </Container>
          </center>
        </main>
      </div>
    );
}

export default AboutFoundationWords;