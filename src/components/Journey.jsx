import React from 'react'
import Project1 from '../assets/TinderCat.png';
import Project2 from '../assets/MovieSearchEngine.png';
import Project3 from '../assets/KakashiJourney.png';
import Project4 from '../assets/ETP.png';
import Project5 from '../assets/AM.png';
import Project6 from '../assets/PC.png';
import HeadingHelper from './Helpers/HeadingHelper';

const Journey = () => {
    const projects = [
        {
            img: Project1,
            title: "Tinder Cats",
            link: "https://master.dtphj19qjf7pi.amplifyapp.com/",
            description: "Tinder Cats is an imaginative app where users can browse profiles of cats. This playful twist on Tinder allowed me to create a fun, engaging platform for cat enthusiasts.",
            techUsed: ['HTML', 'CSS', 'Bootstrap', 'AWS Amplify', 'AWS Code Commit']
        },
        {
            img: Project2,
            title: "Movie Search",
            link: "https://moviesearchengine-ab548.web.app/",
            description: "The Movie Search Engine enables users to search for movies and instantly view posters and details. It offers a seamless movie discovery experience with real-time data.",
            techUsed: ['React', 'Bootstrap', 'Rapid API', 'Firebase']
        },
        {
            img: Project3,
            title: "The Journey of Copy Ninja",
            link: 'https://kakashi-portfolio.web.app/',
            description: "A fan site dedicated to Kakashi Hatake, showcasing his adventures, skills, and trivia. The interactive content brings his iconic story to life for anime fans.",
            techUsed: ['React', 'TailwindCSS', 'Framer Motion', 'Firebase']
        },
        {
            img: Project4,
            title: "Employee Timesheet Portal",
            link: 'a',
            description: "An internal portal where employees book tasks and managers approve them. The system manages time-tracking efficiently and supports smooth task management.",
            techUsed: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'AWS Amplify', 'AWS Code Commit']
        },
        {
            img: Project5,
            title: "Asset Management System",
            link: 'a',
            description: "This system enables employees to request assets, while admins review and approve them, ensuring efficient distribution and management of company resources.",
            techUsed: ['React', 'Bootstrap', 'MUI', 'AWS Amplify', 'AWS Code Commit']
        },
        {
            img: Project6,
            title: "Pro Customer (E-Commerce)",
            link: 'a',
            description: "An e-commerce platform designed for smooth online shopping, providing an easy-to-navigate interface for customers and a streamlined shopping experience.",
            techUsed: ['React', 'MUI', 'Primereact', 'Primeflex', 'AWS Amplify', 'AWS Code Commit']
        }
    ];

    const techColors = {
        HTML: 'bg-red-500 text-white',
        CSS: 'bg-blue-500 text-white',
        Bootstrap: 'bg-purple-500 text-white',
        Javascript: 'bg-yellow-300 text-black',
        MUI: 'bg-blue-700 text-white',
        TailwindCSS: 'bg-blue-500 text-white',
        'Framer Motion': 'bg-gray-400 text-white',
        'Primereact': 'bg-cyan-600 text-white',
        'Primeflex': 'bg-sky-500 text-white',
        'AWS Code Commit': 'bg-yellow-500 text-black',
        'AWS Amplify': 'bg-orange-500 text-white',
        React: 'bg-purple-600 text-white',
        'Rapid API': 'bg-green-500 text-white',
        Firebase: 'bg-yellow-400 text-black',
    };


    return (
        <section id='journey'
            className='flex flex-col items-center gap-6 p-2 min-h-screen md:mt-8 lg:mt-0'>

            <div className='text-center'>
                <span className='text-gray-300 text-2xl font-semibold md:text-4xl '>Projects</span>
            </div>

            <div>
                <HeadingHelper text={"My journey started with a simple HTML and CSS website, building the foundations of web development. Today, I create dynamic and complex E-Commerce web apps, turning ideas into digital experiences."} />
            </div>

            <div>
                {
                    projects.map((el, index) => (
                        <div
                            key={index}
                            className={`journey-animation flex flex-col items-center md:max-w-[1000px] md:items-start md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className='w-full md:w-1/2 p-4 journey-card'>
                                <a
                                    href={el.link}
                                    target='_blank'
                                >
                                    <img
                                        src={el.img}
                                        alt={el.title}
                                        className='w-full object-cover rounded-lg'
                                    />
                                </a>
                                <div className='text-gray-200 mt-4 flex flex-col'>
                                    <span className='text-base md:text-xl font-bold pb-2 space-y-8'>{el.title}</span>
                                    <span
                                        dangerouslySetInnerHTML={{ __html: el.description }}
                                        className="text-gray-300"
                                    />
                                    <div className='flex flex-col gap-1 mt-2'>
                                        <span className='text-sm md:text-base font-bold'>Tech Stack:</span>
                                        <div className="flex items-center flex-wrap">
                                            {el.techUsed.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`text-xs md:text-sm font-semibold px-3 py-1 rounded-2xl m-1 ${techColors[tech]}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Journey