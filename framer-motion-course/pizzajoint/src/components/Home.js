import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Loader from './Loader';

//motion: creates an animated compomonent

const buttonVariants = {
  hover: {
    // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], //keyframes
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      // yoyo: 10, //repeating 10 times keyframes
      yoyo: Infinity,
      duration: 0.3,
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  return (
    <motion.div 
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" //executes when you quit or change the page
    >
      <h2> 
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>

      <Loader />
    </motion.div>
  )
}

export default Home;