import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProject } from '../../Interfaces';
import TimelineCard from '../Journey/TimelineCard/TimelineCard';
import Project from './Project/Project';
import Loading from '../Loading/Loading';



function ProjectsPage() {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [project, setProject] = useState<IProject>();
    let { name } = useParams();


    

    const getProject = async () => {

        const response = await fetch(`https://localhost:7022/api/Projects/${name}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"

            }
        })

        return response.json();
        //console.log(data);
        
        //setProject(data);
        //setFetchDone(true);

        //const body: IProject = await response.json();
        //console.log(body);
    }

    useEffect(() => {
        getProject()
            .then(data => {
                setProject(data);
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
            }).catch(error => { }); 


    }, [name])

    if (isLoading) return (<Loading/>)
    
    return (
        <div>
            <Project project={ project} />
        </div>
        )
}

export default ProjectsPage;
