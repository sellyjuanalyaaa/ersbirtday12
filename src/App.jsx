import React, { useState } from 'react'
import { motion } from 'framer-motion'
import InvitationCard from './components/InvitationCard'
import Hero from './components/Hero'
import BirthdayInfo from './components/BirthdayInfo'
import FinalSurprise from './components/FinalSurprise'
import MemoryTimeline from './components/MemoryTimeline'
import PhotoGallery from './components/PhotoGallery'
import PlaylistPage from './components/PlaylistPage'
import ReasonsBoard from './components/ReasonsBoard'
import ScrapbookLetter from './components/ScrapbookLetter'
import Wishes from './components/Wishes'
import Footer from './components/Footer'
import BackgroundMusic from './components/BackgroundMusic'
import './App.css'

function App() {
  const [showInvitation, setShowInvitation] = useState(true)
  const [showMainContent, setShowMainContent] = useState(false)

  const handleInvitationComplete = () => {
    setShowInvitation(false)
    setTimeout(() => setShowMainContent(true), 500)
  }

  return (
    <div className="app">
      {showInvitation && (
        <div className="invitation-wrapper">
          <InvitationCard onComplete={handleInvitationComplete} />
        </div>
      )}
      
      {showMainContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <ScrapbookLetter />
          <PlaylistPage />
          <MemoryTimeline />
          <BirthdayInfo />
          <PhotoGallery />
          <ReasonsBoard />
          <Wishes />
          <FinalSurprise />
          <Footer />
        </motion.div>
      )}

      {/* Background Music Player - Always visible */}
      <BackgroundMusic />
    </div>
  )
}

export default App
