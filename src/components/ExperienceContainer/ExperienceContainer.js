import { orange } from '@material-ui/core/colors'
import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"

export const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" id="experience">
            <h1>Experience</h1>

            <div className="experienceContainer_info">
                <Experience number="+2" title="Client"/>
                <Experience number="3+" title="Projects" style={{backgroundColor:"#f64c08"}}/>
                <Experience number="6+" title="Years Working"/>
                <Experience number="100" title="Training"/>
            </div>
        </Element>
    )
}

