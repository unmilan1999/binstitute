
import { Container, Col, Row, Card } from 'react-bootstrap'
import './abt.css'

function About(){
    return(
        <div>
         <main>
           <center>
           <div>
					<div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg">
					</div>
				</div>
                <Container style={{color: 'black', paddingTop: 50,paddingBottom: 50}}>
                <p align="justify">
                <b style={{fontSize: 30}}>A BRIEF PROFILE</b><br/>
Bhaktivedanta Institute is an internationally acclaimed non-profit organization dedicated towards the cause of helping humanity through the interface of modern science and technology with spiritual traditions of the world. The institute board mostly comprises of alumni and faculties of IITs (Indian Institute of Technology) who are well-established in their academic pursuits and are open and have keen interest in the wisdom hidden in various spiritual traditions. They go beyond the boundaries of specific religious rituals and rather deliberate upon the core values, deeper meanings and bigger questions of life and cosmos – an open territory for both scientists and spiritualists.

The institute has its offices/representatives in India (Kolkata, Bangalore, Sambalpur, Kharagpur, Navadvip, Hyderabad, Vijaywada, Karnal, Imphal, Agartala), Indonesia (Denpasar, Jakarta), Malaysia (Johor Baru), Italy (Rome), USA (Denver), Switzerland (Zurich), France (Toulouse). <a href="http://binstitute.org/bhaktivedanta-institute/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>

<br/><br/>
                <b style={{fontSize: 30}}>FOUNDER ACHARYA</b><br/>
                His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupāda (1896 –1977), Founder-Ācārya of the Bhaktivedanta Institute was one of the most prominent spiritual and cultural ambassadors of the 20th century. He belongs to the monotheistic Gaudiya Vaishnava Vedanta tradition of India which upholds the three stages of realization of the Absolute Truth namely, Impersonal Brahman, Super Soul and finally Supreme Personality of Godhead as revealed in Śrīmad-Bhāgavatam, the natural commentary on the vedantasutra, and various other spiritual traditions of the World. He had a profound notion of the many facets of science and religion. He strongly felt that scientific knowledge would remain incomplete if we ignore consciousness based paradigms offered by religions of the world in their search for the deeper meaning of our existence. He felt that a synthesis of science and spirituality would only be possible through the joint efforts and open discussions by the deep thinkers of the world. He promoted the concept that “Life comes from Life” indicating a non-material origin of life, and was hopeful that that scientists across the world would be open to scientific exploration of this alternative paradigm. <a href="http://binstitute.org/founder-acharya/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>
                <br/><br/><b style={{fontSize: 30}}>FOUNDER DIRECTOR</b><br/>
                Dr. Thoudam Damodara Singh (1937-2006), also known as His Holiness Bhaktisvarūpa Dāmodara Swami is the founding director of the Bhaktivedanta Institute. He was one of the world’s pioneer exponents of science-spirituality dialogue and inter-faith peace initiatives. He identified the cause of many of the problems in the world today such as terrorism, environmental issues, and social and religious conflict to be due to a lack of understanding between the fields of empirical science and religion. As the International Director of the Bhaktivedanta Institute, he wrote more than thirty books, gave hundreds of talks and seminars, and organized numerous scholarly discussions and international conferences on topics related to the science and spirituality nexus. <a href="http://binstitute.org/founder-director/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>
                </p>
                </Container>
            </center>
        </main>
        </div>
    );
}

export default About;