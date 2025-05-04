import React from 'react'
import { motion } from 'framer-motion'
import { FaAws, FaBootstrap, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaReact } from 'react-icons/fa'
import ProfilePic from '../assets/LinkedInImage.jpeg';
import { SiGmail, SiGoogleearth } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { IoLogoCss3 } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <>
            <section className='mt-[6rem] md:mt-auto relative mx-auto max-w-[1300px] text-gray-200 overflow-hidden' id='hero'>

                <div className='grid md:grid-cols-2 items-center place-items-center gap-8 md:p-10 md:mt-20 lg:mt-32'>
                    <motion.div
                    >
                        <motion.p
                            className='flex flex-col gap-1 text-xl md:text-4xl text-gray-300'
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            <span className='font-semibold'>Hey, I'm</span>
                            <span className='text-purple-500 font-semibold mt-2 mb-2 text-5xl'>Jothivaanan</span>
                        </motion.p>

                        <motion.p
                            className=' max-w-[300px] md:max-w-[700px] leading-3 mt-4 mb-4'
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            <TypeAnimation
                                sequence={[
                                    "A ",
                                    <span className='font-semibold'>React.js developer</span>,
                                    " with 4 years of experience building dashboards and crafting pixel-perfect UI components. I don't just code; I design with precision and a bit of flair. Let's turn your ideas into reality!"
                                ]}
                                wrapper="span"
                                cursor={true}
                                speed={60}
                                className='text-sm md:text-base text-gray-400 font-medium tracking-wider'
                            />
                        </motion.p>

                        <div className='flex items-center gap-2 justify-between'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.2 }}

                                className='flex gap-4 items-center text-purple-400 mt-4 text-base md:text-3xl'>
                                <motion.a
                                    href='mailto:jothivaananwebdeveloper@gmail.com'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <SiGmail />
                                </motion.a>
                                <motion.a
                                    href='https://www.linkedin.com/in/jothivaanan/'
                                    target='_blank'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a
                                    href='https://github.com/Jothivaanan-WebDeveloper'
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <FaGithub />
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.img
                        src={ProfilePic}
                        className='mt-8 w-[300px] md:w-[300px] rounded-full border-4 border-purple-900 p-2'
                        initial={{ opacity: 0, rotateY: -180 }}
                        whileInView={{ opacity: 0.85, rotateY: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                    >
                    </motion.img>
                </div>

                <div className='card-container mt-20'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className='text-lg md:text-4xl flex justify-center items-center p-4 gap-4 flex-wrap'
                    >
                        <p className='text-gray-400 text-xs md:text-lg font-medium tracking-widest'>Known Techs :</p>
                        <FaHtml5 className='text-red-800 animate-pulse ease-out' />
                        <IoLogoCss3 className='text-blue-600 animate-pulse ease-out' />
                        <FaBootstrap className='text-purple-600 animate-pulse ease-out' />
                        <FaJsSquare className='text-yellow-600 animate-pulse ease-out' />
                        <FaReact className='text-blue-500 animate-pulse ease-out' />
                        <RiTailwindCssFill className='text-blue-500 animate-pulse ease-out' />
                        <FaAws className='text-yellow-500 animate-pulse ease-out' />
                    </motion.div>
                </div>

                {/* <div
                    className='absolute inset-0 hidden md:block'
                >
                    <LightEffect top={0} left={0} size={1000} />
                </div> */}

            </section>
        </>
    )
}

export default Hero