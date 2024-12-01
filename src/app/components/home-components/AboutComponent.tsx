"use client"
import { interFont, pacificoFont } from '@/app/fonts/fontsConfig'
import { rootUrl } from '@/app/variables/sharedVariables'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React, { LegacyRef, useRef } from 'react'
import CountUp from 'react-countup'
import { useCountUp } from 'react-countup';
import { BsHouses } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { LiaAwardSolid } from 'react-icons/lia'
import { PiUsersThree } from 'react-icons/pi'
import { motion, useInView } from "motion/react"
import {
    animateBlurIn,
    animateFadeDown,
    animateFadeUp,
    animateGradualSpacing,
    animateRotateFromRight,
} from '@/app/animation/animationVariants';


export const AboutComponent = () => {

    const divCountRef: LegacyRef<HTMLDivElement> = useRef(null);
    const divCountView = useInView(divCountRef);



    const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, tortor et consectetur vulputate, sapien enim gravida orci, sed facilisis nunc nunc vel ante. Nulla facilisi. Ut ac elit in risus pharetra cursus. Aliquam erat volutpat. Vivamus mollis magna eu est convallis, nec ultricies nisi laoreet. Curabitur sed orci at odio sollicitudin cursus. Phasellus dapibus mi a est lacinia, ut malesuada tortor auctor. Cras a nulla odio. Sed id posuere ligula. Duis hendrerit ante nec dui tincidunt, sit amet vehicula libero sollicitudin. Mauris aliquet eros vitae leo tincidunt, id vestibulum felis placerat. Nulla ac eros eget risus vehicula cursus sit amet sit amet mauris. Proin pharetra hendrerit augue non condimentum.";


    return (
        <div className='2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-10'>
            <div className='flex gap-x-1'>
                {
                    "You  are  welcome  aboard".split("").map((char, index) =>
                        <motion.p
                            key={`Welcome to${index}`}
                            variants={animateGradualSpacing}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={index}
                            exit="hidden"

                            className={`${pacificoFont.className} tracking-tighter base-color1 text-xl text-center`}>

                            {char}
                        </motion.p>
                    )
                }
            </div>



            <div className='w-full flex lg:flex-row flex-col lg:justify-between lg:gap-x-6 lg:gap-y-0 gap-y-6 '>

                <motion.div
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}

                    className='lg:w-[50%] w-full min-h-[500px] bg-gray-300 overflow-hidden'>

                    <img alt='about picture' src='images/pictures/pages/about.webp' className='flex w-full h-full object-cover' />

                </motion.div>





                <div className='lg:w-[50%] lg:mt-0 mt-12 w-full px-[10px] h-full flex flex-col gap-y-3'>

                    <motion.h2
                        variants={animateFadeDown}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0}

                        className='base-color1 w-full flex justify-center items-center font-bold text-3xl'>

                        {"About Us"}
                    </motion.h2>

                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.5}

                        className='flex flex-col w-full'
                    >
                        <p className='text-sm'>
                            {aboutContent}
                        </p>

                        <div className='flex w-full'>
                            <Link href={`${rootUrl}/about`} className='mt-2 flex items-center gap-x-2 base-color1 font-bold'>
                                <p className='text-sm'>
                                    {"Read More"}
                                </p>

                                <FaArrowRight className='size-5' />
                            </Link>
                        </div>
                    </motion.div>




                    <div ref={divCountRef} className='w-full grid grid-cols-2 mt-12 gap-y-8'>

                        {
                            divCountView
                            &&

                            <>
                                <motion.div
                                    variants={animateRotateFromRight}
                                    initial={"offscreen"}
                                    animate={divCountView ? "onscreen" : ""}
                                    custom={0}

                                    className='flex items-center gap-x-3 font-bold'>
                                    <BsHouses className='lg:size-[50px] size-[30px]' />

                                    <div className='flex flex-col'>

                                        <div className='flex items-center'>
                                            <CountUp
                                                end={30}
                                                className='lg:text-4xl text-3xl base-color1'
                                            />

                                            <h2 className='lg:text-4xl text-3xl base-color1'>
                                                {"+"}
                                            </h2>

                                        </div>


                                        <h3>
                                            {"Houses"}
                                        </h3>
                                    </div>



                                </motion.div>


                                <motion.div
                                    variants={animateRotateFromRight}
                                    initial={"offscreen"}
                                    animate={divCountView ? "onscreen" : ""}
                                    custom={0.3}

                                    className='flex items-center gap-x-3 font-bold'>
                                    <GrProjects className='lg:size-[50px] size-[30px]' />

                                    <div className='flex flex-col'>

                                        <div className='flex items-center'>
                                            <CountUp
                                                end={5}
                                                className='lg:text-4xl text-3xl base-color1'
                                            />

                                            <h2 className='lg:text-4xl text-3xl base-color1'>
                                                {"+"}
                                            </h2>

                                        </div>


                                        <h3>
                                            {"Projects"}
                                        </h3>
                                    </div>

                                </motion.div>



                                <motion.div
                                    variants={animateRotateFromRight}
                                    initial={"offscreen"}
                                    animate={divCountView ? "onscreen" : ""}
                                    custom={0.6}

                                    className='flex items-center gap-x-3 font-bold'>
                                    <LiaAwardSolid className='lg:size-[50px] size-[30px]' />



                                    <div className='flex flex-col'>
                                        <div className='flex items-center'>
                                            <CountUp
                                                end={10}
                                                className='lg:text-4xl text-3xl base-color1'
                                            />

                                            <h2 className='lg:text-4xl text-3xl base-color1'>
                                                {"+"}
                                            </h2>

                                        </div>

                                        <h3>
                                            {"Awards"}
                                        </h3>
                                    </div>

                                </motion.div>



                                <motion.div
                                    variants={animateRotateFromRight}
                                    initial={"offscreen"}
                                    animate={divCountView ? "onscreen" : ""}
                                    custom={0.9}

                                    className='flex items-center gap-x-3 font-bold'>
                                    <PiUsersThree className='lg:size-[50px] size-[30px]' />

                                    <div className='flex flex-col'>
                                        <div className='flex items-center'>
                                            <CountUp
                                                end={105}
                                                className='lg:text-4xl text-3xl base-color1'
                                            />

                                            <h2 className='lg:text-4xl text-3xl base-color1'>
                                                {"+"}
                                            </h2>

                                        </div>

                                        <h3>
                                            {"Clients"}
                                        </h3>
                                    </div>

                                </motion.div>
                            </>
                        }



                    </div>


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0}
                        className='w-[80%] flex flex-col gap-y-2 mt-12'>

                        <p className='font-bold'>
                            {`Let’s connect, your dream home is just a message away!`}
                        </p>

                        <Link href={`${rootUrl}/contact`}>
                            <Button onClick={() => { }}
                                className={` tracking-widest text-[15px] base-background2 w-full h-[40px] sm:hover:bg-[#f0f0f0]
                                text-gray-900 sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
                                placeholder='' onPointerEnterCapture onPointerLeaveCapture
                            >
                                <span className={`${interFont.className} capitalize text-sm`}>
                                    {"Speak To Us"}
                                </span>
                            </Button>
                        </Link>

                    </motion.div>

                </div>

            </div>

        </div>

    )
}
