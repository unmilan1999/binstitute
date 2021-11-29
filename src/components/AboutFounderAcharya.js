
import { Container, Col, Row, Card } from 'react-bootstrap'
import './abt.css'
import Guru from './assets/guru.jpg'

function AboutFounderAcharya(){
    return(
      <div id="founderAcharya">
        <main>
          <center>
            <div>
				      <div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg"></div>
			      </div>
            <Container style={{ color: 'black', paddingTop: 50,paddingBottom: 50}}>
            <b style={{ fontSize: 30}}>FOUNDER ACHARYA</b> <br /><br/>
            <img width="161" height="213" src={Guru} class="vc_single_image-img attachment-full" alt="" />
            <p align="justify" > <br/>
              <p>
                His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupāda (1896 –1977), Founder-Ācārya of the Bhaktivedanta Institute was one of the most prominent spiritual and cultural ambassadors of the 20th century. He belongs to the monotheistic Gaudiya Vaishnava Vedanta tradition of India which upholds the three stages of realization of the Absolute Truth namely, Impersonal Brahman, Super Soul and finally Supreme Personality of Godhead as revealed in Śrīmad-Bhāgavatam, the natural commentary on the vedantasutra, and various other spiritual traditions of the World. He had a profound notion of the many facets of science and religion. He strongly felt that scientific knowledge would remain incomplete if we ignore consciousness based paradigms offered by religions of the world in their search for the deeper meaning of our existence. He felt that a synthesis of science and spirituality would only be possible through the joint efforts and open discussions by the deep thinkers of the world. He promoted the concept that “Life comes from Life” indicating a non-material origin of life, and was hopeful that that scientists across the world would be open to scientific exploration of this alternative paradigm. <br /> <br />
                Śrīla Prabhupāda was born in Kolkata and educated at the prestigious Scottish Church College which produced some of India’s most famous leaders and spiritual reformers. Before adopting the life of a pious renunciant or sannyasa in 1959, he was married with children and owned a pharmaceutical business. After taking his vow of renunciation, he began writing English commentaries on Vaiṣṇava scriptures. In the early 1960s, he single-handedly published the first three volumes of the first book of Śrīmad-Bhāgavatam, filling four hundred pages each with a detailed commentary. In 1965 he left India for the United States, obtaining free passage on a freight ship, with the aim of fulfilling his spiritual master’s instruction to spread the message of Śrī Caitanya around the world in English. He only carried with him a suitcase, an umbrella, a supply of dry cereal, about eight dollars worth of Indian currency, and several boxes of his books. In ten years, he opened over a hundred centers around the world teaching Vaiṣṇava Vedanta, and had about five thousand students. As a traveling Vaiṣṇava monk, he became the world’s most influential communicator of Vaiṣṇava theology to the West. Subsequently Śrīla Prabhupāda authored over 70 volumes on the Vaiṣṇava tradition, which are highly respected by scholars for their authority, depth, fidelity to the tradition, and clarity. Several of his works are used as textbooks in numerous college courses and reference materials for religionists and scholars. His writings have been translated into 76 languages.
              </p>
              <a href="http://binstitute.org/founder-acharya/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>
            </p>
            </Container>
          </center>
        </main>
      </div>
    );
}

export default AboutFounderAcharya;