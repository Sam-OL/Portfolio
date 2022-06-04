import React, { useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import logo from '../../logo.svg';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {

    const [buzzwords, setBuzzwords] = useState<Array<String>>(["Agile", "Teamwork", "Gaming", "Foresight", "Testing", "Scrum", "Salutations, traveler :)",]);

    return (
            <div className="home-page">
                {/*<div className="buzzword-storm__container">*/}
                {/*    {buzzwords.map((b) => <p className="buzzword">{b}</p>)}*/}
                {/*</div>       */}
            </div>
    );
}

export default Home;
