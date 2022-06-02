import React from 'react';
import { IProject } from '../../../Interfaces';
import './timelinecard.css';
import {
    Card, CardContent, CardMedia,
    Typography, CardActionArea, CardActions
} from '@mui/material';
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import { TimelineCardHeader, Separator } from '../../CustomComponents/CustomComponents';

interface Props {
    item: IProject

}


function TimelineCard({ item }: Props) {

    return (
        <div  className="timeline-card__container">
            <TimelineCardHeader item={item} />
            <div className="timeline-card__subcontainer">
                <p className="timeline-card__description">{item.sDescription}</p>
                <Separator/>
                <Card className="timeline-item">
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.image}
                            alt={item.name} />
                        <CardContent>
                            <Typography className="timeline-item--name">
                                {item.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>       
          </div>
    );
}

export default TimelineCard;

// <div className = "timeline-item__content" >
//                <span style={{background: item.color}} className="timeline-item__content-tag">
//                    { item.tag}
//                </span>
//                <h2>{ item.name}</h2>
//                <p>{item.description}</p>
//{
//    item.link && (
//        <a
//            href={item.link.url}
//            target="_blank"
//            rel="noopener noreferrer"
//        >
//            {item.link.text}
//        </a>
//    )
//}
//<span className="circle" />
//            </div >