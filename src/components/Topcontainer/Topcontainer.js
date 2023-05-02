import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent';
import "./Topcontainer.css";
export default function Topcontainer() {
    return (
        <Element name="about" className="topContainer">
           <Topcontent/>
        </Element>
    )
}

