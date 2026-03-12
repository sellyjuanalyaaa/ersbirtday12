import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="footer-heart"
          >
            <Heart size={32} fill="currentColor" />
          </motion.div>
          <p className="footer-text">
            Made with love for Ersa's special day
          </p>
          <p className="footer-year">
            {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
