"use client";
import { animateBlurIn } from '@/app/animation/animationVariants';
import { interFont } from '@/app/fonts/fontsConfig';
import { IThreeD } from '@/app/interfaces/ITypeData'
import { motion } from 'motion/react';
import React, { useState } from 'react'
import { BiFullscreen } from 'react-icons/bi';

export const ThreeDComponent: React.FC<IThreeD> = ({ link_3d }) => {
    const [fullScreenState, setFullScreenState] = useState<boolean>(false);


    return (
        <div className='w-full flex flex-col justify-center gap-y-10'>

            <motion.div
                    viewport={{once: true}}
                variants={animateBlurIn}
                initial={"offscreen"}
                whileInView={"onscreen"}

                className={`${fullScreenState
                    ? "z-50 fixed left-0 right-0 top-0 bottom-0 h-full"
                    : "relative lg:h-[700px] h-[500px]"}`}>

                <iframe
                    src={link_3d}
                    title='3D Page'
                    className={`${fullScreenState ? 'pointer-events-auto': 'pointer-events-none md:pointer-events-auto'} h-full w-full bg-gray-800`}
                >

                </iframe>


                <div className='z-50 w-[110px] h-[40px] fixed right-[20px] top-[14px] flex justify-center items-center text-center bg-black/50 text-white'>
                    {"AceGeld"}
                </div>



                <button onClick={() => setFullScreenState(value => !value)}
                    className={`${fullScreenState ? "z-50 fixed left-2 top-4" : "absolute left-2 top-4"} 
                         tracking-widest text-[15px] bg-black text-white h-[40px] p-3 rounded-lg
                        `}
                >

                    <span className={`${interFont.className} md:flex hidden capitalize gap-x-2 text-sm`}>
                        {`${fullScreenState ? "Exit Fullscreen" : "Show Fullscreen"}`}
                        <BiFullscreen className="size-[20px]" />
                    </span>

                    <span className={`${interFont.className} md:hidden flex capitalize gap-x-2 text-sm`}>
                        {`${fullScreenState ? "Exit Fullscreen" : "Interact"}`}
                        <BiFullscreen className="size-[20px]" />
                    </span>

                </button>

            </motion.div>





        </div>
    )
}
