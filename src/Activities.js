import "./styles/Activities.css";
import codechef from "./images/codechef.png";
import codeforces from "./images/codeforces.png";

function Activities() {

    return(
        <div id="Activities">
            
            <div id="ActivitiesHeading"><strong className="centerunderline">ACTIVITIES</strong></div>


            <div className="ActivityContainer">
                <div className="ActivityType">
                    <strong>College Events</strong>
                </div>
                <div className="ActivityDesc">
                    
                    <p><strong>Positions :</strong></p>
                    <ul>
                        <li>Tech Lead, Tinkerhub (2021) </li>
                    </ul>

                    <p><strong>Achievements :</strong></p>
                    <ul>
                        <li>2nd place, Graphics Ninja, KTU Tech-Fest (2019)</li>
                        <li>1st place, Inter department coding contest (2018, 2020)</li>
                    </ul>

                    <p><strong>Events Coordinated :</strong></p>
                    <ul>
                        <li>Ultimate Coding Championship, Dyuthi (2020)</li>
                        <li>Capture The Flag, Dyuthi (2020)</li>
                        <li>Hackoff CTF, Inter department CTF (2019)</li>
                    </ul>
                    
                
                </div>
            </div>


            <div className="ActivityContainer">
                <div className="ActivityType">
                    <strong>Competitive Coding</strong>
                </div>
                <div className="ActivityDesc">
                    <br/>
                    <br/>
                    <div id="Platforms">
                        <div className="PlatformsDesc">
                            <strong>Platforms Active :</strong>
                        </div>
                        <div className="PlatformsLink">
                            <a href="https://codeforces.com/profile/ben-jnr">
                                <img src={codeforces} alt="codeforces" className="PlatformImg"/>
                            </a>
                        </div>
                        <div className="PlatformsLink">
                            <a href="https://www.codechef.com/users/ben2k"> 
                                <img id="codechef" src={codechef} alt="codechef" className="PlatformImg"/>
                            </a>
                        </div>
                    </div>
                    
                    <br/>
                    <p><strong>Achievements :</strong></p>
                    <ul>
                        <li>Qualified for Round 1, Codejam (2020, 2021)</li>
                        <li>Qualified for Round 1, Hackercup (2020)</li>
                        <li>2nd place, ISTE State Convention (2021)</li>
                    </ul>
                    
                
                </div>
            </div>

        </div>
    )

}


export default Activities;