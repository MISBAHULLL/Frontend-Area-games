import { STREAMER_TESTIMONIALS } from "../constanst";
import {motion} from 'framer-motion';

const StreamTesti = () => {
    const StreamTestiVariants = {     
        hidden: {opacity: 0, y: 50},
        visible: (i) => ( {
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5,
                ease: "easeOut",
            }
        })
    }
    return (
        <section id="testimonialStream">
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <motion.div className="text-center mb-12 border-t border-neutral-800"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity:1, y:0}}
                    transition={{duration: 0.5, ease: "easeOut"}}>
                        <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300
                        to-neutral-600 bg-clip-text text-transparent">
                            {STREAMER_TESTIMONIALS.sectionTitle}
                        </h2>
                        <p className="mt-20">
                            {STREAMER_TESTIMONIALS.sectionDescription}
                        </p>
                    </motion.div>

                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {STREAMER_TESTIMONIALS.reviews.map((review, index) => (
                            <motion.div key={index}
                            custom={index}
                            variants={StreamTestiVariants}
                            className="mt-10 flex fle-col items-center justify-center overflow-hidden rounded-2xl
                            bg-neutral-900/50 border border-neutral-900 p-13">
                                <p className="mb-4 text-neutral-200 text-justify tracking-wide">
                                    {review.review}
                                </p>
                                <div className="flex items-center mt-4">
                                    <img 
                                        src={review.image} 
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
            </div>
        </section>
    )
}
export default StreamTesti;
