import React from 'react'
import { motion } from 'framer-motion'
import './MemoryTimeline.css'

const timelineItems = [
  {
    date: 'The First Hello',
    title: 'Semua dimulai dari kenal doang tapi ga deket',
    text: 'Awalnya cuma kenal biasa di SMP kelas 7. Ngga pernah kepikiran kalau suatu hari nanti kita akan jadi sahabat sedekat ini.'
  },
  {
    date: 'Our Favorite Days',
    title: 'SMA & Pandemic Days',
    text: 'Kelas 10 yang penuh online class justru jadi awal kita makin dekat. Dari chat, cerita receh, sampai mulai saling tahu cerita hidup masing-masing.'
  },
  {
    date: 'Different Roads After Graduation',
    title: 'Our Four People Circle',
    text: 'Setelah lulus SMA, kita mulai berjalan ke arah masing-masing. Kadang rencana kumpul nggak selalu lengkap, tapi selalu ada aku, kamu, dan Anggie yang akhirnya tetap datang.'
  },
  {
    date: 'This Birthday',
    title: 'Merayakan kamu hari ini',
    text: 'Halaman ini dibuat buat ngingetin kalau kamu berharga, disayang, dan pantas dapat hal-hal baik. Sekarang kamu jauh di Jepang, mengejar mimpimu sebagai perawat. Walaupun jauh, aku selalu bangga melihat kamu terus bertumbuh.'
  }
]

const MemoryTimeline = () => {
  return (
    <section className="memory-timeline section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cerita Kecil Kita
        </motion.h2>

        <motion.p
          className="timeline-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Beberapa titik kecil yang mungkin kelihatannya sederhana, tapi justru jadi bagian paling hangat.
        </motion.p>

        <div className="timeline-track">
          {timelineItems.map((item, index) => (
            <motion.article
              key={item.title}
              className={`timeline-card ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="timeline-dot"></span>
              <p className="timeline-date">{item.date}</p>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-text">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemoryTimeline