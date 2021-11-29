
import { Container, Col, Row, Card } from 'react-bootstrap'
import './abt.css'
import Director from './assets/director.jpg'

function AboutFounderDirector(){
    return(
      <div id="founderDirector">
        <main>
          <center>
            <div>
		          <div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg"></div>
			      </div>
            <Container style={{color: 'black', paddingTop: 50,paddingBottom: 50}}>
            <b style={{fontSize: 30}}>FOUNDER DIRECTOR</b><br/><br/>
            <img width="180" height="213" src={Director} class="vc_single_image-img attachment-full" alt="" /> <br />
            <p align="justify"><br/>
              <p>
               Dr. Thoudam Damodara Singh (1937-2006), also known as His Holiness Bhaktisvarūpa Dāmodara Swami is the founding director of the Bhaktivedanta Institute. He was one of the world’s pioneer exponents of science-spirituality dialogue and inter-faith peace initiatives. He identified the cause of many of the problems in the world today such as terrorism, environmental issues, and social and religious conflict to be due to a lack of understanding between the fields of empirical science and religion. As the International Director of the Bhaktivedanta Institute, he wrote more than thirty books, gave hundreds of talks and seminars, and organized numerous scholarly discussions and international conferences on topics related to the science and spirituality nexus. <br />
                His tireless efforts were revolutionary and brought together some of the best minds in the world – Nobel Laureates, scientists, spiritualists, and world leaders – to a common platform of constructive dialogue and action for a more peaceful world. While traveling extensively around the world, he built bridges between communities, cultures and ideologies. Everywhere he went, he sought to cultivate the human spirit of inquiry, love and peace. Primarily, he emphasized the need for a new paradigm of life beyond the mechanistic model of atoms and molecules, to include that of consciousness, meaning and purpose.
              </p>
              <a href="http://binstitute.org/founder-director/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>
            </p>
            </Container>
          </center>
        </main>
      </div>
    );
}

export default AboutFounderDirector;