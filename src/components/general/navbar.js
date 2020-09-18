import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark font-weight-bold fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/home">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-daniel-velasquez.appspot.com/o/Logo.png?alt=media&token=e666381c-7d8e-48e5-834b-f591079566c1" width={100} height={45} classname="d-inline-block align-top" alt="logo" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/resume">Resume</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}