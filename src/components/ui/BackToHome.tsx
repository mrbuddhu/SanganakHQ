import { Home } from 'lucide-react'
import Link from 'next/link'

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="fixed bottom-8 left-8 p-4 bg-black/80 border border-[#c6a255]/20 rounded-full shadow-lg backdrop-blur-sm hover:bg-black hover:border-[#c6a255]/40 transition-all duration-300 group z-50"
      aria-label="Back to Home"
    >
      <Home className="w-6 h-6 text-[#c6a255] group-hover:scale-110 transition-transform duration-300" />
    </Link>
  )
}
