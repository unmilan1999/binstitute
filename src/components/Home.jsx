import 'react-slideshow-image/dist/styles.css'
import { Container } from 'react-bootstrap'
import { Slide } from 'react-slideshow-image';

function Home() {
  return (
    <div>
       <main>
         <center>
           <Container style={{ paddingTop: 200 }}>
           <h1>This is the home page</h1>
           </Container>
         </center>
       </main>
    </div>
    
  );
}

export default Home;