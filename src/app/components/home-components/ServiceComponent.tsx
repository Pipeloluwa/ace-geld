"use client";
import { animateFadeDown, animateFadeUp, animateBlurIn, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'
import { useState } from 'react';
import { FaUsersViewfinder } from 'react-icons/fa6'
import { GiTreeGrowth } from 'react-icons/gi'
import { IoConstructOutline } from 'react-icons/io5'
import { MdOutlineManageHistory } from 'react-icons/md'
import { SiAffinitydesigner } from 'react-icons/si'

export const ServiceComponent = () => {
    const servicesData = [
        {
            "title": "Consultation",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipi",
            "icon": <FaUsersViewfinder className='size-[50px]' />
        },

        {
            "title": "Design & Automation",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipi",
            "icon": <SiAffinitydesigner className='size-[50px]' />
        },

        {
            "title": "Construction",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipi",
            "icon": <IoConstructOutline className='size-[50px]' />
        },

        {
            "title": "Project Management",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipi",
            "icon": <MdOutlineManageHistory className='size-[50px]' />
        },

        {
            "title": "Smart Investment",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipi",
            "icon": <GiTreeGrowth className='size-[50px]' />
        }
    ]

    const [projectHover, setProjectHover] = useState<string>('');



    return (
        <div className='2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-10'>

            <div className='lg:w-[70%] w-full mx-auto flex flex-col gap-y-3'>
                <motion.h2
                    variants={animateFadeDown}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='base-color1 w-full flex justify-center items-center font-bold text-3xl'>

                    {"Services"}
                </motion.h2>

                <motion.p
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.5}

                    className='text-sm'>

                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, tortor et consectetur vulputate, sapien enim gravida orci, sed facilisis nunc nunc vel ante. Nulla facilisi. Ut ac elit in risus pharetra cursus. Aliquam erat`}
                </motion.p>

            </div>


            <div className='w-full lg:h-[750px] flex lg:flex-row flex-col-reverse justify-between lg:gap-x-6 lg:gap-y-0 gap-y-16'>

                <div className='lg:w-[50%] w-full px-[10px] h-full flex flex-col justify-between lg:gap-y-3 gap-y-8'>
                    {
                        servicesData.map((item, index) =>
                            <motion.div
                                key={`serviceDataSample${index}`}
                                variants={index % 2 === 0 ? animateFromRight : animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={index * 0.25}

                                className='w-full flex flex-col gap-y-2 bg-gray-100 transition-colors duration-500 rounded-xl p-4 shadow'>
                                <div className='flex items-center gap-x-3 font-bold'>
                                    {item.icon}

                                    <h3 className='text-xl'>
                                        {item.title}
                                    </h3>

                                </div>

                                <p className='text-sm'>
                                    {item.description}
                                </p>
                            </motion.div>

                        )
                    }


                </div>


                <motion.div
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}

                    className='lg:w-[50%] w-full lg:h-full h-[500px] bg-gray-300 overflow-hidden'>

                    <img alt='about picture' src='images/pictures/others/services.webp' className='flex w-full h-full object-cover' />

                </motion.div>

            </div>


        </div>

    )
}
