import { useState, useEffect } from 'react';

import './project.css';
import { IProject } from '../../../Interfaces';
import { Box } from '@mui/material';


interface Props {
    project?: IProject | undefined
}


function Project({ project }: Props) {




    return (
        <Box className="project-page">

            <div className="project-page__title--container">
                <div className="project-page__title--content" >{project?.name}</div>
            </div>
           

            {/*{project?.date.slice(0, 10)}*/}
            <div className="project-page__content">
                <img className="project-page__content--image" src={project?.image} />
                <p className="project-page__content--description" >{project?.sDescription}</p>

            </div>
            
            
        </Box>
    )

}


export default Project;