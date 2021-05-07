import "./styles/Contact.css";

function Contact() {

    return(
        <div id="Contact">
            
            <div id="ContactHeading"><strong className="centerunderline">CONTACT</strong></div>
            <br/>
            <div id="ContactDesc">
                Lets get in touch
            </div>

            <p id="Contact-Mail">
                <a href="mailto:bichubenkuruvilla@gmail.com">   
                    bichubenkuruvilla@gmail.com
                </a>
            </p>

            <p id="Contact-Phone">
                <a href="tel:+918943656990">   
                    +91-8943656990
                </a>
            </p>

            <div className="Social" id="ContactSocial">
                <div className="SocialItems"><a href="https://www.facebook.com/bichu.ben2K/"> <i className="fab fa-facebook-square SocialIcon"></i> </a></div>
                <div className="SocialItems"><a href="https://www.instagram.com/_ben.jnr_/"><i className="fab fa-instagram SocialIcon"></i></a></div>
                <div className="SocialItems"><a href="https://twitter.com/BenBichu"><i className="fab fa-twitter SocialIcon"></i></a></div>
                <div className="SocialItems"><a href="https://www.linkedin.com/in/bichu-ben-kuruvilla-183178175/"><i className="fab fa-linkedin-in SocialIcon"></i></a></div>
            </div>

        </div>
    )

}

export default Contact;