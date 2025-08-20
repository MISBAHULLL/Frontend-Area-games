import { useState } from 'react';
import { BRAND_LOGOS, HERO_CONTENT } from "../constanst";
import HeroSec from '../assets/HeroSec.png';
import { motion } from 'framer-motion';
import Button from './Button';
import Modal from './Modal';
import TrialForm from './TrialForm';
import DemoForm from './DemoForm';

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
    const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const handleTrialSubmit = (data) => {
        console.log('Trial signup:', data);
        // Here you would typically send data to your backend
        alert('Free trial started! Check your email for next steps.');
    };

    const handleDemoSubmit = (data) => {
        console.log('Demo request:', data);
        // Here you would typically send data to your backend
        alert('Demo request submitted! We\'ll contact you within 24 hours.');
    };

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
                className="text-5xl lg:text-8xl my-5 font-semibold tracking-tighter leading-tight bg-gradient-to-b from-slate-200 via-indigo-800
                to-purple-700 bg-clip-text text-transparent text-center overflow-visible">
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
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => setIsTrialModalOpen(true)}
                        className="min-w-[200px]"
                        trackingName="start_trial_hero"
                        trackingLocation="hero_section"
                    >
                        {HERO_CONTENT.callToAction.primary}
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => setIsDemoModalOpen(true)}
                        className="min-w-[200px]"
                        trackingName="request_demo_hero"
                        trackingLocation="hero_section"
                    >
                        {HERO_CONTENT.callToAction.secondary}
                    </Button>
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
                    variants={fadeIn}
                    className="mt-16 lg:-mt-20">
                    <img src={HeroSec} alt="Streaming Dashboard" className="w-full h-auto mb-4 rounded-xl shadow-2xl"/>
                </motion.div>
            </div>

            {/* Modals */}
            <Modal
                isOpen={isTrialModalOpen}
                onClose={() => setIsTrialModalOpen(false)}
                title="Start Your Free Trial"
            >
                <TrialForm
                    onClose={() => setIsTrialModalOpen(false)}
                    onSubmit={handleTrialSubmit}
                />
            </Modal>

            <Modal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
                title="Request a Demo"
            >
                <DemoForm
                    onClose={() => setIsDemoModalOpen(false)}
                    onSubmit={handleDemoSubmit}
                />
            </Modal>
        </motion.section>
    )
}

export default HeroSection;