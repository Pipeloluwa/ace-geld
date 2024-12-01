import { animateGradualSpacing, animateFadeUp } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'

export const AwardComponent = () => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>
            <div className='w-full flex flex-col gap-y-3'>
                <div className='flex '>
                    {
                        "Awards & Recognition".split("").map((char, index) =>
                            <motion.p
                                key={`Welcome to${index}`}
                                variants={animateGradualSpacing}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={index}

                                style={{ whiteSpace: "pre-wrap" }}
                                className='base-color1 text-xl font-bold '>

                                {char}
                            </motion.p>
                        )
                    }
                </div>


                <motion.p
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='text-justify text-sm'>
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, tortor et consectetur vulputate, sapien enim gravida orci, sed facilisis nunc nunc vel ante. Nulla facilisi. Ut ac elit in risus pharetra cursus. Aliquam erat volutpat. Vivamus mollis magna eu est convallis, nec ultricies nisi laoreet. Curabitur sed orci at odio sollicitudin cursus. Phasellus dapibus mi a est lacinia, ut malesuada tortor auctor. Cras a nulla odio. Sed id posuere ligula. Duis hendrerit ante nec dui tincidunt, sit amet vehicula libero sollicitudin. Mauris aliquet eros vitae leo tincidunt, id vestibulum felis placerat. Nulla ac eros eget risus vehicula cursus sit amet sit amet mauris. Proin pharetra hendrerit augue non condimentum. Sed cursus convallis metus et cursus. Nunc eget tempor velit, ac iaculis libero. Phasellus suscipit velit nisi, a viverra arcu euismod ut. Integer varius volutpat dui vel lacinia. Sed fringilla tristique justo, et mollis lorem convallis in."}
                </motion.p>

            </div>
        </div>
    )
}
