import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { IProject } from '../../Interfaces';
import Samuel from '../../Samuel-lnk.jpg'
import './aboutme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Journey from '../Journey/Journey';



function AboutMe() {


    return (
        <div className="about-me__page">
            <div className="about-me__header">
                <div className="about-me__image--container" >
                    <img className="about-me__image" src={Samuel} alt="logo" />
                </div>
               
              <div className="about-me__introduction-container">
                    <p className="about-me__introduction-content"> 
                        My name is Samuel, I am a fullstack .NET developer currently working for salt(School of applied technology) as a consultant.
                        My main interests are programming, video gaming, playing the piano and fishing. 
                        I have an easy time seeing the whole picture and working out the flow in which a product should be developed. 
                    </p>
                </div>
            </div>  

            <div className="about-me__tools">
            </div>
         </div>
    );
}

export default AboutMe;
