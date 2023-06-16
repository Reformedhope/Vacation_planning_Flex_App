import React from "react";
import "./LandingPage.css";
import OceanCity from "../../assets/OceanCity.jpg"
import mountians from "../../assets/ColoradoBreckenridge.jpg"
import WestPalm from "../../assets/WestPalmBeach.jpg"
import virginacamping from "../../assets/Virgina smoke stack.jpg"
import gardengods from "../../assets/GardenofTheGods.jpg"
import hover from  "../../assets/DoverDam.jpg"

const VacationCard = (props) => {


    return ( 
        <article className="vacation-card">
           
            <div> 
                <img src ={OceanCity} alt ="oceancity" width={270}/>
                <h3>Ocean City</h3>
                <p>Maryland</p>
                <hr/>
                <p>Ocean City is a seaside resort town in Maryland that lures in vacationers with its coastal beauty and fun, friendly vibe. The sandy Atlantic shoreline is fun to explore, and the many watersports are a must at Ocean City, with surfing, fishing, and kayaking among the top activities.</p>
            </div>

            <div>
            <img src ={mountians} alt ="Breckenridge CO" width={270}/>
                <h3>Breckenridge</h3>
                <p>Colorado</p>
                <hr/>
                <p>Ocean City is a seaside resort town in Maryland that lures in vacationers with its coastal beauty and fun, friendly vibe. The sandy Atlantic shoreline is fun to explore, and the many watersports are a must at Ocean City, with surfing, fishing, and kayaking among the top activities.</p>

            </div>
            <div>
            <img src ={WestPalm} alt ="WestPalm Beach" width={270}/>
                <h3>WestPalm Beach </h3>
                <p>Florida</p>
                <hr/>
                <p>Ocean City is a seaside resort town in Maryland that lures in vacationers with its coastal beauty and fun, friendly vibe. The sandy Atlantic shoreline is fun to explore, and the many watersports are a must at Ocean City, with surfing, fishing, and kayaking among the top activities.</p>

            </div>
            <div>
            <img src ={virginacamping} alt ="SmokeStack VA" width={270}/>
                <h3>Natural Chimneys Campground</h3>
                <p>Virgina</p>
                <hr/>
                <p>Natural Chimneys has a 165 site family-oriented campground with water and electrical hook-ups. Most electrical hook-ups are 30-amps with some offering both 30-amp and 50-amp and some exclusively 50-amp sites.</p>

            </div>
            <div>
            <img src ={hover} alt ="Hoverdam NV" width={270}/>
                <h3>Hoover Dam</h3>
                <p>Nevada</p>
                <hr/>
                <p>Hoover Dam and Lake Mead, spanning the Arizona-Nevada state line, are located in the Black Canyon of the Colorado River about 35 miles southeast of Las Vegas, Nevada. It is a concrete thick-arch structure, 726.4 feet high and 1,244 feet long. The dam contains 3.25 million cubic yards of concrete; total concrete in the dam and appurtenant works is 4.4 million cubic yards.</p>

            </div>
            <div>
            <img src ={gardengods} alt ="Garden of the Gods" width={270}/>
                <h3>Garden of the Gods</h3>
                <p>Colorado</p>
                <hr/>
                <p>Garden of the Gods Park is a registered National Natural Landmark featuring dramatic views. Come admire the 300′ sandstone rock formations against the backdrop of snow-capped Pikes Peak and brilliant blue skies.</p>

            </div>
        </article>
     );
}
 
export default VacationCard;