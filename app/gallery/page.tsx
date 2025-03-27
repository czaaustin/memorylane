"use client"

import { useState } from "react"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import GalleryLightbox from "@/components/gallery-lightbox"

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")

  // Sample gallery data - you would replace this with your actual photos
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+1",
      alt: "Us at the beach",
      caption: "Summer vacation at the beach",
      category: "vacations",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+2",
      alt: "Birthday celebration",
      caption: "Your surprise birthday party",
      category: "birthdays",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+3",
      alt: "Hiking adventure",
      caption: "That time we got lost hiking",
      category: "adventures",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+4",
      alt: "Dinner date",
      caption: "Fancy dinner on our anniversary",
      category: "dates",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+5",
      alt: "Movie night",
      caption: "Cozy movie night at home",
      category: "everyday",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+6",
      alt: "Concert together",
      caption: "That amazing concert we went to",
      category: "adventures",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+7",
      alt: "Coffee date",
      caption: "Sunday morning coffee date",
      category: "dates",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+8",
      alt: "Holiday celebration",
      caption: "Christmas with the family",
      category: "holidays",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+9",
      alt: "Cooking together",
      caption: "That time we tried to make sushi",
      category: "everyday",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+10",
      alt: "Road trip",
      caption: "Road trip to the mountains",
      category: "vacations",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+11",
      alt: "Valentine's Day",
      caption: "Valentine's Day dinner",
      category: "holidays",
    },
    {
      src: "/placeholder.svg?height=600&width=600&text=Photo+12",
      alt: "Picnic in the park",
      caption: "Spring picnic in the park",
      category: "dates",
    },
  ]

  const filters = [
    { id: "all", label: "All Photos" },
    { id: "vacations", label: "Vacations" },
    { id: "birthdays", label: "Birthdays" },
    { id: "adventures", label: "Adventures" },
    { id: "dates", label: "Dates" },
    { id: "everyday", label: "Everyday" },
    { id: "holidays", label: "Holidays" },
  ]

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Gallery"
        subtitle="Capturing our favorite moments together"
        backgroundImage="/placeholder.svg?height=800&width=1600&text=Our+Gallery"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Photo Memories"
            subtitle="A collection of our favorite moments captured in time"
            badge="Gallery"
            className="mb-12"
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id ? "bg-accent text-white" : "bg-muted hover:bg-muted/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid max-w-7xl mx-auto">
            {filteredImages.map((image, index) => (
              <div key={index} className="gallery-item cursor-pointer" onClick={() => openLightbox(index)}>
                <div className="relative aspect-square">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-end opacity-0 hover:opacity-100">
                    <div className="p-4 text-white w-full">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          <GalleryLightbox
            images={filteredImages}
            initialIndex={selectedImageIndex}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />

          {/* Slideshow Button */}
          <div className="mt-12 text-center">
            <button
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
              onClick={() => {
                // Start slideshow from the first image
                setSelectedImageIndex(0)
                setLightboxOpen(true)
              }}
            >
              Play as Slideshow
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

