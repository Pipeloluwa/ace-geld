"use client"
import { animateFadeUp, animateFromRight, animateGradualSpacing } from '@/app/animation/animationVariants'
import { interFont } from '@/app/fonts/fontsConfig'
import { Button } from '@material-tailwind/react'
import { motion, useInView } from 'motion/react'
import Link from 'next/link'
import { LegacyRef, useRef } from 'react';
import CountUp from 'react-countup'
import { BsHouses } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { LiaAwardSolid } from 'react-icons/lia'
import { PiUsersThree } from 'react-icons/pi'

export const InfoComponent = () => {
  const divHistoryRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divHistoryView = useInView(divHistoryRef);


  const divCounterRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divCounterView = useInView(divCounterRef);


  return (
    <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-16'>

      <div className='w-full flex flex-col gap-y-6'>

        <div className='w-full flex flex-col gap-y-3'>

          <div ref={divHistoryRef} className='flex'>
            {
              "Our History".split("").map((char, index) =>
                <motion.p
                  key={`Our History${index}`}
                  variants={animateGradualSpacing}
                  initial={"offscreen"}
                  animate={divHistoryView ? "onscreen" : ""}
                  custom={index}

                  style={{ whiteSpace: "pre-wrap" }}
                  className='base-color1 text-xl font-bold'>

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


        <div className='w-full flex flex-col gap-y-3'>
          <div className='flex '>
            {
              "Our Mision".split("").map((char, index) =>
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

        <div className='w-full flex flex-col gap-y-3'>
          <div className='flex '>
            {
              "Our Vision".split("").map((char, index) =>
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



      <div ref={divCounterRef} className='w-full h-full grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-x-16 gap-y-10'>

        {
          divCounterView
          &&
          <>
            <motion.div
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}

              className='flex gap-x-3 font-bold'>
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
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.3}

              className='flex gap-x-3 font-bold'>
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
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.6}

              className='flex gap-x-3 font-bold'>
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
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.9}

              className='flex gap-x-3 font-bold'>
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





      <div className='lg:w-[30%] md:w-[50%] w-full flex flex-col gap-y-2 '>
        <motion.p
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0}

          className='font-bold'>
          {`Let’s connect, your dream home is just a message away!`}
        </motion.p>

        <motion.div
          viewport={{ amount: 0.4 }}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0.2}
        >
          <Link href={"/pages/client-pages/highlights-page"}>
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
  )
}
