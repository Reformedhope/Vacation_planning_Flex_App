import VacationCard from "./VacationCards";
import "./LandingPage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage = (props) => {



    return ( 
       
       <div> 
        <main>
          <h1>Travel leaves you spechless, than turns you into a storyteller.</h1>
          <VacationCard/>
        </main>
       </div>
     );
}
 
export default LandingPage;