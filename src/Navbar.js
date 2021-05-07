import { useEffect , useState} from "react";
import "./styles/Navbar.css";


function Navbar() {

    const [flag,setFlag] = useState(0);

    function scrollHandler() {
        if(window.scrollY < document.getElementById("About").offsetTop-300) {
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("HomeNav")[0].classList.add("ActiveNav");
            document.getElementsByClassName("HomeNav")[1].classList.add("ActiveNav");
        }
        else if(window.scrollY < document.getElementById("Skills").offsetTop-300) {
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("AboutNav")[0].classList.add("ActiveNav");
            document.getElementsByClassName("AboutNav")[1].classList.add("ActiveNav");
        }
        else if(window.scrollY < document.getElementById("Projects").offsetTop-300) {
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("SkillsNav")[0].classList.add("ActiveNav");
            document.getElementsByClassName("SkillsNav")[1].classList.add("ActiveNav");
        }
        else if(window.scrollY < document.getElementById("Activities").offsetTop-300) {
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ProjectsNav")[0].classList.add("ActiveNav");
            document.getElementsByClassName("ProjectsNav")[1].classList.add("ActiveNav");
        }
        else if(window.scrollY < document.getElementById("Contact").offsetTop-500) {
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActivitiesNav")[0].classList.add("ActiveNav");
            document.getElementsByClassName("ActivitiesNav")[1].classList.add("ActiveNav");
        }
        else {
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
            document.getElementsByClassName("ContactNav")[0].classList.add("ActiveNav");
            document.getElementsByClassName("ContactNav")[1].classList.add("ActiveNav");
        }
    }


    function clickHandler(id) {
        window.scrollTo(0,document.getElementById(id).offsetTop-100);
        document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");
        document.getElementsByClassName("ActiveNav")[0].classList.remove("ActiveNav");  
        document.getElementsByClassName(id+ "Nav")[0].classList.add("ActiveNav");
        document.getElementsByClassName(id+ "Nav")[1].classList.add("ActiveNav");
        setFlag(0); 
    }


    function NavVisisble() {
        if(document.getElementById("PhoneMenu").style.left === "-50%")
            setFlag(1);
        else
            setFlag(0);
    }   


    useEffect(()=>{
        if(flag === 1)
            document.getElementById("PhoneMenu").style.left = "0%";
        else    
            document.getElementById("PhoneMenu").style.left = "-50%";
    },[flag])


    useEffect(()=>{
        scrollHandler();
        document.addEventListener("scroll", scrollHandler);
    },[]);
   
        
    return(

        <div>
            
            <div id="PhoneNav">
                <button className="Nav3BarsButton" onClick={(e) => NavVisisble()}>
                    <i className="fas fa-bars Nav3Bars"></i>
                </button>
            </div>

            <div id="PhoneMenu" className="noselect">
                <a href=" " className="NavItem ActiveNav HomeNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Home")}}><b>Home</b></a>
                <a href=" " className="NavItem AboutNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("About")}}><b>About</b></a>
                <a href=" " className="NavItem SkillsNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Skills")}}><b>Skills</b></a>
                <a href=" " className="NavItem ProjectsNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Projects")}}><b>Projects</b></a>
                <a href=" " className="NavItem ActivitiesNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Activities")}}><b>Activities</b></a>
                <a href=" " className="NavItem ContactNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Contact")}}><b>Contact</b></a>
            </div>

            <div id="Navbar" className="noselect">
                <a href=" " className="NavItem ActiveNav HomeNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Home")}}><b>Home</b></a>
                <a href=" " className="NavItem AboutNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("About")}}><b>About</b></a>
                <a href=" " className="NavItem SkillsNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Skills")}}><b>Skills</b></a>
                <a href=" " className="NavItem ProjectsNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Projects")}}><b>Projects</b></a>
                <a href=" " className="NavItem ActivitiesNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Activities")}}><b>Activities</b></a>
                <a href=" " className="NavItem ContactNav" 
                        onClick={(e)=>{e.preventDefault(); clickHandler("Contact")}}><b>Contact</b></a>
            </div>

        </div>
        
    );

}

export default Navbar;