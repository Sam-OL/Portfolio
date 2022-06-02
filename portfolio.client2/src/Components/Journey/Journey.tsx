import React, { useState, useEffect} from 'react';
import { IProject } from '../../Interfaces';
import TimelineCard  from './TimelineCard/TimelineCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './journey.css';
import BorrowMy from '../../BorrowMy-logo.png';
import {
    Timeline, TimelineItem, TimelineSeparator,
    TimelineDot, TimelineConnector, TimelineContent
} from '@mui/lab';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


import { WrapText } from '@mui/icons-material';



function Journey() {
    //const [timeline, setTimeline] = useState<IProject[]>([{ name: 'BorrowMy', date: "8/4/2022", color: '#4D5359', lDescription: "", sDescription: 'During the last 2 weeks of the salt bootcamp our team got as a task to make a fullstack application, we decided upon BorrowMy.', tag: 'SPA', link: { url: 'This is url', text: 'Click to learn more!' }, weight: 5, image: BorrowMy },
    //{ name: 'Snake', date: "19/3/2022", color: '#009FFD', lDescription: "", sDescription: 'During one of the days at  salt, after we had gotten some experience creating a fullstack application we had a personal hackday. I thought it might be fun to revisit a classic. ', tag: 'Game', link: { url: 'This is snake url', text: 'Click to play!' }, weight: 3, image: "https://addons.mozilla.org/user-media/previews/full/257/257365.png?modified=1622663404" }])
    const [timeline, setTimeline] = useState<IProject[]>();

    const getProjects = async () => {
        const response = await fetch('https://localhost:7022/api/Projects/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        return response.json();


    }

    useEffect(() => {
        getProjects().then(data => setTimeline(data)).catch(error => { })
    })


    return (
        <Timeline position="right" className="timeline--container">
            {timeline?.map((p: IProject) => <TimelineItem className="timeline-project__container">
                
                <TimelineContent className="timeline-card__container" >
                   
                    <TimelineCard item={p} />
                </TimelineContent>
            </TimelineItem>)}
        </Timeline>

    );
}
    




//function Timeline() {

    
    

    

//<div className="timeline-container">
//    {timeline.map((item, idx) => (
//        <TimelineCard item={item} key={idx} />
//    ))}
//</div>


//    return (
//        <div className="timeline-body">
//            {/*<TimelineCard item={item} />*/}
//      </div>
//    );
//}

export default Journey;
