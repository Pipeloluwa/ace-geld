import { pacificoFont } from '@/app/fonts/fontsConfig';
import { motion } from "motion/react"
import Marquee from 'react-fast-marquee';
import { animateBlurIn } from '@/app/animation/animationVariants';

export const HousesSlideComponent = () => {
    const houseTypes= [
        "Acacia", "Oak","Oakville","Scarlet Oak","Maple","Maple Penthouse","Pine","Pine Penthouse","Château","Olive","Villa","The Nouveau Villa"
    ];


  return (
    <Marquee        
        className='h-full w-full lg:-my-16 -my-6'>
        {
            houseTypes.map((item, index) => {
                return (
                    <motion.p 
                        key={`inspirationalKey${index}`} 
                        variants={animateBlurIn}
                        initial={"offscreen"}
                        whileInView= {"onscreen"}
                        className={`${pacificoFont.className} min-w-[200px] w-full text-center text-lg text-gray-800 tracking-wider`}>
                        
                        {item}
                    </motion.p>
                )
            })
        }
    </Marquee>
  )
}
