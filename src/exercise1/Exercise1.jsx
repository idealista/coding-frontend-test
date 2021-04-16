import React, { useEffect } from "react";
import './exercise1.less';
import answer1 from './Answer1';

function Exercise1 () {
    useEffect(() => {
        answer1.init();
    });

    return (
        <div className="App">
            <h1>Ejercicio 1</h1>
            <p class="title-exercise">Consulta las instrucciones de este ejercicio en <span>src/exercise1/README</span>.</p>
            <section id="container1" className="application-section"></section>
            <h3 class="section-title">Anuncios</h3>
            <section id="container2" className="application-section"></section>
            <h3 class="section-title">Noticias</h3>
            <section id="container3" className="application-section grid-column"></section>
            <h3 class="section-title">Opiniones</h3>
            <section id="container4" className="application-section grid-column"></section>
        </div>
    );
}

export default Exercise1;
