"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function GalleryLightbox({ images, initialIndex, isOpen, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        navigatePrev()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, currentIndex])

  // Reset current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Prevent body scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  const navigateNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const navigatePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 text-white z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        onClick={navigatePrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        className="absolute right-4 text-white z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        onClick={navigateNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Image container */}
      <div className="relative max-w-[90vw] max-h-[90vh] select-none">
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          width={1200}
          height={800}
          className="object-contain max-h-[80vh]"
          priority
        />

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
            <p className="text-center">{currentImage.caption}</p>
            <p className="text-center text-xs text-white/70 mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

