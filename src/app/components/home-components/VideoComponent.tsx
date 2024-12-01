'use client'
import dynamic from 'next/dynamic';

import { animateBlurIn } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'
import React from 'react';
import { WelcomeSuspense } from '../suspense-components/WelcomeSuspense';



interface IVideoComponent {
    setVideoLoadState: React.Dispatch<React.SetStateAction<boolean>>
}



const VideoComponent: React.FC<IVideoComponent> = ({ setVideoLoadState }) => {
    return (
        <motion.video
            onCanPlay={() => setTimeout(() => setVideoLoadState(true), 1000)}
            autoPlay muted loop playsInline
            viewport={{ once: true }}
            variants={animateBlurIn}
            initial={"offscreen"}
            whileInView={"onscreen"}

            className='object-cover absolute left-0 right-0 top-0 bottom-0 w-full h-full'>

            <source src="/videos/welcome-video-bg.webm" type="video/webm" />
        </motion.video>
    )
}


export default dynamic(() => Promise.resolve(VideoComponent), {loading: () => <WelcomeSuspense />, ssr: false });