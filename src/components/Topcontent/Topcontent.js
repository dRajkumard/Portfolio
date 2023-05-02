import React from 'react'
import { Link } from 'react-scroll';
import "./Topcontent.css"

 const Topcontent = () => {
    return (
        <div className="topContent">
            <div className="topContent_container">
                <h1>Mr.Rajkumar D</h1>
                <p>A professional Web and App Developer</p>
                <a href ="www.google.com">
                    <button className="topContent_downloadButton">Download CV</button>
                </a>
                <Link to ="projects" smooth={true} duration={500}>
                    <button className="topContent_workButton">My Work</button>
                </Link>
            </div>

            
        </div>
    )
};
export default Topcontent;
