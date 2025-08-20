import { KEY_FEATURES_CONTENT } from "../constanst"
import { motion } from 'framer-motion';

const KeyFeatures = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
            }
        }
    }

    const FeaturesVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section id="features" className="py-20 bg-gradient-to-b from-neutral-900 to-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl tracking-tighter bg-gradient-to-r from-red-500 via-rose-400 to-pink-400 bg-clip-text text-transparent font-bold mb-6">
                        {KEY_FEATURES_CONTENT.sectionTitle}
                    </h2>
                    <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                        {KEY_FEATURES_CONTENT.sectionDescription}
                    </p>
                </div>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {KEY_FEATURES_CONTENT.features.map((feature) => (
                        <motion.div 
                            key={feature.id} 
                            className="group bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 text-center hover:bg-neutral-800/80 hover:border-rose-500/50 transition-all duration-300 hover:scale-105"
                            variants={FeaturesVariant}
                            whileHover={{ y: -5 }}>
                            <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto bg-gradient-to-r from-red-400 to-rose-400 rounded-full text-white group-hover:from-red-500 group-hover:to-pink-400 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-rose-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default KeyFeatures;
