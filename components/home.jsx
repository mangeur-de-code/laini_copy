import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };


  return (
    <div
      className='w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between h-screen' ref={ref}>
      <motion.div
        className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit lg:h-fit justify-center gap-4 lg:gap-10 px-3 lg:px-8'
        variants={fadeInUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
      >
        <h1 className='font-bold text-4xl lg:text-6xl'>Welcome to Lainie.</h1>
        <p className="text-xl lg:text-2xl text-muted-foreground">Your 24/7
          mental health support coach / friend.</p>
        <Link href={'/sign-up'} className='w-full lg:w-1/2'>
          <button className='w-1/2 h-10 bg-[#ffe2f3] border border-[#f364b8] font-semibold text-[#f364b8] rounded-lg shadow-md hover:scale-105 transition'>Get Started</button>
        </Link>
      </motion.div>
      <motion.div
        className='w-full lg:w-1/2 flex flex-col justify-center h-fit lg:h-fit'
        variants={fadeInUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
        // ref={ref}
      >
        <img src="/anxiet.svg" className='mx-auto w-3/4 lg:ml-auto my-auto' alt="" />
      </motion.div>
    </div>
  )
}

export default Home
