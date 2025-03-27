import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#8c8c8c] text-white py-12 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="h-5 w-5 text-white" />
            <p className="text-sm text-white">"With you, every day is my favorite day."</p>
            <Heart className="h-5 w-5 text-white" />
          </div>

          <p className="text-sm text-white max-w-md">Thank you for being part of my life. More memories to come!</p>

          <div className="text-xs text-white/80">© {currentYear} Our Journey | Made with love</div>
        </div>
      </div>
    </footer>
  )
}

