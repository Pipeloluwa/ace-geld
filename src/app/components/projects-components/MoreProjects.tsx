"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlLocationPin } from 'react-icons/sl'
import { projectsBaseData } from '@/app/variables/projectsVariables'
import { rootUrl } from '@/app/variables/sharedVariables'
import { animateGradualSpacing, animateBlurIn, animatePullUp, animateRotateFromLeft, animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'
import { ThreeDComponent } from '../house-type-components/ThreeDComponent';


export const MoreProjects: React.FC<{ title: string }> = ({ title }) => {

    const [projectHover, setProjectHover] = useState<string>('');

    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>


            <div className='flex flex-wrap'>
                {
                    "More Projects".split("").map((char, index) =>
                        <motion.p
                            viewport={{ once: true }}
                            key={`Welcome to${index}`}
                            variants={animateGradualSpacing}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={index}

                            style={{ whiteSpace: "pre-wrap" }}
                            className='base-color1 text-xl font-bold'>

                            {char}
                        </motion.p>
                    )
                }
            </div>


            <div className='w-full h-full flex flex-col gap-y-16'>
                <ThreeDComponent link_3d='https://www.kuula.co/share/hqkhz?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                <ThreeDComponent link_3d='https://www.kuula.co/share/hqk7Q?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                <ThreeDComponent link_3d='https://www.kuula.co/share/hqkp5?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                <ThreeDComponent link_3d='https://www.kuula.co/share/hqkmn?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                <ThreeDComponent link_3d='https://www.kuula.co/share/hqkpw?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                <ThreeDComponent link_3d='https://www.kuula.co/share/hqkpD?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
            </div>



        </div>
    )
}
