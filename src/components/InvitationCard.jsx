import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './InvitationCard.css'

const InvitationCard = ({ onComplete }) => {
  const [stage, setStage] = useState(0) // 0: intro, 1: seal, 2: birthday card, 3: letter

  const handleClick = () => {
    if (stage < 3) {
      setStage((currentStage) => currentStage + 1)
    }
  }

  const handleReset = () => {
    setStage(0)
  }

  const handleContinue = () => {
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="invitation-container">
      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.div
            key="intro"
            className="invitation-stage intro-stage"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cover-card">
              <img
                src="/images/pita.png"
                alt="Pink ribbon decoration"
                className="cover-ribbon-image cover-ribbon-top-right"
              />
              <img
                src="/images/pita.png"
                alt="Pink ribbon decoration"
                className="cover-ribbon-image cover-ribbon-bottom-left"
              />

              <div className="cover-content">
                <p className="cover-kicker">For my favorite person</p>
                <h1 className="cover-title">Special for you</h1>
                <p className="cover-subtitle">Tap one of the hearts to open your little surprise.</p>

                <div className="cover-hearts" role="group" aria-label="Open invitation hearts">
                  {[1, 2, 3].map((heart) => (
                    <motion.button
                      key={heart}
                      type="button"
                      className="cover-heart-button"
                      onClick={handleClick}
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="cover-heart-outline">♡</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {stage === 1 && (
          <motion.div
            key="seal"
            className="invitation-stage seal-stage"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            onClick={handleClick}
          >
            <div className="envelope-wrapper">
              <div className="envelope">
                <div className="envelope-back"></div>
                <div className="envelope-top-flap"></div>
                <div className="envelope-pocket">
                  <div className="envelope-fold envelope-fold-left"></div>
                  <div className="envelope-fold envelope-fold-right"></div>
                  <div className="envelope-fold envelope-fold-bottom"></div>
                </div>
              </div>
              
              <div className="seal-wrapper">
                <div className="seal-image-container">
                  <img 
                    src="/images/seal.png" 
                    alt="Wax Seal" 
                    className="seal-image"
                  />
                </div>
                <motion.p 
                  className="seal-text"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  i love love &lt;3
                </motion.p>
                <p className="tap-hint">Tap to open</p>
              </div>
            </div>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            key="birthday-card"
            className="invitation-stage birthday-card-stage"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6 }}
            onClick={handleClick}
          >
            <motion.div 
              className="birthday-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-border">
                <div className="card-decoration top-left">🎀</div>
                <div className="card-decoration top-right">🌸</div>
                
                <div className="card-content">
                  <p className="card-date">12. 3. 2005</p>
                  <p className="card-date-text">TWELFTH OF MARCH, TWO THOUSAND FIVE</p>
                  
                  <h1 className="card-title">HBD, Ersa 🤍</h1>
                  <p className="card-subtitle">So grateful to have you as my best friend.</p>
                </div>
                
                <div className="card-decoration bottom-left">🦋</div>
                <div className="card-decoration bottom-right">🌸</div>
              </div>
              <p className="tap-hint">Tap to continue</p>
            </motion.div>
          </motion.div>
        )}

        {stage === 3 && (
          <motion.div
            key="letter"
            className="invitation-stage letter-stage"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="letter-card"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <div className="letter-border">
                <div className="letter-decoration left-decoration">
                  <div className="ribbon-line"></div>
                </div>
                
                <div className="letter-content">
                  <h2 className="letter-greeting">Dear Ersa,</h2>
                  
                  <div className="letter-body">
                    <p>Hari ini memang hari spesialmu, tapi jujur... punya kamu sebagai sahabat sudah bikin banyak hari dalam hidupku terasa spesial.</p>

                    <p>Kadang aku masih mikir, kok bisa ya aku seberuntung ini punya sahabat seperti kamu.</p>

                    <p>Terima kasih sudah selalu jadi pendengar terbaik buat semua ceritaku. Dari cerita yang receh, cerita cinta yang ribet, sampai hari-hari yang rasanya berat banget. Kamu selalu ada buat dengerin, nenangin, dan kadang juga bikin aku ketawa lagi.</p>

                    <p>Walaupun sekarang kita sering jauh dan kamu di Jepang, rasanya kamu tetap dekat. Kamu tetap jadi orang yang selalu tahu hampir semua cerita dalam hidupku.</p>

                    <p>Aku mungkin juga nggak selalu sempurna sebagai sahabat, tapi satu hal yang pasti: aku akan selalu ada buat kamu, seperti kamu selalu ada buat aku.</p>

                    <p>Di ulang tahunmu ini, aku cuma berharap kamu benar-benar bahagia. Semoga semua usaha dan perjuanganmu di sana berjalan lancar, semoga kamu selalu sehat, dan semoga semua mimpi yang sedang kamu kejar bisa tercapai.</p>

                    <p>Terima kasih sudah jadi sahabatku selama ini.</p>

                    <p>Semoga kita terus bertumbuh, pelan-pelan saja, tapi tetap bareng seperti sekarang.
                    <br />created by chat GPT HAHAHA
                    </p>

                    <p className="letter-closing-text">Happy birthday, Ersa 🤍</p>
                  </div>
                  
                  <div className="letter-signature">
                    <p className="signature-love">Love,</p>
                    <p className="signature-name">sellyyyyy</p>
                    <div className="signature-bow">🎀</div>
                  </div>
                </div>
                
                <div className="letter-decoration right-decoration">
                  <div className="ribbon-line"></div>
                </div>
              </div>
              
              <motion.button 
                className="reset-button"
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Start Over
              </motion.button>
              
              <motion.button 
                className="continue-button"
                onClick={handleContinue}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Continue to Celebration →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InvitationCard
