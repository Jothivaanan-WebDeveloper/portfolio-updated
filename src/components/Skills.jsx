import { motion } from 'framer-motion';
import { DiReact } from 'react-icons/di';
import {  FaJsSquare,  FaAws, FaGitAlt } from 'react-icons/fa';
import HeadingHelper from './Helpers/HeadingHelper';
import { RiTailwindCssFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {

    const techSkills = [
        {
            title: 'React.js Mastery',
            icon: <DiReact />,
            color: 'text-blue-500',
            description: 'Expert in building responsive, reusable components with React. From hooks to state management, I’ve crafted interactive, user-friendly UIs for dashboards and applications.'
        },
        {
            title: 'TailwindCSS & CSS',
            icon: <RiTailwindCssFill />,
            color: 'text-purple-500',
            description: 'Proficient in creating modern, responsive layouts with TailwindCSS and custom CSS. I make sure every design is pixel-perfect and easy to maintain.'
        },
        {
            title: 'JavaScript (ES6+)',
            icon: <FaJsSquare />,
            color: 'text-yellow-600',
            description: 'Adept at modern JavaScript (ES6+) with a deep understanding of promises, async/await, and functional programming. Writing clean, efficient code is my priority.'
        },
        {
            title: 'Version Control with Git',
            icon: <FaGitAlt />,
            color: 'text-red-500',
            description: 'Solid experience using Git for version control, branching, and collaborating on projects. I keep code organized and workflows smooth in any team environment.'
        },
        {
            title: 'AWS Web Services',
            icon: <FaAws />,
            color: 'text-yellow-500',
            description: 'Hands-on experience with AWS services like Lambda, API Gateway, and Amplify. I’ve built and deployed scalable, serverless solutions for modern web applications.'
        },
        {
            title: 'VS Code IDE',
            icon: <VscVscode />,
            color: 'text-blue-600',
            description: 'Proficient with Visual Studio Code, leveraging extensions, shortcuts, and customization to enhance productivity and streamline the development workflow.'
        }
    ];


    return (
        <motion.div
            initial={{ scale: 0.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center gap-6 p-2 mt-10' id='skills'>
            <div>
                <span className='text-2xl text-gray-300 font-semibold md:text-4xl'>Skills</span>
            </div>

            <HeadingHelper text={"From building sleek user interfaces to deploying full-stack applications, these are the skills that power my work."} />

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
                {
                    techSkills.map((el) => (
                        <div class="shadow-lg rounded-lg p-6 flex flex-col items-center text-center card-container">
                            <span className={`text-5xl p-1 ${el.color}`}>{el.icon}</span>
                            <h3 class="text-xl font-bold mb-2 text-gray-300">{el.title}</h3>
                            <p class="text-sm md:text-lg text-gray-400">{el.description}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Skills;
