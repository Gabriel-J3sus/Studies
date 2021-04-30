import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { //any name
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const nextVariants = {
  hidden: { 
    x: '-100vw' 
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', stiffness: 80
    }
  }
}

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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
      className="base container"
      variants={containerVariants}
      initial="hidden" //initial looking to the containerVariants object
      animate="visible"
      exit="exit"
      // transition="" not necessary because it is defined inside the animate property
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base} 
              onClick={() => addBase(base)}
              whileHover={{ 
                scale: 1.3,
                originX: 0, //not go to the left
                color: '#f8e112'
              }}  
              transition={{ type: 'spring', stiffness: 300 }}  
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          className="next"
          variants={nextVariants}

          //Not needed because the parent has the same property names inside the variant

          // initial="hidden" 
          // animate="visible"
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}  
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;