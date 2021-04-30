import "./styles/Projects.css";

function Projects() {

    return(

        <div id="Projects">

            <div id="ProjectsHeading"><strong className="centerunderline">PROJECTS</strong></div>

            <div className="ProjectsDivide">

                <div className="ProjectsLeft">
                    <div className = "ProjectContainer">
                        <div className = "ProjectContainerHeading"><strong> Covid Care </strong></div>
                        <div className = "ProjectDesc">
                            <p>
                                A web app developed using react.js, node.js, express and mongoDB.
                            </p>
                            <p>
                                It was developed during Vande Bharat Mission to administer the stay of emigrants, 
                                quarantined in various selected institutions in Thrissur, Kerala.
                                Details of 9400+ rooms were stored in the database and was 
                                being used by Govt officials but was later discarded 
                                when covid-19 jagratha portal was made official.             
                            </p>
                        </div>
                    </div>
                </div>


                <div className="ProjectsMiddle">
                    <div className = "ProjectContainer">
                        <div className = "ProjectContainerHeading"><strong> Fantasy Premier League </strong></div>
                        <div className = "ProjectDesc">
                            <p>
                                A web app developed using react.js, node.js, express and cheerio.js 
                                for web-scraping, making use of typescript for the entire project. 
                            </p>
                            <p>
                                It was a fun project done for of a competition between
                                me and my friends during IPL 2020. The backend scrapes data from the official
                                IPL website which could be used as per the rules framed.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="ProjectsRight">
                    <div className = "ProjectContainer">
                        <div className = "ProjectContainerHeading"><strong> Web Scraping </strong></div>
                        <div className = "ProjectDesc">
                            <p>
                                I have developed a couple of scripts, both web scraping based, 
                                using the request library to make http requests and BeautifulSoup 
                                to parse html.
                            </p> 
                            <p> 
                                One script was to download videos in bulk from a 
                                website anime4.to by providing a base url. The second script scrapes the 
                                imdb website and can search for movies based on keywords or on 
                                min and max ratings
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default Projects;