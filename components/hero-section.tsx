import Link from "next/link"
import { ArrowDown } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=800&width=1600",
  showButton = false,
  buttonText = "Start the Journey",
  buttonLink = "#timeline",
}: HeroSectionProps) {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>

          {showButton && (
            <div className="pt-4">
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
              >
                {buttonText}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

