import React from 'react'

const education = [
    {
        title: 'Bachelor’s Degree in Software Engineering',
        institution: 'Universidad Católica Argentina',
        startDate: '2016',
        endDate: '2025',
        description: 'Studied software development, algorithms, computer architecture, networks, and cybersecurity, with emphasis on problem-solving and system design.',
    },
    {
        title: 'Google Cybersecurity Professional Certificate',
        institution: 'Universidad Católica Argentina',
        startDate: '2025',
        endDate: '2025',
        description: 'Hands-on training in threat detection, risk management, network security, and incident response using industry tools.',
    },
    {
        title: 'Google Cloud Cybersecurity Professional Certificate',
        institution: 'Google Cloud',
        startDate: '2025',
        endDate: 'In progress',
        description: 'Focused on cloud infrastructure protection, identity and access management, and threat detection in Google Cloud.',
    },
    
];

const experience = [
    {
        title: 'Full Stack Developer',
        company: 'Freelance',
        startDate: '2022',
        endDate: 'Present',
        description: 'Developed and maintained web applications using React, Node.js, and PostgreSQL. Designed and implemented features focused on security, scalability, and performance. Collaborated with cross-functional teams to deliver user-friendly interfaces and efficient backend services. Ensured code quality through testing and version control best practices.',
    },
    {
        title: 'Systems Development and Audit Analyst',
        company: 'Instituto de Gestión Electoral, GCBA',
        startDate: '2024',
        endDate: '2024',
        description: 'Audited supplier systems and electronic voting devices to ensure compliance with internal regulations and the Electoral Code. Participated in technical evaluations, infrastructure reviews, and implementation of internal IT controls for electoral processes.',
    },
]

const TimelineColumn = ({ items, type }) => (
    <div className="relative pl-10 space-y-5">
        <div className="absolute left-5 top-10 h-[94%] w-1 bg-foreground/70"></div>
        <h3 className="text-2xl font-bold mb-2">{type === 'education' ? 'Education' : 'Experience'}</h3>
        {items.map((item, index) => (
            <div key={index} className="relative flex items-start">
                <span className="absolute -left-8 top-8 w-7 h-7 rounded-lg bg-primary border-4 border-background z-10"></span>
                <div className="bg-card p-6 pr-10 pl-10 rounded-lg shadow-xs w-full">
                    <h4 className="font-bold text-[18px] text-left">{item.title}</h4>
                    <p className="text-[15px] mt-2 text-left mb-3 border-b border-muted-foreground pb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-muted-foreground text-sm text-left">
                            {type === 'education' ? item.institution : item.company}
                        </p>
                        <p className="text-muted-foreground text-sm text-right">
                            {item.startDate} - {item.endDate}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const CareerPathSection = () => {
    return (
        <section id="careerpath" className="py-40 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Career <span className="text-primary">Path</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <TimelineColumn items={education} type="education" />
                    <TimelineColumn items={experience} type="experience" />
                </div>
            </div>
        </section>
    )
}

export default CareerPathSection
