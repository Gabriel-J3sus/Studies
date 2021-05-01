import React, { useEffect } from 'react';
import { motion } from 'framer-motion'

//AnimatePresence - animate elements to get out of the page / it can be used for page transitions

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
      mass: 0.4, //move velocity
      damping: 8, //oscilation
      when: "beforeChildren", //when this animation should happen inside the child elements
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal])

  return (
    <motion.div 
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" //executes when you quit or change the page
    >
     
     <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;