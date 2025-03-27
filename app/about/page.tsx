import Image from "next/image"
import HeroSection from "@/components/hero-section"
import SectionHeading from "@/components/section-heading"
import { Heart, Coffee, Music, Book, Film, Pizza } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="About Us"
        subtitle="Our story, our journey, our love"
        backgroundImage="/placeholder.svg?height=800&width=1600&text=About+Us"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Love Story"
            subtitle="How we met and fell in love"
            badge="Our Story"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white rounded-lg shadow-sm p-8 border">
              <h3 className="text-2xl font-bold mb-4">How We Met</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=How+We+Met"
                    alt="How we met"
                    width={600}
                    height={400}
                    className="rounded-md w-full"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <p className="text-muted-foreground">
                    It all started with a chance encounter at that coffee shop on Main Street. You were reading your
                    favorite book, and I couldn't help but notice how beautiful you looked. I gathered the courage to
                    ask if I could join you, and to my surprise, you said yes.
                  </p>
                  <p className="text-muted-foreground">
                    Our first conversation lasted for hours, and I knew there was something special about you. We talked
                    about everything from our favorite books to our dreams for the future. By the time we said goodbye,
                    I already knew I wanted to see you again.
                  </p>
                  <p className="text-muted-foreground">
                    Little did I know that this random meeting would change my life forever and lead to the most
                    beautiful relationship I could have ever imagined.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 border">
              <h3 className="text-2xl font-bold mb-4">Why I Love You</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 space-y-4 order-2 md:order-1">
                  <p className="text-muted-foreground">
                    There are countless reasons why I love you, but what I cherish most is your kind heart and the way
                    you make everyone around you feel special. Your laughter is contagious, and your smile brightens
                    even the darkest days.
                  </p>
                  <p className="text-muted-foreground">
                    I love how passionate you are about the things you care about, and how you never give up on your
                    dreams. Your determination inspires me to be a better person every day.
                  </p>
                  <p className="text-muted-foreground">
                    But most of all, I love the way you love me - unconditionally and wholeheartedly. You accept me for
                    who I am, flaws and all, and I couldn't ask for anything more.
                  </p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Why+I+Love+You"
                    alt="Why I love you"
                    width={600}
                    height={400}
                    className="rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="About Us" subtitle="The perfect match" badge="Us" className="mb-12" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Your Profile */}
            <div className="bg-white rounded-lg shadow-sm p-8 border">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=Me"
                    alt="Your profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Your Name</h3>
                <p className="text-muted-foreground">A few words about yourself and what makes you unique.</p>

                <div className="w-full pt-4">
                  <h4 className="font-medium mb-2">Favorite things about her:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Heart className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Her beautiful smile</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Her kindness to everyone she meets</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Her passion for life</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Her Profile */}
            <div className="bg-white rounded-lg shadow-sm p-8 border">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200&text=Her"
                    alt="Her profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold">Her Name</h3>
                <p className="text-muted-foreground">A few words about her and what makes her special to you.</p>

                <div className="w-full pt-4">
                  <h4 className="font-medium mb-2">What she means to me:</h4>
                  <p className="text-sm text-muted-foreground">
                    She is my best friend, my confidant, my partner in crime, and the love of my life. She makes every
                    day brighter just by being in it, and I can't imagine my life without her.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Favorites Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Favorites"
            subtitle="The things we love to do together"
            badge="Favorites"
            className="mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Coffee className="h-8 w-8" />, label: "Coffee Dates" },
              { icon: <Film className="h-8 w-8" />, label: "Movie Nights" },
              { icon: <Music className="h-8 w-8" />, label: "Concerts" },
              { icon: <Book className="h-8 w-8" />, label: "Reading" },
              { icon: <Pizza className="h-8 w-8" />, label: "Trying New Foods" },
              { icon: <Heart className="h-8 w-8" />, label: "Just Being Together" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-accent/10 rounded-full text-accent">{item.icon}</div>
                  <h3 className="font-medium text-sm">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Dreams Together</h2>
            <p className="text-white/90">
              As we continue our journey together, there are so many adventures waiting for us. From traveling the world
              to building a home filled with love and laughter, I can't wait to see what the future holds for us.
            </p>
            <p className="text-white/90">
              No matter where life takes us, I know that as long as we're together, we can face anything that comes our
              way.
            </p>
            <div className="pt-4">
              <div className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm">"The best is yet to come"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Message Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 border">
            <h3 className="text-2xl font-bold mb-4 text-center">A Private Message</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">My love,</p>
              <p className="text-muted-foreground">
                I created this website as a way to celebrate our journey together and to show you just how much you mean
                to me. Every moment we've shared, from the big milestones to the quiet everyday moments, has been
                special because I've shared them with you.
              </p>
              <p className="text-muted-foreground">
                As we look back on our memories together, I want you to know that you've made my life more beautiful
                than I ever thought possible. Your love, your laughter, and your presence in my life are the greatest
                gifts I could ask for.
              </p>
              <p className="text-muted-foreground">
                I hope this website brings a smile to your face and reminds you of all the wonderful times we've had
                together. And I hope it serves as a promise of all the amazing memories we have yet to create.
              </p>
              <p className="text-muted-foreground">I love you more than words can express.</p>
              <p className="text-muted-foreground text-right">Forever yours,</p>
              <p className="text-muted-foreground text-right">[Your Name]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

