import { useState } from 'react';
import Areas from '../assets/areas.png';
import { RiCloseFill, RiMenu3Line } from '@remixicon/react';
import Button from './Button';
import Modal from './Modal';
import TrialForm from './TrialForm';
import DemoForm from './DemoForm';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const smoothScroll = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close mobile menu
        }
    };

    const handleTrialSubmit = (data) => {
        console.log('Trial signup:', data);
        alert('Free trial started! Check your email for next steps.');
    };

    const handleDemoSubmit = (data) => {
        console.log('Demo request:', data);
        alert('Demo request submitted! We\'ll contact you within 24 hours.');
    };
    return (
        <>
            <nav className='fixed top-4 left-0 right-0 z-50 m-2'>
                <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-2 py-1
                flex justify-between items-center rounded-xl border border-neutral-800'>
                    <img src={Areas} width={60} height={15}/>

                    {/* Navigation Links */}
                    <div className='hidden md:flex space-x-6'>
                        <button 
                            onClick={() => smoothScroll('works')} 
                            className='hover:text-blue-800 transition-colors'
                        >
                            How it works
                        </button>
                        <button 
                            onClick={() => smoothScroll('features')} 
                            className='hover:text-blue-800 transition-colors'
                        >
                            Features
                        </button>
                        <button 
                            onClick={() => smoothScroll('pricing')} 
                            className='hover:text-blue-800 transition-colors'
                        >
                            Pricing
                        </button>
                        <button 
                            onClick={() => smoothScroll('testimonials')} 
                            className='hover:text-blue-800 transition-colors'
                        >
                            Testimonials
                        </button>
                    </div>

                    {/* CTA Buttons */}
                    <div className='hidden md:flex space-x-3 items-center'>
                        <button className='text-neutral-400 hover:text-white transition-colors'>Login</button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsDemoModalOpen(true)}
                        >
                            Get a Demo
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setIsTrialModalOpen(true)}
                        >
                            Start Free Trial
                        </Button>
                    </div>

                    {/* Hamburger Menu Phone*/}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label={isOpen ? "Close menu" : "Open Menu"}>
                            {isOpen ? <RiCloseFill/> : < RiMenu3Line/>}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className='md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md'>
                    <div className='flex flex-col h-full'>
                        {/* Top section with logo and close button */}
                        <div className='flex justify-between items-center px-2 py-1 mt-4'>
                            <img src={Areas} width={60} height={15}/>
                            <button onClick={toggleMenu} className='text-white focus:outline-none'>
                                <RiCloseFill size={24}/>
                            </button>
                        </div>
                        
                        {/* Menu items container with border */}
                        <div className='mx-2 mt-8 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-6'>
                            <div className='flex flex-col space-y-6'>
                                <button 
                                    onClick={() => smoothScroll('works')} 
                                    className='text-neutral-200 text-lg text-left hover:indigo-purple-900  transition-colors'
                                >
                                    How it works
                                </button>
                                <button 
                                    onClick={() => smoothScroll('features')} 
                                    className='text-neutral-200 text-lg text-left hover:indigo-purple-900  transition-colors'
                                >
                                    Features
                                </button>
                                <button 
                                    onClick={() => smoothScroll('pricing')} 
                                    className='text-neutral-200 text-lg text-left hover:indigo-purple-900 transition-colors'
                                >
                                    Pricing
                                </button>
                                <button 
                                    onClick={() => smoothScroll('testimonials')} 
                                    className='text-neutral-200 text-lg text-left hover:indigo-purple-900  transition-colors'
                                >
                                    Testimonials
                                </button>
                                <button className='text-neutral-200 text-lg text-left hover:indigo-purple-900  transition-colors'>
                                    Login
                                </button>
                                
                                {/* Buttons section */}
                                <div className='pt-4 space-y-3'>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        onClick={() => {
                                            setIsDemoModalOpen(true);
                                            setIsOpen(false);
                                        }}
                                        className="w-full"
                                    >
                                        Get a Demo
                                    </Button>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={() => {
                                            setIsTrialModalOpen(true);
                                            setIsOpen(false);
                                        }}
                                        className="w-full"
                                    >
                                        Start Free Trial
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
        </>
    )
}

export default Navbar;