import './ProjectCard.css';
import React from 'react';
import { NavLink } from 'react-router';


interface WorkCardProps {
    imgsrc: string;
    title: string;
    text : string;
    view : string;
    source : string;
}

const WorkCard: React.FC<WorkCardProps> = ({ imgsrc, title, text, view, source }) => {

    return (
                <div className="project-card">
                    <img src={imgsrc} alt="Project 1" />
                    <h2 className='project-title'>{title}</h2>
                    <div className="project-details">
                        <p >{text}</p>
                        <div className="project-buttons">
                            <NavLink to={view} className="btn">View</NavLink>
                            <NavLink to={source} className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
    );
}

export default WorkCard; 