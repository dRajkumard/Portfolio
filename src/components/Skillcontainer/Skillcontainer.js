import React from 'react';
import { Element } from 'react-scroll';
import Skillimg from "../images/skillimage/skill_image.jpg";
import LinearProgress from "@material-ui/core/LinearProgress"; 
import "./Skillcontainer.css";
const Skillcontainer = () => {
    return (
        <Element className="skillcontainer" id="skills">
            <div className="skillcontainer_image">
                <img src ={Skillimg} alt=""/>
            </div>
            <div className="skillcontainer_text">
                <h2>SKILLSET</h2>
                <div className="skillContainer_skillSet">
                    <h5>React</h5>
                <div className="skillContainer_slider skillcontainer_slider1">
                <LinearProgress variant="determinate" value={90}/>
                </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>Bootstrape</h5>
                <div className="skillContainer_slider skillcontainer_slider2">
                <LinearProgress variant="determinate" value={75}/>
                </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>HTML</h5>
                <div className="skillContainer_slider skillcontainer_slider3">
                <LinearProgress variant="determinate" value={70}/>
                </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>CSS</h5>
                <div className="skillContainer_slider skillcontainer_slider4">
                <LinearProgress variant="determinate" value={45}/>
                </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>JAVASCRIPT</h5>
                <div className="skillContainer_slider skillcontainer_slider5">
                <LinearProgress variant="determinate" value={50}/>
                </div>
                </div>

            </div>

        </Element>
    );
};

export default Skillcontainer;
