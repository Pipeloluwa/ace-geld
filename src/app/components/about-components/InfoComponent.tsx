"use client";
import {
  animateFadeDown,
  animateFadeUp,
  animateFromRight,
  animateGradualSpacing,
} from "@/app/animation/animationVariants";
import { interFont } from "@/app/fonts/fontsConfig";
import { Button } from "@material-tailwind/react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { LegacyRef, useRef } from "react";
import CountUp from "react-countup";
import { BsHouses } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";

export const InfoComponent = () => {
  const divHistoryRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divHistoryView = useInView(divHistoryRef);

  const divIntroRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divIntroView = useInView(divHistoryRef);

  const divCounterRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divCounterView = useInView(divCounterRef);

  return (
    <div className="2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-16">
      <div className="w-full flex flex-col gap-y-6">
        <div ref={divIntroRef}>
          <motion.p
            variants={animateFadeDown}
            initial={"offscreen"}
            animate={divIntroView ? "onscreen" : ""}
            custom={0}
            className="text-justify text-sm"
          >
            {
              "Welcome to Acegeld where innovation meets craftsmanship. We are a leading construction, design, and interior decoration company dedicated to transforming spaces into functional and aesthetic masterpieces. With a passion for excellence and an eye for detail, we bring your vision to life with precision and creativity."
            }
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <div ref={divHistoryRef} className="flex">
            {"Who We Are".split("").map((char, index) => (
              <motion.p
                key={`Our History${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                animate={divHistoryView ? "onscreen" : ""}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold"
              >
                {char}
              </motion.p>
            ))}
          </div>

          <motion.p
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="text-justify text-sm"
          >
            {`At Acegeld, we are a team of skilled architects, designers, and craftsmen committed to delivering top-quality construction and interior solutions. With years of industry expertise, we combine modern techniques with timeless design principles to create spaces that reflect your style and meet your needs.`}
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <div className="flex ">
            {"Our Mision".split("").map((char, index) => (
              <motion.p
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold "
              >
                {char}
              </motion.p>
            ))}
          </div>

          <motion.p
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="text-justify text-sm"
          >
            {
              "Our mission is to redefine living and working spaces through thoughtful design and superior craftsmanship. We aim to exceed expectations by providing innovative solutions that balance functionality, elegance, and sustainability."
            }
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <div className="flex ">
            {"What We Do".split("").map((char, index) => (
              <motion.p
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold "
              >
                {char}
              </motion.p>
            ))}
          </div>

          <ul className="flex flex-col gap-y-3">
            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Construction Services: "}</span>
              {
                "From residential to commercial projects, we offer comprehensive construction solutions tailored to your requirements, ensuring durability and perfection."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Interior Design:  "}</span>
              {
                "We craft interiors that embody your personality and enhance functionality, blending aesthetics with practicality."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Decoration & Styling:  "}</span>
              {
                "From residential to commercial projects, we offer comprehensive construction solutions tailored to your requirements, ensuring durability and perfection."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Construction Services: "}</span>
              {
                "From residential to commercial projects, we offer comprehensive construction solutions tailored to your requirements, ensuring durability and perfection."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Decoration & Styling:  "}</span>
              {
                "From residential to commercial projects, we offer comprehensive construction solutions tailored to your requirements, ensuring durability and perfection."
              }
            </motion.li>
          </ul>
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <div className="flex ">
            {"Why Choose Us".split("").map((char, index) => (
              <motion.p
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold "
              >
                {char}
              </motion.p>
            ))}
          </div>

          <ul className="flex flex-col gap-y-3">
            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Customized Solutions: "}</span>
              {
                "Every project is uniquely designed to align with your vision and lifestyle."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Quality Assurance: "}</span>
              {
                "We use premium materials and advanced techniques to ensure lasting value."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Timely Delivery: "}</span>
              {
                "Your time is valuable, and we ensure your projects are completed on schedule."
              }
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Sustainability Focus: "}</span>
              {"We prioritize eco-friendly practices to create greener spaces."}
            </motion.li>

            <motion.li
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Decoration & Styling:  "}</span>
              {
                "From residential to commercial projects, we offer comprehensive construction solutions tailored to your requirements, ensuring durability and perfection."
              }
            </motion.li>
          </ul>
        </div>
      </div>

      <div
        ref={divCounterRef}
        className="w-full h-full grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-x-16 gap-y-10"
      >
        {divCounterView && (
          <>
            <motion.div
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="flex gap-x-3 font-bold"
            >
              <BsHouses className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={30}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Houses"}</h3>
              </div>
            </motion.div>

            <motion.div
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.3}
              className="flex gap-x-3 font-bold"
            >
              <GrProjects className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={5}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Projects"}</h3>
              </div>
            </motion.div>

            <motion.div
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.6}
              className="flex gap-x-3 font-bold"
            >
              <LiaAwardSolid className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={10}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Awards"}</h3>
              </div>
            </motion.div>

            <motion.div
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.9}
              className="flex gap-x-3 font-bold"
            >
              <PiUsersThree className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={105}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Clients"}</h3>
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="lg:w-[30%] md:w-[50%] w-full flex flex-col gap-y-2 ">
        <motion.p
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0}
          className="font-bold"
        >
          {`At Acegeld your dream space is our canvas. Let us build, design, and style a space you'll love. Contact us today to get started!`}
        </motion.p>

        <motion.div
          viewport={{ amount: 0.4 }}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0.2}
        >
          <Link href={"/pages/client-pages/highlights-page"}>
            <Button
              onClick={() => {}}
              className={` tracking-widest text-[15px] base-background2 w-full h-[40px] sm:hover:bg-[#f0f0f0]
                                text-gray-900 sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
              placeholder=""
              onPointerEnterCapture
              onPointerLeaveCapture
            >
              <span className={`${interFont.className} capitalize text-sm`}>
                {"Speak To Us"}
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
