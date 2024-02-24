// eslint-disable-next-line
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const nav = () => {
    return(
        <section>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            
            <a class="navbar-brand" href="/">NGO Connect</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
            
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            
            <a class="nav-link" href="/">About Us</a>
            </li>
            <li class="nav-item">
            
            <a class="nav-link" href="/">Modules</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
    </section>
    );
};


export default nav;