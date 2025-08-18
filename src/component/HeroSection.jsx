import { BRAND_LOGOS, HERO_CONTENT } from "../constanst";
import HeroSec from '../assets/HeroSec.png';
import {motion} from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {staggerChil:0.2} },
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

const HeroSection = () => {
    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='pt-40 lg:pt-26'>
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                <motion.div 
                variants={fadeInUp}
                className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs">
                    {HERO_CONTENT.badgeText}
                </motion.div>
                <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-8xl my-5 font-semibold tracking-tighter leading-tight bg-gradient-to-b from-neutral-50 via-neutral-300
                to-neutral-700 bg-clip-text text-transparent text-center overflow-visible">
                    {HERO_CONTENT.mainHeading.split('\n').map((text, index) => (
                        <span key={index}>
                            {text}
                            <br />
                        </span>
                    ))}
                </motion.h1>
                <motion.p 
                variants={fadeInUp}
                className="mt-6 text-neutral-400 max-w-xl mx-auto">
                    {HERO_CONTENT.subHeading}
                </motion.p>
                <motion.div 
                variants={fadeInUp}
                className="mt-6 flex flex-row gap-4 justify-center">
                    <a href="#" className="inline-block bg-blue-600 hover:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium">
                        {HERO_CONTENT.callToAction.primary}
                    </a>
                    <a href="#" className="inline-block border border-gray-500 hover:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium">
                        {HERO_CONTENT.callToAction.secondary}
                    </a>
                </motion.div>
                <motion.div 
                variants={fadeIn}
                className="py-10">
                    <p className="text-gray-500 text-center mb-8">
                        {HERO_CONTENT.trustedByText}
                    </p>
                    <motion.div 
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-1">
                        {BRAND_LOGOS.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="h-20"/>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div 
                variants={fadeIn}className="-mt-40">
                    <img src={HeroSec} alt="Streaming Broh" className="w-full h-auto mb-4"/>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default HeroSection;