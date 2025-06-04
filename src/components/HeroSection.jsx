import { ArrowDown, Github, Linkedin, Mail, CopyCheck } from 'lucide-react'
import React, { useState } from 'react'

const HeroSection = () => {
    const [isEmailCopied, setIsEmailCopied] = useState(false)
    const [buttonHovered, setButtonHovered] = useState('')

    const handleEmailClick = async (e) => {
        e.preventDefault()
        const email = 'nicolasrgota@gmail.com'

        try {
            await navigator.clipboard.writeText(email)
            setIsEmailCopied(true)
            setTimeout(() => {
                setIsEmailCopied(false)
            }, 5000)
        } catch (err) {
            console.error('Error al copiar email:', err)
            window.location.href = `mailto:${email}`
        }
    }

    return (
        <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-3xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hello, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'>{" "}Nicolás</span>
                        <span className='text-gradient opacity-0 animate-fade-in-delay-2'>{" "}Gota</span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        I'm a <span className='text-primary'>Software Engineer</span> with a strong foundation in full-stack development and a growing focus on cybersecurity and cloud technologies.
                    </p>
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row items-center justify-center gap-2'>
                        <div className='flex'>
                            <div className='relative flex'>
                                {buttonHovered === 'linkedin' && (
                                    <span className='absolute left-[-20px] right-0 top-10 text-center text-white mt-2 bg-black w-30 p-1 border rounded-lg'>
                                        Go to LinkedIn
                                    </span>
                                )}
                                <a
                                    href="https://www.linkedin.com/in/nicolas-rodrigo-gota-b9827b209/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="alt-button"
                                    onMouseEnter={() => setButtonHovered('linkedin')}
                                    onMouseLeave={() => setButtonHovered('')}
                                >
                                    <Linkedin className='h-6 w-6' />
                                </a>
                            </div>
                            <div className='relative flex'>
                                {buttonHovered === 'github' && (
                                    <span className='absolute left-[-20px] right-0 top-10 text-center text-white mt-2 bg-black w-30 p-1 border rounded-lg'>
                                        Go to GitHub
                                    </span>
                                )}
                                <a
                                    href="https://github.com/Nicorg4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="alt-button"
                                    onMouseEnter={() => setButtonHovered('github')}
                                    onMouseLeave={() => setButtonHovered('')}
                                >
                                    <Github className='h-6 w-6' />
                                </a>
                            </div>
                            <div className='relative'>
                                {buttonHovered === 'email' && (
                                    <span className='absolute left-[-20px] right-0 top-10 text-center text-white mt-2 bg-black w-30 p-1 border rounded-lg'>
                                        Copy Email
                                    </span>
                                )}
                                <button
                                    onClick={handleEmailClick}
                                    onMouseEnter={() => setButtonHovered('email')}
                                    onMouseLeave={() => setButtonHovered('')}
                                    className={`alt-button transition-all duration-300 cursor-copy ${isEmailCopied ? 'bg-primary text-white' : ''
                                        }`}
                                    title={isEmailCopied ? 'Copied!' : 'Copy email'}
                                >
                                    {isEmailCopied ? (
                                        <CopyCheck className='h-6 w-6' />
                                    ) : (
                                        <Mail className='h-6 w-6' />
                                    )}
                                </button>
                            </div>
                        </div>

                        <a href="../../CV/Nicolas_Gota_Developer_CV_2025.pdf" download className='main-button'>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <ArrowDown className='h-10 w-10 text-foreground cursor-pointer' onClick={() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }} />
            </div>
        </section>
    )
}

export default HeroSection