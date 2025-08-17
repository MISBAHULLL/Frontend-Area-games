import {useState} from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='fixed top-4 left-0 right-0 z-50 m-2'>
            <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3
            flex justify-between items-center rounded-xl border border-neutral-800'>
                <img src={logo} width={120} height={24}/>

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
                    <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:text-neutral-700 transition'>Get a demo</a>
                    <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:text-neutral-700 transition'>get a demo</a>
                </div>
            
            </div>
        </nav>
    )
}

export default Navbar;