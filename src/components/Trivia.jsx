import React from 'react'
import HeadingHelper from './Helpers/HeadingHelper';
import { motion } from 'framer-motion';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';
import api from '../assets/Trivia/api.png';
import aws from '../assets/Trivia/aws.png';
import css from '../assets/Trivia/css.png';
import dashboard from '../assets/Trivia/dashboard.png';
import js from '../assets/Trivia/js.png';
import kakashi from '../assets/Trivia/kakashi.jpg';
import mui from '../assets/Trivia/mui.png';
import react from '../assets/Trivia/react.png';
import tw from '../assets/Trivia/tw.png';
   
const Trivia = () => {
    const trivia = [
        {
            title: "CSS Ninja",
            image: css,
            description: ` I can make buttons prettier than your last date’s Instagram filter. Flexbox? More like "flex on 'em" box`,
            favoriteStars: 4
        },
        {
            title: "JavaScript Sorcerer",
            image: js,
            description: "You know what they say: “With great power comes great console.logging",
            favoriteStars: 4
        },
        {
            title: "TailwindCSS Whisperer",
            image: tw,
            description: "I turn utility classes into a symphony of styles. It’s like playing Tetris with colors, and I never lose",
            favoriteStars: 3
        },
        {
            title: "React Enthusiast",
            image: react,
            description: `When I say "React," it’s not just a reflex—I mean business. I’ve got hooks wrapped around my finger like they’re my loyal sidekicks`,
            favoriteStars: 4
        },
        {
            title: "API Wrangle",
            image: api,
            description: `If APIs were Pokémon, I’d have caught them all. Bonus: I’ve got the secret sauce for avoiding CORS issues`,
            favoriteStars: 4
        },
        {
            title: "MUI Magician",
            image: mui,
            description: `I can turn Material UI components into pixel-perfect works of art. Warning: They might just steal the show`,
            favoriteStars: 3
        },
        {
            title: "Dashboard Designer",
            image: dashboard,
            description: `Turning complex data into sleek, user-friendly dashboards—because numbers deserve to be displayed with style and flair!`,
            favoriteStars: 4
        },
        {
            title: "AWS Adventurer",
            image: aws,
            description: `I deployed my projects on AWS using CodeCommit and Amplify like a fearless explorer`,
            favoriteStars: 3
        },
       
        {
            title: "Anime Binge-Watcher",
            image: kakashi,
            description: `My coding breaks involve anime marathons. I code like a ninja, but watch like a true Hokage`,
            favoriteStars: 4
        }
    ];

    const renderStars = (favouriteStars) => {
        const stars = [];
        const totalStars = 5;

        for (let index = 0; index < totalStars; index++) {
            if (index < favouriteStars) {
                stars.push(<ImStarFull />)
            } else {
                stars.push(<ImStarEmpty />)
            }
        }
        return stars;
    }


    return (
        // <section className='flex flex-col items-center gap-6 p-2 min-h-screen mt-12' id='trivia'>
        <section className='flex flex-col items-center gap-6 p-2 mt-12' id='trivia'>
            <div>
                <span className='text-gray-300 font-semibold text-2xl md:text-4xl'>Trivia</span>
            </div>
            <div>
                <HeadingHelper text={"Discover the quirky side of my journey as a developer! From talking to hooks like old friends to making data look like art, this section is a peek into my tech-savvy, fun-filled world"} />
            </div>
            <div className='lg:mt-18 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-content-center place-items-center'>
                {
                    trivia.map((el, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 60, damping: 5 }}
                            viewport={{ amount: 0.3 }}
                            key={index}
                            className='card-container flex flex-col md:flex-row gap-4 justify-center items-center  p-2 border-2 border-purple-950 lg:h-[10rem]'>
                            <div>
                                <img
                                    className='object-cover rounded-full w-14 h-14 xl:w-24 xl:h-24'
                                    src={el.image}
                                    alt={el.title}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='max-w-[300px] flex flex-col text-gray-300'>
                                    <span className='text-base font-bold'>
                                        {el.title}
                                    </span>
                                    <span className='text-sm font-semibold'>
                                        {el.description}
                                    </span>
                                </div>
                                <div className='text-gray-400 flex gap-2 animate-pulse duration-300 ease-in-out'>
                                    {
                                        renderStars(el.favoriteStars)
                                    }
                                </div>
                            </div>
                        </motion.div>
                    ))
                }


            </div>
        </section>
    )
}

export default Trivia