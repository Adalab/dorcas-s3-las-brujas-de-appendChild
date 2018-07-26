import React, { Component } from 'react';
import logoAdalab from './images/logo-adalab.png';


    class Footer extends Component{

        render() {
            return(
                <footer class="footer">
                    <p class="footer--credit">Awesome profile-cards@2018</p>
                    <a href="http://adalab.es/">
                    <img src={logoAdalab} alt="Logo Adalab" class="footer--image"/>
                    </a>
              </footer>
            );
        }
    }


export default Footer;