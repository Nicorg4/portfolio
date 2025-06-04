import { ArrowRight, Code, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const Projects = [
    {
        id: 1,
        title: 'Link & Learn',
        description: 'Platform that connects students and teachers to coordinate private or group classes.',
        image: '/projects/project1.webp',
        tags: ['React', 'Node', 'PostgreSQL'],
        frontURL: 'https://github.com/Nicorg4/2024-thetarnished-frontend',
        backURL: 'https://github.com/Nicorg4/2024-thetarnished',
    },
    {
        id: 2,
        title: 'PDH Tournament',
        description: 'Web app for managing esports tournaments, teams, players, and transfer market activity.',
        image: '/projects/project2.webp',
        tags: ['Next', 'Node', 'Tailwind'],
        frontURL: 'https://github.com/Nicorg4/PDH-tournament-app',
        backURL: 'https://github.com/Nicorg4/pdh-tournament-app-server',
    },
    {
        id: 3,
        title: 'Personal assistant',
        description: 'Virtual assistant that listens, understands, and performs system tasks through voice commands.',
        image: '/projects/project3.webp',
        tags: ['Python', 'pyttsx3', 'neuralintents'],
        frontURL: '',
        backURL: 'https://github.com/Nicorg4/personal-assistant',
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-40 px-4 relative">
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-12xl mx-auto'>
                    Here’s a selection of my work showcasing what I can build. Curious about something? Let’s talk.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Projects.map((project, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover ligthmode-border'>
                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
                            </div>
                            <div className='p-6'>
                                
                                <h3 className='font-semibold text-xl mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground mb-4 text-sm'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4 w-full justify-center'>
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className='px-2 py-1 text-sm font-medium ligthmode-border text-secondary-foreground rounded-lg border'>{tag}</span>
                                    ))}
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3 justify-center items-center w-full'>
                                        {project.frontURL && (
                                        <a href={project.frontURL} target="_blank" className='flex gap-2 hover:bg-primary transition-colors duration-300 border p-1 px-3 rounded-lg main-button'>
                                            <Code/> Front
                                        </a>
                                        )}
                                        <a href={project.backURL} target="_blank" className='flex gap-2 hover:bg-primary transition-colors duration-300 border p-1 px-3 rounded-lg main-button'>
                                            <Code/> Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='flex text-center mt-12 justify-center items-center'>
                    <a href="https://github.com/Nicorg4" target="_blank" className='main-button flex items-center w-fit gap-2'>All my projects <ArrowRight size={16}/></a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection