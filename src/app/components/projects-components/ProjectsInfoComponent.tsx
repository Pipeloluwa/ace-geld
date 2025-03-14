import { animateBlurIn, animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'
import { IProjectInfo } from '@/app/interfaces/ITypeData';
import { motion } from 'motion/react'
import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa';



export const ProjectsInfoComponent: React.FC<IProjectInfo> = (props) => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

            
            <div className='w-full min-h-[350px] flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-10'>

                <div className='lg:w-[50%] lg:pr-[5%] flex flex-col gap-y-12'>

                    <div className=' flex flex-col gap-y-3'>

                        <div className='flex flex-wrap'>
                            {
                                "Acegeld".split("").map((char, index) =>
                                    <motion.p
                                        viewport={{ once: true }}
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


                        {/* <motion.h3
                    viewport={{once: true}}
                    viewport={{once: true}}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='italic'>
                            {props.projectData.location}
                        </motion.h3> */}

                        <motion.p
                    viewport={{once: true}}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='text-justify'>
                            {`
                                At Acegeld, our service cycle ensures a structured and professional approach to delivering top
quality                         building and construction solutions. Our process follows these key phases:
                            `}
                        </motion.p>




                        <motion.ul 
                            viewport={{once: true}}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='flex flex-col gap-y-4 mt-4 ml-4 text-sm list-decimal'>
                            <li>
                                <h5 className='font-bold'>
                                    {"Measure"}
                                </h5>

                                <p>
                                    {`
                                    Every project begins with accurate measurements. Our team conducts thorough site 
                                    inspections to assess dimensions, structural conditions, and project requirements. This step 
                                    ensures precision and minimizes errors in subsequent phases.
                                    `}
                                </p>

                            </li>

                            <li>
                                <h5 className='font-bold'>
                                    {"Design"}
                                </h5>

                                <p>
                                    {`
                                    Based on the measurements and client specifications, our experts create a tailored design. We 
                                    incorporate functionality, aesthetics, and industry standards to develop a plan that aligns with 
                                    our client's vision and regulatory guidelines. 
                                    `}
                                </p>
                            </li>

                            <li>
                                <h5 className='font-bold'>
                                    {"Quote"}
                                </h5>

                                <p>
                                    {`
                                    Once the design is finalized, we provide a detailed quotation covering materials, labor, 
                                    timelines, and costs. Transparency is key at this stage, allowing clients to make informed 
                                    decisions with a clear understanding of the project scope and budget. 
                                    `}
                                </p>
                            </li>

                            <li>
                                <h5 className='font-bold'>
                                    {"Begin Project "}
                                </h5>

                                <p>
                                    {`
                                   After approval, we mobilize resources and commence construction. Our team adheres to best 
                                    practices, ensuring quality workmanship, safety compliance, and efficient project execution. 
                                    Regular updates keep clients informed throughout the process.
                                    `}
                                </p>
                            </li>

                            <li>
                                <h5 className='font-bold'>
                                    {"Complete Project "}
                                </h5>

                                <p>
                                    {`
                                    Upon completion, we conduct final inspections to guarantee that all aspects meet the highest 
                                    standards. We hand over a fully functional, high-quality structure, ensuring client satisfaction 
                                    and long-term durability.
                                    `}
                                </p>
                            </li>

                            <p>
                                    {`
                                    This structured approach reflects our commitment to excellence, professionalism, and customer 
                                    satisfaction in every project we undertake.
                                    `}
                                </p>

                        </motion.ul>

                    </div>
                </div>




                <motion.div
                    viewport={{once: true}}
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='relative flex lg:w-[50%] lg:h-auto h-[400px] bg-gray-300 shadow-md shadow-gray-500 overflow-hidden'>

                    <img alt='project picture' src={props.projectData.picture} className='flex w-full h-full object-cover blur-sm' />

                    
                    
                    <div className='z-10 w-full absolute left-0 right-0 top-0 bottom-0 flex flex-col gap-y-2 justify-center items-center'>
                <div className='w-full flex flex-col gap-y-2 justify-center items-center'>
                    <h5 className='base-color1 lg:text-3xl text-sm text-center py-2 lg:w-[300px] min-w-[200px] bg-white rounded-3xl'>
                        {"Measure"}
                    </h5>
                    <FaLongArrowAltDown className='lg:h-[70px] text-white' />
                </div>

                <div className='w-full flex flex-col gap-y-2 justify-center items-center'>
                    <h5 className='base-color1 lg:text-3xl text-sm text-center py-2 lg:w-[300px] min-w-[200px] bg-white rounded-3xl'>
                        {"Design"}
                    </h5>
                    <FaLongArrowAltDown className='lg:h-[70px] text-white' />
                </div>

                <div className='w-full flex flex-col gap-y-2 justify-center items-center'>
                    <h5 className='base-color1 lg:text-3xl text-sm text-center py-2 lg:w-[300px] min-w-[200px] bg-white rounded-3xl'>
                        {"Quote"}
                    </h5>
                    <FaLongArrowAltDown className='lg:h-[70px] text-white' />
                </div>

                <div className='w-full flex flex-col gap-y-2 justify-center items-center'>
                    <h5 className='base-color1 lg:text-3xl text-sm text-center py-2 lg:w-[300px] min-w-[200px] bg-white rounded-3xl'>
                        {"Begin Project"}
                    </h5>
                    <FaLongArrowAltDown className='lg:h-[70px] text-white' />
                </div>

                <div className='w-full flex flex-col gap-y-2 justify-center items-center'>
                    <h5 className='base-color1 lg:text-3xl text-sm text-center py-2 lg:w-[300px] min-w-[200px] bg-white rounded-3xl'>
                        {"Complete Project"}
                    </h5>
                </div>

            </div>
                </motion.div>


            </div>

        </div>
    )
}
