import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'
import './BackgroundMusic.css'

const track = {
  title: 'thanK you aIMee',
  artist: 'Taylor Swift',
  src: '/audio/TaylorSwift-thanKyouaIMee.mp3'
}

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef(null)

  // Auto-play immediately on mount and loop
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.5 // Set volume to 50% (lebih keras)
      audio.loop = true // Loop the single track
      
      // Try auto-play immediately
      audio.play()
        .then(() => {
          setIsPlaying(true)
          console.log('Audio playing successfully')
        })
        .catch((err) => {
          console.log('Auto-play prevented by browser:', err)
          console.log('Please click the PLAY button to start music')
          // Auto-play blocked, user needs to click play button
        })
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Play error:', err))
      }
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (audio) {
      audio.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={`background-music ${isMinimized ? 'minimized' : ''}`}>
      <audio
        ref={audioRef}
        src={track.src}
        preload="auto"
      />
      
      <div className="music-player">
        <button 
          className="minimize-btn"
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? "Expand" : "Minimize"}
        >
          {isMinimized ? '▲' : '▼'}
        </button>

        {!isMinimized && (
          <>
            <div className="track-info">
              <div className="track-title">{track.title}</div>
              <div className="track-artist">{track.artist}</div>
            </div>

            <div className="music-controls">
              <button 
                className="control-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              
              <button 
                className="control-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </>
        )}

        {isMinimized && (
          <div className="minimized-indicator">
            {isPlaying ? '♪' : '❚❚'}
          </div>
        )}
      </div>
    </div>
  )
}

export default BackgroundMusic
