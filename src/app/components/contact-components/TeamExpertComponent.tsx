"use client";
import { animateBlurIn, animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'
import { teamExpertData } from '@/app/variables/sharedVariables'
import { motion } from 'motion/react'
import Link from 'next/link'


export const TeamExpertComponent = () => {



  return (
    <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-16'>

      <div className='w-full flex flex-col gap-y-3'>

        <div className='flex '>
          {
            "Contact Us".split("").map((char, index) =>
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

          className='lg:w-[40%] md:w-[70%] w-full text-justify text-sm'
        >

          {"Have questions or need assistance? Reach out to us anytime – we're here to help you every step of the way."}
        </motion.p>

      </div>



      <div className='h-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-8'>
        {
          teamExpertData.map((item, index) =>
            <div key={`teamExperData${index}`} className='flex items-center gap-x-5'>

              <motion.div
                variants={animateBlurIn}
                initial={"offscreen"}
                whileInView={"onscreen"}

                className='size-[130px] rounded-full overflow-hidden bg-gray-300 shadow'
              >

                <img alt='project picture' src={item.picture} className='flex w-full h-full object-cover' />

              </motion.div>


              <div className='flex flex-col'>

                <div className='flex '>
                  {
                    item.name.split("").map((char, index) =>
                      <motion.p
                        key={`Welcome to${index}`}
                        variants={animateGradualSpacing}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={index}

                        style={{ whiteSpace: "pre-wrap" }}
                        className='text-xl font-bold '>

                        {char}
                      </motion.p>
                    )
                  }
                </div>

                <motion.h4
                  variants={animateFadeUp}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  custom={0}

                  className='italic'
                >

                  {item.position}
                </motion.h4>


                <motion.div
                  variants={animateFadeUp}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  custom={0}
                >
                  <Link href={"mailto:"} className='underline base-color1'>
                    {item.email}
                  </Link>
                </motion.div>

              </div>

            </div>
          )
        }


      </div>


    </div>
  )
}
