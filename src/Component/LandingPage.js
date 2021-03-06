import React, { Component } from 'react';
import logoAdalab from '../images/logo-adalab.png';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (

            <div className="wrapper">
                <div className="cover">
                    <header className="cover-header">
                    </header>
                    <main className="cover-main">
                        <div className="cover-main__text">
                            <h2 className="cover-main__text--title">
                                Crea tu tarjeta de visita
                        </h2>
                            <p className="cover-main__text--p">
                                Crea mejores contactos profesionales de forma fácil y cómoda
                        </p>
                        </div>
                        <ul className="cover-main__list">
                            <li className="cover-main__list--design">
                                <i className="far fa-object-ungroup iconLanding">
                                </i>
                                Diseña
                        </li>
                            <li className="cover-main__list--fill">
                                <i className="far fa-keyboard iconLanding">
                                </i>
                                Rellena
                        </li>
                            <li className="cover-main__list--share">
                                <i className="fas fa-share-alt iconLanding">
                                </i>
                                Comparte
                        </li>
                        </ul>
                        <div className="cover_main__btn">
                            {/* <a className="btn-chubby" href="cardGenerator.html">Comenzar</a> */}
                            <Link
                                className="btn-chubby"
                                to='/card-generator'
                            >
                                Comenzar
                        </Link>
                        </div>
                    </main>
                </div>
                <footer className="footer">
                    <p className="credit">
                        Awesome profile-cards@2018
                </p>
                    <a
                        className="logoAdalab"
                        href="http://adalab.es/"
                        title="Página web Adalab"
                    >
                        <img
                            src={logoAdalab}
                            alt="Logo Adalab"
                        />
                    </a>
                </footer>
            </div>
        )
    }
}
export default LandingPage;