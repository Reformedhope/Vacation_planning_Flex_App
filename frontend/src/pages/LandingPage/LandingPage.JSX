import VacationCard from "./VacationCards";
import "./LandingPage.css";


const LandingPage = (props) => {



    return ( 
       
       <div > 
        <main>
          <h1 className=" head">Travel leaves you spechless, than turns you into a storyteller.</h1>
          <VacationCard/>
        </main>
       </div>
     );
}
 
export default LandingPage;