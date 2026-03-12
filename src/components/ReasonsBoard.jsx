import React from 'react'
import { motion } from 'framer-motion'
import './ReasonsBoard.css'

const reasons = [
  'Karena kamu selalu punya cara bikin suasana jadi lebih hangat.',
  'Karena ngobrol sama kamu selalu terasa ringan.',
  'Karena kamu tetap lembut bahkan saat capek.',
  'Karena ngobrol sama kamu selalu jadi pendengar yang baik.',
  'Karena kehadiranmu bikin hari-hari terasa lebih baik.',
  'Karena kamu adalah sahabat yang selalu aku syukuri.'
]

const noteColors = ['peach', 'rose', 'cream', 'peach', 'cream', 'rose']

const ReasonsBoard = () => {
  return (
    <section className="reasons-board section">
      <div className="container">
        <motion.h2
          className="section-title reasons-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Little Things I Love About You
        </motion.h2>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason}
              className={`reason-note note-${noteColors[index]}`}
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -4 : 4, y: 20 }}
              whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -2 : 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6, rotate: 0 }}
            >
              <span className="note-pin"></span>
              <p>{reason}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonsBoard