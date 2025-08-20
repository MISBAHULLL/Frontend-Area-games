import { PLANS_CONTENT } from "../constanst";
import { easeOut, motion } from "framer-motion";
import Button from './Button';
import { RiCheckLine } from '@remixicon/react';

const Pricing = () => {
  const PlanVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.5, ease: easeOut },
    }),
  };

  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t 
                    from-slate-500 via-indigo-900 to-purple-800 bg-clip-text text-transparent"
          >
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={PlanVariant}
              className={`relative p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-b from-rose-400/20 to-neutral-900 border-2 border-red-400/50 shadow-pink-400/20"
                  : "bg-neutral-900/50 border border-neutral-700 hover:border-neutral-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-400 to-rose-400 text-white text-xs py-2 px-4 rounded-full uppercase font-semibold shadow-lg">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white">
                    {plan.name}
                </h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                    {plan.description}
                </p>
                <div className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                    {plan.price}
                    <span className="text-sm font-normal text-neutral-400 ml-1">per month</span>
                </div>
                <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, i) =>(
                        <li key={i} className="flex items-center text-neutral-300">
                            <RiCheckLine className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Button
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={() => console.log(`Selected ${plan.name} plan`)}
                    trackingName={`select_plan_${plan.name.toLowerCase()}`}
                    trackingLocation="pricing_section"
                >
                    {PLANS_CONTENT.ctaText}
                </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing;
