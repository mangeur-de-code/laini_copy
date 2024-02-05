import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import React from 'react'

const ContentLaine = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-20% 0px',
    });

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.5 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div className='w-full py-20 space-y-10' >
            <motion.div className='mx-auto'>
                <h3 className='font-bold text-2xl lg:text-3xl mx-auto text-center'>Ready To transform your <br /> mental state for the better?</h3>
                <p className='text-center mx-auto text-muted-foreground mt-3'>Start using Lainie and embark on your journey to mental bliss.</p>

            </motion.div>
            <motion.div className='w-full py-4 lg:py-6 flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between gap-8 lg:gap-0 h-fit' ref={ref}
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{type:"spring", stiffness: 100, damping: 10, duration: 0.2 }}
            >
                <div id='about' className='w-full lg:w-1/2 flex flex-col justify-center h-fit'>
                    <img src="/bot.svg" className='w-2/3 mx-auto lg:ml-auto my-auto' alt="" />
                </div>
                <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit justify-center gap-3 lg:gap-10 px-3 lg:px-8'>
                    <h1 className='font-bold text-2xl lg:text-3xl mx-auto lg:mx-0'>Personalized Conversion</h1>
                    <p class="text-lg lg:text-xl text-muted-foreground">Lainie is trained so that she can tailor her support to your exact needs. As your interactions evolve so does her behavior.
                    </p>
                </div>

            </motion.div>
            <motion.div className='w-full py-4 lg:py-6 flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between gap-8 lg:gap-0 h-fit'
              variants={fadeInUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.2 }}
            >

                <div className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit justify-center gap-3 lg:gap-10 px-3 lg:px-8'>
                    <h1 className='font-bold text-2xl lg:text-3xl mx-auto lg:mx-0'>Unwavering Support</h1>
                    <p class="text-lg lg:text-xl text-muted-foreground">Lainie is available 24/7, providing continuous support whenever you need it. Whether you're facing a tough day or celebrating a small victory, she’s here to share the journey with you.
                    </p>
                </div>
                <div id='about' className='w-full lg:w-1/2 flex flex-col justify-center h-fit'>
                    <img src="/support.svg" className='w-2/3 mx-auto lg:ml-auto my-auto' alt="" />
                </div>

            </motion.div>




        </div>
    )
}

export default ContentLaine