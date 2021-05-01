import "./styles/Home.css";
import Img from './images/profile.jpg';

function Home() {
    
    return(

        <div id="Home">

            <div id="Intro">

                <div id="IntroLeft">
                    
                    <div id="Name"><strong>Bichu Ben Kuruvilla</strong></div>
                    <div id="Tagline">
                        <p className="Tag Tag1">CS Undergrad @ GEC Thrissur</p>
                        <p className="Tag Tag2">Tech Enthusiast</p>
                        <p className="Tag Tag3">Passionate Programmer</p>
                    </div>


                    <div className="Social">
                        <div className="SocialItems"><a href="https://twitter.com/BenBichu"><i className="fab fa-twitter SocialIcon"></i></a></div>
                        <div className="SocialItems"><a href="https://www.linkedin.com/in/bichu-ben-kuruvilla-183178175/"><i className="fab fa-linkedin-in SocialIcon"></i></a></div>
                        <div className="SocialItems"><a href="https://github.com/ben-jnr"><i className="fab fa-github SocialIcon"></i></a></div>
                        <div className="SocialItems"><a href="https://stackoverflow.com/users/13099853/bichu-ben"><i className="fab fa-stack-overflow SocialIcon"></i></a></div>
                    </div>

                </div>



                <div id="IntroRight">

                    <div id="ProfileImgContainer">
                        <img id="ProfileImg" src={Img} alt=""></img>
                    </div>

                </div>

            </div>

    </div>
    
    )
}


export default Home;