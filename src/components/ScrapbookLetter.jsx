import React from 'react'
import { motion } from 'framer-motion'
import './ScrapbookLetter.css'

const scrapbookPhotos = [
  '/images/2.jpeg',
  '/images/8.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/1.jpeg',
  '/images/14.jpeg'
]

const ScrapbookLetter = () => {
  return (
    <section className="scrapbook-letter section">
      <div className="container scrapbook-shell">
        <motion.div
          className="scrapbook-board"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="scrapbook-letter-card">
            <span className="scrapbook-pin"></span>
            <div className="scrapbook-stamp"></div>
            <p>Happy birthday, Ersa Sahabatku 🤍</p>
            <p>
              Kalau aku bersyukur punya kamu,
              itu karena kamu selalu jadi tempat aku cerita tentang apa pun.

              Dari cerita cinta yang berantakan,
              cinta ditolak, putus, sampai hal-hal yang bahkan nggak pernah kita duga.

            </p>
            <p>
              Walaupun sekarang kita beda negara,
              rasanya kamu tetap selalu dekat.

              Halaman kecil ini cuma cara sederhana buat bilang
              kalau aku benar-benar bersyukur punya sahabat seperti kamu.

              Semoga tahun ini penuh hal baik,
              dan membawa kamu semakin dekat dengan semua mimpimu.
            </p>
            <p className="scrapbook-signoff">With love, always. — Selly</p>
          </div>

          <div className="scrapbook-photo-strip">
            {scrapbookPhotos.map((photo, index) => (
              <motion.div
                key={photo}
                className="scrapbook-photo-frame"
                initial={{ opacity: 0, x: 18, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <img src={photo} alt={`Memory ${index + 1}`} className="scrapbook-photo-image" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScrapbookLetter