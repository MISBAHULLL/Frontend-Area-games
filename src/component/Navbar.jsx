import {useState} from 'react';
import Areas from '../assets/areas.png';
import { RiCloseFill, RiMenu3Line } from '@remixicon/react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className='fixed top-4 left-0 right-0 z-50 m-2'>
                <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-2 py-1
                flex justify-between items-center rounded-xl border border-neutral-800'>
                    <img src={Areas} width={60} height={15}/>

                    {/* Left Button */}
                    <div className='hidden md:flex space-x-6'>
                        <a href='#works' className='hover:text-neutral-200' >
                            How it works
                        </a>
                        <a href='#pricing' className='hover:text-neutral-200' >
                            Pricing
                        </a>
                        <a href='#testimonials' className='hover:text-neutral-200' >
                            Testimonials
                        </a>
                    </div>

                    {/* Right Button */}
                    <div className='hidden md:flex space-x-4 items-center'>
                        <a href="#" className='hover:text-neutral-200'>Login</a>
                        <a href="#" className='border border-neutral-700 text-white py-2 px-2 rounded-lg hover:text-neutral-700 transition'>Get a demo</a>
                        <a href="#" className='border bg-blue-600  text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition'>Start Free Trial</a>
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
                        <div className='mx-2 mt-8 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-4'>
                            <div className='flex flex-col space-y-6'>
                                <a href="#" className='text-neutral-200 text-lg'>Product</a>
                                <a href="#" className='text-neutral-200 text-lg'>Pricing</a>
                                <a href="#" className='text-neutral-200 text-lg'>Resources</a>
                                <a href="#" className='text-neutral-200 text-lg'>Login</a>
                                
                                {/* Buttons section */}
                                <div className='pt-2 space-y-4'>
                                    <a href="#" className='block text-center border border-neutral-700 text-white py-3 px-4 rounded-lg hover:bg-neutral-800 transition'>
                                        Get a Demo
                                    </a>
                                    <a href="#" className='block text-center bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-500 transition'>
                                        Start Free Trial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar;