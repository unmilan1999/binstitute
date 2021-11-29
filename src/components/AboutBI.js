
import { Container, Col, Row, Card } from 'react-bootstrap'
import './abt.css'

function AboutBI(){
    return(
      <div id="bhaktivedantaInstitute">
        <main>
          <center>
            <div>
				      <div style={{paddingTop: 220, paddingBottom:220, fontSize: 20}} id="bg"></div>
			      </div>
            <Container style={{color: 'black', paddingTop: 50,paddingBottom: 50}}>
            <p align="justify">
              <b style={{fontSize: 30}}>BHAKTIVEDANTA INSTITUTE - A BRIEF PROFILE</b><br/> <br />
              <p>
                Bhaktivedanta Institute is an internationally acclaimed non-profit organization dedicated towards the cause of helping humanity through the interface of modern science and technology with spiritual traditions of the world. The institute board mostly comprises of alumni and faculties of IITs (Indian Institute of Technology) who are well-established in their academic pursuits and are open and have keen interest in the wisdom hidden in various spiritual traditions. They go beyond the boundaries of specific religious rituals and rather deliberate upon the core values, deeper meanings and bigger questions of life and cosmos – an open territory for both scientists and spiritualists. <br/>
                The institute has its offices/representatives in India (Kolkata, Bangalore, Sambalpur, Kharagpur, Navadvip, Hyderabad, Vijaywada, Karnal, Imphal, Agartala), Indonesia (Denpasar, Jakarta), Malaysia (Johor Baru), Italy (Rome), USA (Denver), Switzerland (Zurich), France (Toulouse).<br /> <br />
                <h3>ACTIVITIES</h3>
                In order to achieve its goal, the institute involves into various activities including regular quality dialogues, organize International as well as regional conferences, conducts meetings and dialogues/interviews with prominent scientists and Nobel Laureates, organizes regular Guest and public lectures, publishes in-depth publications, journals and conducts short courses in collaboration with various institutions. <br /> <br />
                <h3>CONFERENCE</h3>
                Collaborating with various academic institutions around the world, the Institute organizes International and National Conferences around the world. From First World Congress on Synthesis of Science and Religion, held at Mumbai India in 1987 where Nobel Laureate George Wald from Harvard University gave Keynote Address to many conferences such as – First International Conferences on the Study of Consciousness within Science, San Francisco, 1990 (John Eccles​, Nobel Laureate in Physiology and Medicine gave the one of the Keynote Addresses); Second World Congress on Synthesis of Science and Religion held at Calcutta, India, 1997, where Nobel Laureate in Physics Charles Townes presented the Keynote Address; Second International Congress on Life and its Origin – Perspectives from Science and Spiritual traditions held at Rome, 2004; to several other conferences. Besides, the Institute launched annual conferences in India on Science and Spiritual Quest from 2005 which are hold every year since then and are supported by Dept. of Science and Technology of Govt. of India. The 2010 conference held in capital city of India, Delhi was inaugurated by the President of India Smt. Pratibha Patil herself and she expressed the need of holding these conferences regularly for helping entire humanity. The proceedings volume of many of these conferences containing papers of all the distinguished scientists and scholars participated are also available.
              </p> 
              <a href="http://binstitute.org/bhaktivedanta-institute/" style={{textDecoration: 'none', color: 'black'}} ><b>Read more</b></a>
            </p>
            </Container>
          </center>
        </main>
      </div>
    );
}

export default AboutBI;