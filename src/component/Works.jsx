import { HOW_IT_WORKS_CONTENT } from "../constanst";
import { motion } from 'framer-motion';


const Works = () => {
    const stepContainer = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }
        })
    }
    return (
        <section id="works" className="-mt-25">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 border-t border-neutral-800">
                    <h2 className="text-3xl lg:text-5xl mt-2 -tracking-tighter bg-gradient-to-t
                    from-neutral-50 via-neutral-300 to-neutral-300 bg-clip-text text-transparent">
                        {HOW_IT_WORKS_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                        {HOW_IT_WORKS_CONTENT.sectionDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                        <div key={index} className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-neutral-400 mb-4">{step.description}</p>
                            </div>
                            <div className="felx justify-center">
                                <img src={step.imageSrc}
                                    alt={step.imageAlt} className="w-100 h-70"></img>
                            </div>

                            {step.platforms &&(
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex space-x-2">
                        {step.platforms.map((platform, platformIndex) => (
                            <img className="h-60 w-60 border-2 border-gray-700 rounded-lg"
                            key={platformIndex}
                                src={platform}
                                alt={`Platform Streaming ${platformIndex + 1}`}
                            />
                        ))}
                    </div>                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
export default Works;