import './ProjectCard.css';
import React from 'react';
import WorkCard from './WorkCard';
import ProjectData from './Data.ts';

const ProjectCard: React.FC = () => {
    return (
        <div className="work-container">
            <h1 className='project-heading'>Projects</h1>
            <div className="project-container">
                {ProjectData.map((project: { imgsrc: string; title: string; text: string; view: string; source: string; },index: React.Key | null | undefined) => (
                    <WorkCard
                        key={index}
                        imgsrc={project.imgsrc}
                        title={project.title}
                        text={project.text}
                        view={project.view}
                        source={project.source}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectCard; 