import React from 'react'
import { motion } from 'framer-motion'
import CountdownFuture from './CountdownFuture'
import './BirthdayInfo.css'

const BirthdayInfo = () => {
  return (
    <section className="birthday-info section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hari Istimewa
        </motion.h2>

        <CountdownFuture embedded />

        <motion.div 
          className="birthday-message"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="message-text">
            "Setiap tahun adalah babak baru dalam kisah hidup yang indah. 
            Semoga tahun ini membawa kebahagiaan, kesuksesan, dan kenangan 
            yang tak terlupakan untuk kamu, ersss."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BirthdayInfo
