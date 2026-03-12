import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FinalSurprise.css'

const surprises = [
  'SEPULANG DR JEPANG KITA MAIN, HADIAHNYA AKU KASIH PAS MAIN!!! YIPPIEEEEEEE',
]

const FinalSurprise = () => {
  const [opened, setOpened] = useState(false)

  return (
    <section className="final-surprise section">
      <div className="container final-surprise-shell">
        <motion.div
          className="final-surprise-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="final-surprise-kicker">One last thing</p>
          <h2 className="section-title final-surprise-title">Final Surprise</h2>
          <p className="final-surprise-text">
            Ada satu tombol terakhir di halaman ini. Kecil, tapi isinya cuma hal-hal baik buat kamu.
          </p>

          <motion.button
            type="button"
            className="surprise-button"
            onClick={() => setOpened((value) => !value)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {opened ? 'Hide Surprise' : 'Open Final Surprise'}
          </motion.button>

          <AnimatePresence>
            {opened && (
              <motion.div
                className="surprise-reveal"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              >
                <div className="surprise-stars">
                  <span>✦</span>
                  <span>♡</span>
                  <span>✦</span>
                </div>
                <div className="surprise-grid">
                  {surprises.map((item) => (
                    <article key={item} className="surprise-note">
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalSurprise