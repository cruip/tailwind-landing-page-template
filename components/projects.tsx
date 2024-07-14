import React from 'react';
import { projects } from '@/app/lib/data';
import { Project } from '@/app/lib/definition';

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap">
                {project.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 mt-1 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </div>
);

export default Projects;