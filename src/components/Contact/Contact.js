import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from "@material-ui/core"
import { Facebook, Instagram, LinkedIn} from "@material-ui/icons"
import './Contact.css'

export const Contact = () => {
    return (
       <Element className="contact"id="contact" >
        <h1>Contact</h1>
        <div className="contact_container">
            <p>
                Email:<span>rajkumar.d408@gmail.com</span>
            </p>
            <p>
                Github Username: <span>https://github.com/dRajkumard</span>
            </p>
            <div className="contact_icons">
                <a href="google.com">
                    <IconButton>
                    <LinkedIn/>
                    </IconButton>
                </a>
                <a href="google.com">
                    <IconButton>
                    <Facebook/>
                    </IconButton>
                </a>
                <a href="google.com">
                    <IconButton>
                    <Instagram/>
                    </IconButton>
                </a>
                </div>
                </div>
       
        </Element>


       
    );
};
