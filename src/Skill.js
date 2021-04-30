import "./styles/Skill.css";
import C from './images/c.png';
import CPP from './images/cpp.png';
import JS from './images/js.png';
import PY from './images/python.png';
import React from './images/react.png';
import Node from './images/node.png';
import Mongo from './images/mongo.png';
import MySQL from './images/mysql.png';
import Git from './images/git.png';
import Linux from './images/linux.png';





function Skill() {

    return(
        <div id="Skills">

            <div id="SkillsHeading"><strong className="centerunderline">SKILLS</strong></div>

            <div className="SkillsDivide">

                <div className="SkillContainer">
                
                    <div className="SkillContainerHeading"><strong>Languages</strong></div>
                    
                    <div className="SkillList"> 
                        <div className="Skill">
                            <img className="SkillImg" src={CPP} alt="cpp"/>
                            <div className="SkillDesc">C++</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={C} alt="c"/>
                            <div className="SkillDesc">C</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={JS} alt="js"/>
                            <div className="SkillDesc">JS</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={PY} alt="py"/>
                            <div className="SkillDesc">Python</div>
                        </div>
                    </div>
                    
                </div>


                <div className="SkillContainer">
                    
                    <div className="SkillContainerHeading"><strong>Web Development</strong></div>
            
                    <div className="SkillList"> 
                        <div className="Skill">
                            <img className="SkillImg" src={React} alt="react"/>
                            <div className="SkillDesc">React.js</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={Node} alt="node"/>
                            <div className="SkillDesc">Node.js</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={Mongo} alt="mongo"/>
                            <div className="SkillDesc">MongoDB</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={MySQL} alt="mysql"/>
                            <div className="SkillDesc">MySQL</div>
                        </div> 
                    </div>

                </div>      

            </div>


            <div className="SkillsDivide">

                <div className="SkillContainer">
                
                    <div className="SkillContainerHeading"><strong>Additional</strong></div>
                    
                    <div className="SkillList"> 
                        <div className="Skill">
                            <img className="SkillImg" src={Linux} alt="linux" />
                            <div className="SkillDesc">Linux</div>
                        </div>
                        <div className="Skill">
                            <img className="SkillImg" src={Git} alt="git"/>
                            <div className="SkillDesc">Git</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )

}

export default Skill;