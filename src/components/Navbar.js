import React from 'react'
import { useRef } from 'react';
//import { a } from 'react-router-dom';


const Navbar = () => {
    const landingSection = useRef();
    const aboutSection = useRef();
    const contactSection = useRef();
    const blogSection = useRef();

    //Functions
    const goHome = () => {}
    const goAbout = () => {}
    const goContact = () => {}
    const goBlog = () => {}
  return (
    <div>
        {/* <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-a" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="dropdown-item" href="/contact">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="dropdown-item" href="/blog">Thinking Out Loud</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-a disabled" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <nav className="navbar navbar-expand-lg navbar-light navbar-port">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Kajohnte</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-right me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                            <a className="nav-link" ref={landingSection} onClick={goHome}>Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ref={aboutSection} onClick={goAbout}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ref={contactSection} onClick={goContact}>Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ref={blogSection} onClick={goBlog}>Thinking Out Loud</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar