import React from 'react'
import { motion } from 'framer-motion'
import './CountdownFuture.css'

const futureWishes = [
  'Semoga semua hari beratmu diganti dengan hari-hari yang lebih lembut.',
  'Semoga semua target kecilmu satu per satu tercapai tanpa kehilangan versi terbaik dirimu.',
  'Semoga kamu selalu punya alasan untuk tersenyum, bahkan di hari yang melelahkan.',
  'Semoga tahun depan kamu melihat ke belakang dan bangga sama sejauh apa kamu sudah bertahan.'
]

const startDate = new Date('2005-03-12T00:00:00')
const milestoneDate = new Date('2026-03-12T00:00:00')

const getJourneyStats = () => {
  const diff = milestoneDate.getTime() - startDate.getTime()
  const totalDays = Math.round(diff / (1000 * 60 * 60 * 24))

  return [
    { value: '21', label: 'Years' },
    { value: '252', label: 'Months' },
    { value: totalDays.toLocaleString('en-US'), label: 'Days' }
  ]
}

const journeyStats = getJourneyStats()

const CountdownFuture = ({ embedded = false }) => {
  const Wrapper = embedded ? 'div' : 'section'
  const wrapperClassName = embedded
    ? 'countdown-future countdown-future-embedded'
    : 'countdown-future section'

  return (
    <Wrapper className={wrapperClassName}>
      <div className={embedded ? 'countdown-layout' : 'container countdown-layout'}>
        <motion.div
          className="countdown-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="countdown-kicker">A 21-Year Journey</p>
          <h2 className="section-title countdown-title">12 March 2005 to 12 March 2026</h2>

          <div className="countdown-timeline">
            <div className="countdown-timeline-point">
              <span className="countdown-timeline-label">Born</span>
              <strong>12 Mar 2005</strong>
            </div>
            <div className="countdown-timeline-line">
              <span></span>
            </div>
            <div className="countdown-timeline-point countdown-timeline-point-end">
              <span className="countdown-timeline-label">21st Day</span>
              <strong>12 Mar 2026</strong>
            </div>
          </div>

          <p className="countdown-description">
            Dari hari pertama sampai ulang tahun ke-21, ini perjalanan panjang yang isinya
            tumbuh, bertahan, belajar, dan menjadi versi diri yang sekarang.
          </p>

          <div className="countdown-grid">
            {journeyStats.map((item) => (
              <div key={item.label} className="countdown-box">
                <span>{item.value}</span>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="future-wishes-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <h3 className="future-wishes-title">Future Wishes</h3>
          <div className="future-wishes-list">
            {futureWishes.map((wish, index) => (
              <motion.article
                key={wish}
                className="future-wish-card"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="future-wish-index">0{index + 1}</span>
                <p>{wish}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default CountdownFuture