import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
export default function Footer() { 
    return (
        
            <section id="footer">
            <div class="container-fluid">
             <div class="row">
            <a href="https://example.com/faq.html" > <FontAwesomeIcon icon={faInstagram} size="2x"/> </a>
            <a href="https://example.com/faq.html"><FontAwesomeIcon icon={faFacebook} size="2x"/> </a>
            <a href="https://example.com/faq.html"> <FontAwesomeIcon icon={faTwitter} size="2x"/>  </a>
            </div>
            </div>
            </section>
            

        
    )
}