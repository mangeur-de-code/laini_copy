import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '20px',
  });

  const containerVariants = {
    hidden: {
      scale: 0.3,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className='w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between h-screen'
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <motion.div
        className='flex flex-col text-center lg:text-left items-start w-full lg:w-1/2 h-fit lg:h-screen justify-center gap-4 lg:gap-10 px-3 lg:px-8'
      >
        <h1 className='font-bold text-4xl lg:text-6xl'>Welcome to Mental Health Chat Bot</h1>
        <p className="text-md lg:text-xl text-muted-foreground">Ask questions, share your thoughts and get support for mental health issues. We are here to listen.</p>
        <Link href={'/sign-up'} className='w-full lg:w-1/2'>
          <button className='w-1/2 h-10 bg-[#ffe2f3] border border-[#f364b8] font-semibold text-[#f364b8] rounded-lg shadow-md hover:scale-105 transition'>Get Started</button>
        </Link>
      </motion.div>
      <motion.div
        className='w-full lg:w-1/2 flex flex-col justify-center h-fit lg:h-screen'
      >
        <img src="/anxiet.svg" className='mx-auto w-3/4 lg:ml-auto my-auto' alt="" />
      </motion.div>
    </motion.div>
  )
}

export default Home
