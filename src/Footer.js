import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
export default function Footer() { 
    return (
        
            <section id="footer">
            <div class="container-fluid">
             <div class="row">
            <a className ='social-tw' href="https://www.instagram.com/rudyscantfail/" > <FontAwesomeIcon icon={faTwitter} size="2x"/> </a>
            <a className ='social-fb' href="https://www.facebook.com/RudysCantFailCafel"><FontAwesomeIcon icon={faFacebook} size="2x"/> </a>
            <a className ='social-em'href="https://twitter.com/RudyCantFailCaf"> <FontAwesomeIcon icon={faInstagram} size="2x"/>  </a>
            </div>
            </div>
            </section>
            

        
    )
}