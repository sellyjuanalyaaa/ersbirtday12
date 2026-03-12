import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Gift } from 'lucide-react'
import './Wishes.css'

const Wishes = () => {
  const wishes = [
    {
      id: 1,
      icon: Heart,
      title: 'Kesehatan & Kebahagiaan',
      text: 'Semoga selalu diberikan kesehatan yang prima dan kebahagiaan yang berlimpah dalam setiap langkah hidupmu.'
    },
    {
      id: 2,
      icon: Star,
      title: 'Kesuksesan & Pencapaian',
      text: 'Semoga segala cita-cita dan impianmu tercapai. Semoga tahun ini membawa kesuksesan di setiap bidang kehidupanmu.'
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'Keberkahan & Kedamaian',
      text: 'Semoga hidupmu selalu diberkahi, dipenuhi kedamaian, dan cahaya kebaikan menerangi setiap hari-harimu.'
    },
    {
      id: 4,
      icon: Gift,
      title: 'Kebahagiaan Keluarga',
      text: 'Semoga hubunganmu dengan keluarga dan orang-orang tersayang semakin erat dan penuh kasih sayang.'
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Perjalanan & Impian',
      text: 'Semoga perjalananmu di Jepang selalu dipenuhi pengalaman baik, pelajaran berharga, dan langkah yang semakin dekat dengan cita-citamu menjadi perawat yang hebat.'
    },
    {
      id: 6,
      icon: Heart,
      title: 'Persahabatan Kita',
      text: 'Semoga walaupun kita sekarang sering berjauhan, persahabatan kita tetap hangat seperti dulu. Semoga nanti saat kamu pulang, kita bisa ngumpul, cerita panjang, dan ketawa bareng lagi.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="wishes section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Doa & Harapan
        </motion.h2>

        <motion.p 
          className="wishes-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Untukmu di hari yang spesial ini, semoga semua doa dan harapan terbaik menyertaimu
        </motion.p>

        <motion.div 
          className="wishes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {wishes.map((wish) => {
            const IconComponent = wish.icon
            return (
              <motion.div 
                key={wish.id}
                className="wish-card"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="wish-icon-wrapper">
                  <IconComponent size={40} className="wish-icon" />
                </div>
                <h3 className="wish-title">{wish.title}</h3>
                <p className="wish-text">{wish.text}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          className="final-message"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="final-message-content">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="message-emoji"
            >
              🎂
            </motion.div>
            <h3 className="final-title">Happy Birthday, ERSAHHHH! 🎉</h3>
            <p className="final-text">
              Semoga Allah selalu menjaga kamu di mana pun kamu berada.
              Semoga langkahmu dimudahkan dalam menyelesaikan kuliah, skripsi, dan cita-citamu menjadi perawat yang hebat.
              Semoga kamu selalu sehat, kuat, dan bahagia.

              Dan semoga nanti, ketika kamu pulang ke Indonesia,
              kita bisa ngumpul lagi seperti dulu
              duduk bareng, cerita panjang, dan ketawa sampai lupa waktu.

              🤍

              — Sellyyyy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Wishes
