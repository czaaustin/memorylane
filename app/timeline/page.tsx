import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import { Heart } from "lucide-react"

export default function TimelinePage() {
  // Sample timeline data - you would replace this with your actual memories
  const timelineEvents = [
    {
      date: "July 2022",
      title: "The Day We Met",
      description:
        "That coffee shop on Main Street. You were reading your favorite book, and I couldn't help but notice how beautiful you looked. Our first conversation lasted for hours, and I knew there was something special about you.",
      image: "/placeholder.svg?height=400&width=600&text=First+Meeting",
    },
    {
      date: "August 2022",
      title: "First Date",
      description:
        "Our first official date at that Italian restaurant downtown. You wore that blue dress that I love, and we talked until they had to close the place. Walking you home under the stars felt like a scene from a movie.",
      image: "/placeholder.svg?height=400&width=600&text=First+Date",
    },
    {
      date: "October 2022",
      title: "Weekend Getaway",
      description:
        "Our spontaneous trip to the mountains. We got lost on the hiking trail but found the most beautiful view. Sitting there with you, watching the sunset, I realized how lucky I am to have you in my life.",
      image: "/placeholder.svg?height=400&width=600&text=Weekend+Trip",
    },
    {
      date: "December 2022",
      title: "First Holiday Together",
      description:
        "Spending Christmas with your family. I was so nervous, but they made me feel right at home. That evening by the fireplace, exchanging gifts, I felt like I was exactly where I was meant to be.",
      image: "/placeholder.svg?height=400&width=600&text=Holidays",
    },
    {
      date: "February 2023",
      title: "Valentine's Day",
      description:
        "Our first Valentine's Day. The surprise picnic I planned didn't go exactly as expected when it started raining, but moving it to the living room floor with candles everywhere made it even more special.",
      image: "/placeholder.svg?height=400&width=600&text=Valentines",
    },
    {
      date: "May 2023",
      title: "Beach Vacation",
      description:
        "That week at the beach where we did absolutely nothing but relax, swim, and enjoy each other's company. Building sandcastles like kids and watching the sunrise together are memories I'll cherish forever.",
      image: "/placeholder.svg?height=400&width=600&text=Beach+Vacation",
    },
    {
      date: "July 2023",
      title: "One Year Anniversary",
      description:
        "Celebrating one year together. It's amazing how quickly time flies when you're with someone who makes every day an adventure. Here's to many more years of love, laughter, and creating beautiful memories together.",
      image: "/placeholder.svg?height=400&width=600&text=Anniversary",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Timeline"
        subtitle="A journey through our most special moments together"
        backgroundImage="/placeholder.svg?height=800&width=1600&text=Our+Timeline"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Journey Together"
            subtitle="From the first hello to today, every moment tells our story"
            badge="Memory Lane"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item pl-8 ${index % 2 === 0 ? "slide-in-right" : "slide-in-left"}`}
                >
                  <div className="timeline-dot"></div>
                  <div className="bg-white rounded-lg shadow-sm p-6 border">
                    <div className="text-sm text-muted-foreground mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="rounded-md mb-4 w-full h-64 object-cover"
                    />
                    <div className="flex justify-end">
                      <button className="inline-flex items-center text-accent hover:text-accent/80">
                        <Heart className="h-5 w-5 mr-1" />
                        <span className="text-sm">Favorite this memory</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Memory Button */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4">Have a special memory you'd like to add?</p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
              >
                Add Your Memory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

