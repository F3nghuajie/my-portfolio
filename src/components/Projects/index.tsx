import React from 'react';
import { projectsData } from '../../data';
import { GitHubIcon } from '../icons';

const Projects = () => (
    <section className="flex scroll-mt-20 flex-col py-10" id="projects">
        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 sm:text-3xl">Featured Projects</h2>
        <div className="flex flex-col gap-12 p-4">
            {projectsData.map((project, index) => {
                const isReversed = index % 2 !== 0;
                return (
                    <div key={project.title} className="grid grid-cols-1 items-start gap-8 rounded-xl border border-white/10 bg-white/5 p-6 md:grid-cols-2 md:gap-12">
                        <a className={`group block overflow-hidden rounded-lg ${isReversed ? 'md:order-2' : ''}`} href={project.liveUrl}>
                            <img className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" alt={project.imageAlt} src={project.imageSrc}/>
                        </a>
                        <div className={`flex flex-col gap-4 ${isReversed ? 'md:order-1' : ''}`}>
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <a className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary" href={project.liveUrl}>
                                    <span className="material-symbols-outlined"> open_in_new </span>
                                    <span>Live Demo</span>
                                </a>
                                <a className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary" href={project.sourceUrl}>
                                    <GitHubIcon />
                                    <span>View Source</span>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
);

export default Projects;
