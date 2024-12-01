import { animateBlurIn, animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'
import { IProjectInfo } from '@/app/interfaces/ITypeData';
import { motion } from 'motion/react'
import React from 'react'



export const ProjectsInfoComponent: React.FC<IProjectInfo> = (props) => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

            <div className='w-full min-h-[500px] flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-10'>

                <div className='lg:w-[50%] lg:pr-[5%] flex flex-col gap-y-12'>

                    <div className=' flex flex-col gap-y-3'>

                        <div className='flex'>
                            {
                                props.title.split("").map((char, index) =>
                                    <motion.p
                                        key={`Welcome to${index}`}
                                        variants={animateGradualSpacing}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={index}

                                        style={{ whiteSpace: "pre-wrap" }}
                                        className={`base-color1 text-3xl font-bold ${index === 0 ? "capitalize" : ""}`}>

                                        {char}
                                    </motion.p>
                                )
                            }
                        </div>


                        <motion.h3
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='italic'>
                            {props.projectData.location}
                        </motion.h3>

                        <motion.p
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='text-justify text-sm'>
                            {props.projectData.description}
                        </motion.p>

                    </div>
                </div>




                <motion.div
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='lg:w-[50%] lg:min-h-[500px] min-h-[400px] bg-gray-300 shadow-md shadow-gray-500 overflow-hidden'>

                    <img alt='project picture' src={props.projectData.picture} className='flex w-full lg:min-h-[500px] min-h-[400px] h-full object-cover' />
                </motion.div>


            </div>

        </div>
    )
}
