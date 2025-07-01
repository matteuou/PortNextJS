
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
    {
        title: 'Building',
        description: '.',
        image: '/image.png',
        projectLink: '#', 
        githubLink: 'https://github.com/yourprofile/timesheet-app', // Replace with actual GitHub repo
    },
    {
        title: 'Building',
        description: '.',
        image: '/image.png',
        projectLink: '#',
        githubLink: 'https://github.com/yourprofile/tech-site',
    },
    {
        title: 'Building',
        description: '',
        image: '/image.png',
        projectLink: '#',
        githubLink: 'https://github.com/yourprofile/playstation-clone',
    },
  
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <p className="section-subtitle">Things I've built so far</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <Image src={project.image} alt={project.title} width={400} height={200} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <Link href={project.projectLink} target="_blank" className="view-project">View Project</Link>
                            <Link href={project.githubLink} target="_blank" aria-label="GitHub Repo">
                                <i className="fab fa-github"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

