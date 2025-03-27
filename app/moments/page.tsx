import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import { Calendar, MapPin, Heart, Music, Plane, Gift } from "lucide-react"

export default function MomentsPage() {
  // Sample moments data - you would replace this with your actual special moments
  const specialMoments = [
    {
      title: "First Date",
      date: "August 2022",
      description:
        "Our first official date at that Italian restaurant downtown. You wore that blue dress that I love, and we talked until they had to close the place.",
      image: "/placeholder.svg?height=600&width=800&text=First+Date",
      icon: <Heart className="h-6 w-6 text-accent" />,
      category: "Romantic",
    },
    {
      title: "Beach Vacation",
      date: "May 2023",
      description:
        "That week at the beach where we did absolutely nothing but relax, swim, and enjoy each other's company. Building sandcastles like kids and watching the sunrise together.",
      image: "/placeholder.svg?height=600&width=800&text=Beach+Vacation",
      icon: <Plane className="h-6 w-6 text-accent" />,
      category: "Trips",
    },
    {
      title: "Concert Night",
      date: "October 2022",
      description:
        "The night we saw your favorite band live. You were so excited you couldn't stop dancing, and I couldn't stop watching you smile.",
      image: "/placeholder.svg?height=600&width=800&text=Concert",
      icon: <Music className="h-6 w-6 text-accent" />,
      category: "Entertainment",
    },
    {
      title: "Surprise Birthday",
      date: "March 2023",
      description:
        "When I surprised you for your birthday with all your friends. The look on your face when you walked in was priceless.",
      image: "/placeholder.svg?height=600&width=800&text=Birthday",
      icon: <Gift className="h-6 w-6 text-accent" />,
      category: "Celebrations",
    },
    {
      title: "Hiking Adventure",
      date: "September 2022",
      description:
        "Our spontaneous hiking trip where we got completely lost but found the most amazing view. Sometimes getting lost leads to the best discoveries.",
      image: "/placeholder.svg?height=600&width=800&text=Hiking",
      icon: <MapPin className="h-6 w-6 text-accent" />,
      category: "Adventures",
    },
    {
      title: "One Year Anniversary",
      date: "July 2023",
      description:
        "Celebrating one year together. It's amazing how quickly time flies when you're with someone who makes every day an adventure.",
      image: "/placeholder.svg?height=600&width=800&text=Anniversary",
      icon: <Calendar className="h-6 w-6 text-accent" />,
      category: "Milestones",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Special Moments"
        subtitle="The highlights of our journey together"
        backgroundImage="/placeholder.svg?height=800&width=1600&text=Special+Moments"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Unforgettable Memories"
            subtitle="The moments that define our journey together"
            badge="Moments"
            className="mb-12"
          />

          {/* Featured Moments */}
          <div className="space-y-24 max-w-5xl mx-auto">
            {specialMoments.map((moment, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    <Image
                      src={moment.image || "/placeholder.svg"}
                      alt={moment.title}
                      width={800}
                      height={600}
                      className="rounded-lg shadow-md w-full"
                    />
                    <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-md">{moment.icon}</div>
                  </div>
                </div>
                <div className="md:w-1/2 space-y-4">
                  <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {moment.category}
                  </div>
                  <h3 className="text-2xl font-bold">{moment.title}</h3>
                  <div className="text-sm text-muted-foreground">{moment.date}</div>
                  <p className="text-muted-foreground">{moment.description}</p>
                  <div className="pt-4">
                    <Link
                      href={`#${moment.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      Read more about this memory
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Moment Button */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Have a special moment you'd like to add?</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
            >
              Add New Moment
            </Link>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Future Together"
            subtitle="Dreams and plans we're excited to make reality"
            badge="Looking Forward"
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Bucket List</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="h-5 w-5 rounded border border-accent flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Travel to Paris together</h4>
                  <p className="text-muted-foreground">See the Eiffel Tower and have a picnic by the Seine</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="h-5 w-5 rounded border border-accent flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Learn to cook a gourmet meal together</h4>
                  <p className="text-muted-foreground">Take a cooking class and master a signature dish</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="h-5 w-5 rounded border border-accent flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Go stargazing in a remote location</h4>
                  <p className="text-muted-foreground">Find a place with no light pollution and watch the stars</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="h-5 w-5 rounded border border-accent flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Plant a garden together</h4>
                  <p className="text-muted-foreground">Create something beautiful that grows with our relationship</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="h-5 w-5 rounded border border-accent flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Take a road trip with no destination</h4>
                  <p className="text-muted-foreground">Just drive and see where the road takes us</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

