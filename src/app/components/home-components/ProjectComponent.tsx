"use client";
import { animateFadeDown, animateFadeUp, animateBlurIn, animatePullUp, animateRotateFromLeft } from '@/app/animation/animationVariants'
import { projects, projectsBaseData } from '@/app/variables/projectsVariables'
import { rootUrl } from '@/app/variables/sharedVariables'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { ThreeDComponent } from '../house-type-components/ThreeDComponent';

export const ProjectComponent = () => {

    const [projectHover, setProjectHover] = useState<string>('');



    return (
        <div className='2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%]  mx-auto flex flex-col justify-center items-center gap-y-10'>

            <div className='lg:w-[70%] w-full mx-auto flex flex-col gap-y-3'>
                <motion.h2
                    viewport={{ once: true }}
                    variants={animateFadeDown}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='base-color1 w-full flex justify-center items-center font-bold text-3xl'>

                    {"Projects"}
                </motion.h2>

                <motion.div
                    viewport={{ once: true }}
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.5}
                >

                    <p className='text-sm'>
                        {`Discover Your Dream Home: Explore our curated listings of stunning properties tailored to fit every lifestyle and budget. Your perfect space awaits!`}
                    </p>

                </motion.div>
            </div>


            <div className='w-full mx-auto flex flex-col justify-between gap-x-6'>

                <div className='w-full h-full flex flex-col gap-y-16'>
                    <ThreeDComponent link_3d='https://www.kuula.co/share/hqkhz?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                    <ThreeDComponent link_3d='https://www.kuula.co/share/hqk7Q?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />
                    <ThreeDComponent link_3d='https://www.kuula.co/share/hqkp5?logo=1&info=1&fs=1&vr=0&gyro=0&autorotate=0.35&thumbs=1&margin=20' />

                </div>


                <motion.div
                    viewport={{ once: true }}
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='flex w-full'>

                    <Link href={`${rootUrl}/projects`} className='mt-8 ml-2 flex items-center gap-x-2 base-color1 font-bold'>
                        <p className='text-lg'>
                            {"See More Projects"}
                        </p>

                        <FaArrowRight className='size-5' />
                    </Link>
                </motion.div>


            </div>

        </div>

    )
}
