import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clapperboard, Play, Heart } from 'lucide-react'
import './PlaylistPage.css'

const memoryVideo = {
  title: 'Memori Kita',
  label: 'Satu video spesial untuk kamu',
  note: ' Besok janji ya bakal main, photobooth, sharing sharing, cerita ga jelas dan ketawa sampe ngik ngik lagi',
  src: '/videos/memory-video.mp4'
}

const PlaylistPage = () => {
  const [videoMissing, setVideoMissing] = useState(false)

  return (
    <section className="playlist-page section">
      <div className="container">
        <motion.div
          className="playlist-hero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="playlist-kicker">A little memories</p>
          <h2 className="section-title playlist-title">Video Memori Kita</h2>
        </motion.div>

        <div className="playlist-grid">
          <motion.article
            className="track-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -6 }}
          >
            <div className="track-topline">
              <span className="track-number">01</span>
              <Clapperboard size={18} className="track-icon" />
            </div>

            {videoMissing ? (
              <div className="memory-video-placeholder">
                <Play size={28} strokeWidth={2.3} />
                {/* <span>Taruh video di public/videos/memory-video.mp4</span> */}
              </div>
            ) : (
              <video
                className="memory-video-player"
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoMissing(true)}
              >
                <source src={memoryVideo.src} type="video/mp4" />
              </video>
            )}

            <h3 className="track-title">{memoryVideo.title}</h3>
            <p className="track-artist">{memoryVideo.label}</p>
            <p className="track-note">{memoryVideo.note}</p>
          </motion.article>
        </div>

        <motion.div
          className="playlist-footer-note"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <Clapperboard size={20} />
          {/* <p>Masukkan file video ke public/videos dengan nama memory-video.mp4, nanti akan langsung tampil di section ini.</p> */}
          <Heart size={18} />
        </motion.div>
      </div>
    </section>
  )
}

export default PlaylistPage