import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      {/* Background moving text */}
      <div className="hero-bg-text">
        <div className="hero-bg-text-content">
          <span>HAPPY BIRTHDAY</span>
          <span>HAPPY BIRTHDAY</span>
          <span>HAPPY BIRTHDAY</span>
          <span>HAPPY BIRTHDAY</span>
          <span>HAPPY BIRTHDAY</span>
          <span>HAPPY BIRTHDAY</span>
        </div>
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative elements */}
        <motion.div
          className="floating-icon top-left-spark"
          animate={{ y: [0, -14, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.1 }}
        >
          <img src="/images/spark.png" alt="sparkle" className="deco-image deco-image-spark" />
        </motion.div>

        <motion.div
          className="floating-icon middle-left"
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 0.3 }}
        >
          <img src="/images/love.png" alt="love" className="deco-image deco-image-love deco-image-large" />
        </motion.div>

        <motion.div
          className="floating-icon middle-right"
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, delay: 0.6 }}
        >
          <img src="/images/spark.png" alt="sparkle" className="deco-image deco-image-spark deco-image-large" />
        </motion.div>

        {/* Main photo frame */}
        <motion.div 
          className="photo-frame"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="photo-container">
            <img 
              src="/images/ersah.jpeg" 
              alt="Birthday Person" 
              className="main-photo"
            />
            <div className="photo-overlay"></div>
          </div>
        </motion.div>

        <motion.div 
          className="floating-icon top-right"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <img src="/images/love.png" alt="love" className="deco-image deco-image-love" />
        </motion.div>

        <motion.div
          className="floating-icon top-right-spark"
          animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: 0.2 }}
        >
          <img src="/images/spark.png" alt="sparkle" className="deco-image deco-image-spark" />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Ersa's 21st day
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Wishing you a day filled with love, joy, and beautiful memories
        </motion.p>

        {/* Decorative bottom icons */}
        <motion.div 
          className="floating-icon bottom-left"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img src="/images/love.png" alt="love" className="deco-image deco-image-love deco-image-love-bottom" />
        </motion.div>
        
        <motion.div 
          className="floating-icon bottom-right"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <img src="/images/spark.png" alt="sparkle" className="deco-image deco-image-spark" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
