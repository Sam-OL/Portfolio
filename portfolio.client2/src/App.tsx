import React, { useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Loading from './Components/Loading/Loading';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage'
import Footer from './Components/Footer/Footer';
import { IProject } from './Interfaces'
import BorrowMy from './BorrowMy-logo.png';
import Journey from './Components/Journey/Journey';

function App() {

    const [projects, setProjects] = useState<IProject[]>([{ name: 'BorrowMy', date: "8/4/2022", color: '#4D5359', lDescription: "", sDescription: 'During the last 2 weeks of the salt bootcamp our team got as a task to make a fullstack application, we decided upon BorrowMy.', tag: 'SPA', link: { url: 'This is url', text: 'Click to learn more!' }, weight: 5, image: BorrowMy },
        { name: 'Snake', date: "19/3/2022", color: '#009FFD', lDescription: "", sDescription: 'During one of the days at  salt, after we had gotten some experience creating a fullstack application we had a personal hackday. I thought it might be fun to revisit a classic. ', tag: 'Game', link: { url: 'This is snake url', text: 'Click to play!' }, weight: 3, image: "https://addons.mozilla.org/user-media/previews/full/257/257365.png?modified=1622663404" }])


    return (
        <Router>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Cairo&family=Secular+One&display=swap');
            </style>
            <NavBar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Projects" element={<Journey />} />
                <Route path={"/Projects/:name"} element={<ProjectsPage />} />
            </Routes>
            <Footer />
            
        </Router>
  );
}

export default App;
