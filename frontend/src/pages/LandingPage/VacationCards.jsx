import React from "react";
import "./LandingPage.css";
import OceanCity from "../../assets/OceanCity.jpg"
import mountians from "../../assets/ColoradoBreckenridge.jpg"
import WestPalm from "../../assets/WestPalmBeach.jpg"
import virginacamping from "../../assets/Virgina smoke stack.jpg"
import gardengods from "../../assets/GardenofTheGods.jpg"
import hover from  "../../assets/DoverDam.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VacationCard = (props) => {


    return ( 
        <div className="landingpage-background">
        <Container> 
            <Row md={3}>
        {/* <article className="vacation-card"> */}
       
        <Col>
            <div className="vacation-card"> 
       
                <img src ={OceanCity} alt ="oceancity" width={270}/>
                <h3>Ocean City</h3>
                <p>Maryland</p>
                <hr/>
                <p>Ocean City is a seaside resort town in Maryland that lures in vacationers with its coastal beauty and fun, friendly vibe. The sandy Atlantic shoreline is fun to explore, and the many watersports are a must at Ocean City, with surfing, fishing, and kayaking among the top activities.</p>
            </div>
            </Col>
            <Col>

            <div className="vacation-card">
            <img src ={mountians} alt ="Breckenridge CO" width={270}/>
                <h3>Breckenridge</h3>
                <p>Colorado</p>
                <hr/>
                <p>Much like Aspen and Vail, Breckenridge is a town that is known for its luxe ski resort, stunning mountain scenery, and endless recreation. The former mining town is lined with hundreds of restaurants, shops, and saloons. Breck attracts visitors from around the world.</p>

            </div>
            </Col>
            <Col>
            <div className="vacation-card">
            <img src ={WestPalm} alt ="WestPalm Beach" width={270}/>
                <h3>West Palm Beach </h3>
                <p>Florida</p>
                <hr/>
                <p>West Palm Beach is best known for its palm-lined trees, nightlife, entertainment, cultural attractions, shopping areas, and fantastic fishing spots.</p>

            </div>
            </Col>
            </Row>

            <div>
            
          
            <h3>Log in <br/> or <br/>Click Next Vacation Destination located at the top of the page to start planning.</h3>
            </div>
            
            <Row md={3}>
            <Col>
            <div className="vacation-card">
                
            <img src ={virginacamping} alt ="SmokeStack VA" width={270}/>
                <h3>Natural Chimneys Campground</h3>
                <p>Virgina</p>
                <hr/>
                <p>Natural Chimneys has a 165 site family-oriented campground with water and electrical hook-ups. Most electrical hook-ups are 30-amps with some offering both 30-amp and 50-amp and some exclusively 50-amp sites.</p>

            </div>
            </Col>
            <Col>
            <div className="vacation-card">
            <img src ={hover} alt ="Hoverdam NV" width={270}/>
                <h3>Hoover Dam</h3>
                <p>Nevada</p>
                <hr/>
                <p>Hoover Dam and Lake Mead, spanning the Arizona-Nevada state line, are located in the Black Canyon of the Colorado River about 35 miles southeast of Las Vegas, Nevada. It is a concrete thick-arch structure, 726.4 feet high and 1,244 feet long. The dam contains 3.25 million cubic yards of concrete; total concrete in the dam and appurtenant works is 4.4 million cubic yards.</p>

            </div>
            /</Col>
            <Col>
            <div className="vacation-card">
            <img src ={gardengods} alt ="Garden of the Gods" width={270}/>
                <h3>Garden of the Gods</h3>
                <p>Colorado</p>
                <hr/>
                <p>Garden of the Gods Park is a registered National Natural Landmark featuring dramatic views. Come admire the 300′ sandstone rock formations against the backdrop of snow-capped Pikes Peak and brilliant blue skies.</p>

            </div>
            </Col>
            </Row>
        {/* </article>   */}
        </Container>
        </div>
     );
}
 
export default VacationCard;