import { FOOTER_CONTENT } from "../constanst";
import { motion } from "framer-motion";
import Newsletter from './Newsletter';
import SocialShare from './SocialShare';
import { RiGithubLine, RiMailLine, RiWhatsappLine, RiLinkedinLine, RiInstagramLine } from '@remixicon/react';

const Footer = () => {
    const socialIcons = {
        'Github': RiGithubLine,
        'Gmail': RiMailLine,
        'Whatsapp': RiWhatsappLine,
        'LinkedIn': RiLinkedinLine,
        'Instagram': RiInstagramLine
    };

    return (
        <footer className="mt-20 bg-gradient-to-t from-neutral-950 to-neutral-900">
            <div className="max-w-7xl mx-auto px-4">
                {/* Newsletter Section */}
                <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <Newsletter />
                    <div className="lg:pl-8">
                        <SocialShare className="" />
                    </div>
                </div>
                
                {/* Main Footer Content */}
                <div className="border-t border-neutral-800 pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {FOOTER_CONTENT.sections.map((section, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, i) => {
                                        const IconComponent = socialIcons[link.text];
                                        return (
                                            <li key={i}>
                                                <a 
                                                    href={link.url} 
                                                    className="flex items-center text-neutral-400 hover:text-red-400 transition-colors duration-200 text-sm"
                                                >
                                                    {IconComponent && (
                                                        <IconComponent className="w-4 h-4 mr-2" />
                                                    )}
                                                    {link.text}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        ))}
                </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-neutral-800 py-8 mt-16">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                                Area Games
                            </h4>
                            <p className="text-neutral-400 text-sm mt-1">
                                The Ultimate Gaming Stream Toolkit
                            </p>
                        </div>
                        
                        <div className="text-center md:text-right">
                            <p className="text-neutral-500 text-sm">
                                © 2024 Area Games. All rights reserved.
                            </p>
                            <p className="text-neutral-600 text-xs mt-1">
                                Built with for streamers worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;