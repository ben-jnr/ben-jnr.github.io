import "./styles/About.css";


function About() {

    return(
        <div id="About">
            <div id="AboutHeading"><strong className="centerunderline">ABOUT</strong></div>
            <div id="AboutContent">
                <div id="AboutOpening"><i className="fas fa-quote-left AboutQuote"></i></div>
                <div id="AboutText">
                    <div>
                        Hello, I'm Bichu Ben Kuruvilla, a CS Undergradute student at GEC Thrissur. 
                        I hail from Kottayam, Kerala.
                        I have some experience developing full stack web applications using MERN stack.
                        I love solving problems and regularly participate in coding contests.
                        Lately, I have been learning system level programming.
                    </div>
                    <br />
                    <div>
                        Apart from tech, I spend my time watching cricket/football or listening to
                        music. Occasionally I spend some time watching a movie or reading a
                        fictional book. 
                    </div>
                </div>
                <a href="#">
                    <div id="CV" className="noselect">
                        CV <i id="CVDownload" className="fas fa-download"></i>
                    </div>
                </a>
                <div id="AboutClosing"><i className="fas fa-quote-right AboutQuote"></i></div>
            </div>
        </div>
    );
}


export default About;