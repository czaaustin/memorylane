"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import GalleryLightbox from "@/components/gallery-lightbox"
import { ArrowRight, Calendar, ImageIcon, Heart, Users } from "lucide-react"

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Sample gallery preview images
  const galleryPreviewImages = [
    {
      src: "/placeholder.svg?height=400&width=400&text=Photo+1",
      alt: "Gallery image 1",
      caption: "A beautiful memory together",
    },
    {
      src: "/placeholder.svg?height=400&width=400&text=Photo+2",
      alt: "Gallery image 2",
      caption: "Our weekend getaway",
    },
    {
      src: "/placeholder.svg?height=400&width=400&text=Photo+3",
      alt: "Gallery image 3",
      caption: "Birthday celebration",
    },
    {
      src: "/placeholder.svg?height=400&width=400&text=Photo+4",
      alt: "Gallery image 4",
      caption: "Coffee date downtown",
    },
    {
      src: "/placeholder.svg?height=400&width=400&text=Photo+5",
      alt: "Gallery image 5",
      caption: "Hiking adventure",
    },
    {
      src: "/placeholder.svg?height=400&width=400&text=Photo+6",
      alt: "Gallery image 6",
      caption: "Movie night at home",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Journey Together"
        subtitle="From the day we met to today, every moment with you is special."
        showButton={true}
        buttonText="Start the Journey"
        buttonLink="#timeline"
      />

      <section id="introduction" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 slide-up">
            <p className="text-lg md:text-xl text-muted-foreground">
              This is our story, a collection of our happiest, funniest, and most special moments. A gift for the one I
              love, to remember all the beautiful times we've shared together.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
              >
                Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview Section */}
      <section id="timeline" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Timeline"
            subtitle="A journey through our most special moments together"
            badge="Memory Lane"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            {/* Timeline Preview Items */}
            <div className="space-y-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="timeline-item pl-8 slide-in-right">
                  <div className="timeline-dot"></div>
                  <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <div className="text-sm text-muted-foreground mb-2">July 2022</div>
                    <h3 className="text-xl font-bold mb-2">The Day We Met</h3>
                    <p className="text-muted-foreground mb-4">
                      That coffee shop on Main Street. You were reading your favorite book, and I couldn't help but
                      notice...
                    </p>
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="The day we met"
                      width={600}
                      height={300}
                      className="rounded-md mb-4 w-full h-48 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/timeline"
                className="inline-flex items-center justify-center text-sm font-medium text-accent hover:underline"
              >
                View Full Timeline
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery-preview" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Gallery"
            subtitle="Capturing our favorite moments together"
            badge="Photos"
            className="mb-12"
          />

          <div className="gallery-grid max-w-6xl mx-auto">
            {galleryPreviewImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item aspect-square cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Lightbox for Gallery Preview */}
          <GalleryLightbox
            images={galleryPreviewImages}
            initialIndex={selectedImageIndex}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center text-sm font-medium text-accent hover:underline"
            >
              View All Photos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Moments Preview */}
      <section id="moments-preview" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Special Moments"
            subtitle="The highlights of our journey together"
            badge="Memories"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "First Date", icon: <Heart className="h-8 w-8 text-accent" /> },
              { title: "Beach Vacation", icon: <ImageIcon className="h-8 w-8 text-accent" /> },
              { title: "Anniversary", icon: <Calendar className="h-8 w-8 text-accent" /> },
            ].map((moment, index) => (
              <div key={index} className="moment-card bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-accent/10 rounded-full">{moment.icon}</div>
                  <h3 className="text-xl font-bold">{moment.title}</h3>
                  <p className="text-muted-foreground">A special memory we shared together that I'll never forget...</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/moments"
              className="inline-flex items-center justify-center text-sm font-medium text-accent hover:underline"
            >
              Explore All Moments
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section id="about-preview" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="About Us"
            subtitle="Our story, our journey, our love"
            badge="Our Story"
            className="mb-12"
          />

          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Us"
                alt="About us"
                width={500}
                height={500}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">How We Met</h3>
              <p className="text-muted-foreground">
                It all started with a chance encounter that changed our lives forever. From that first conversation, I
                knew there was something special between us...
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
                >
                  Read Our Story
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Every Day With You Is A Gift</h2>
            <p className="text-white/90">Here's to many more beautiful memories together. I love you.</p>
            <div className="pt-4">
              <Link
                href="/timeline"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-accent shadow transition-colors hover:bg-white/90"
              >
                Start From The Beginning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

