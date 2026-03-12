import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react'
import './PhotoGallery.css'

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Data foto - ganti dengan path foto yang sesuai
  const photos = [
    {
      id: 1,
      src: '/images/2.jpeg',
      caption: 'YUK FOTO STUDIO LG!',
      category: 'Friends'
    },
    {
      id: 2,
      src: '/images/15.jpeg',
      caption: 'Meet lagi',
      category: 'Friends'
    },
    {
      id: 3,
      src: '/images/5.jpeg',
      caption: 'GAS NGUMPUL LAGI',
      category: 'Friends'
    },
    {
      id: 4,
      src: '/images/10.jpeg',
      caption: 'Bikin keychain lg',
      category: 'Friends'
    },
    {
      id: 5,
      src: '/images/12.jpeg',
      caption: 'ahahaha apanich!?',
      category: 'Friends'
    },
    {
      id: 6,
      src: '/images/1.jpeg',
      caption: 'mau berangkat kmn nih',
      category: 'Friends'
    }
  ]

  const openLightbox = (photo, index) => {
    setSelectedImage(photo)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const showPrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(photos[newIndex])
  }

  const showNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(photos[newIndex])
  }

  return (
    <section className="photo-gallery section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Album Kenangan
        </motion.h2>

        <motion.p 
          className="gallery-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kumpulan momen berharga yang telah kita lalui
        </motion.p>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openLightbox(photo, index)}
            >
              <div className="gallery-image-wrapper">
                <img src={photo.src} alt={photo.caption} className="gallery-image" />
                <div className="gallery-overlay">
                  <span className="gallery-category">{photo.category}</span>
                  <p className="gallery-caption">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={32} />
            </button>

            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrevious(); }}>
              <ChevronLeft size={40} />
            </button>

            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNext(); }}>
              <ChevronRight size={40} />
            </button>

            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.caption} />
              <div className="lightbox-info">
                <span className="lightbox-category">{selectedImage.category}</span>
                <p className="lightbox-caption">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoGallery
