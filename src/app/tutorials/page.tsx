import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import { Code, Layout, Sparkles, Zap } from 'lucide-react'

export default function TutorialsPage() {
  const categories = [
    {
      title: "Branding Excellence",
      icon: <Sparkles className="w-8 h-8 text-[#c6a255]" />,
      tutorials: [
        { title: "Creating a Luxury Brand Identity", duration: "45 min", level: "Intermediate" },
        { title: "Premium Design Principles", duration: "60 min", level: "Advanced" },
        { title: "Brand Voice & Messaging", duration: "30 min", level: "Beginner" }
      ]
    },
    {
      title: "Design Mastery",
      icon: <Layout className="w-8 h-8 text-[#c6a255]" />,
      tutorials: [
        { title: "UI Design for Luxury Brands", duration: "90 min", level: "Advanced" },
        { title: "Creating Premium Layouts", duration: "60 min", level: "Intermediate" },
        { title: "Color Theory in Luxury Design", duration: "45 min", level: "Beginner" }
      ]
    },
    {
      title: "Development Excellence",
      icon: <Code className="w-8 h-8 text-[#c6a255]" />,
      tutorials: [
        { title: "Building Scalable Applications", duration: "120 min", level: "Advanced" },
        { title: "Performance Optimization", duration: "90 min", level: "Advanced" },
        { title: "Secure Coding Practices", duration: "60 min", level: "Intermediate" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Zap className="w-8 h-8 text-[#c6a255]" />,
      tutorials: [
        { title: "Blockchain Development", duration: "120 min", level: "Advanced" },
        { title: "AI Integration Basics", duration: "90 min", level: "Intermediate" },
        { title: "Smart Contract Development", duration: "60 min", level: "Advanced" }
      ]
    }
  ]

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#c6a255]/10 border border-[#c6a255] rounded-lg p-4 mb-8 text-center">
            <p className="text-[#c6a255] font-semibold">🎓 Tutorials Coming Soon! Stay tuned for our premium educational content.</p>
          </div>
          <LuxuryHeading
            title="Premium Tutorials"
            subtitle="Master the art of digital excellence"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <LuxuryCard key={index} className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-[#c6a255]">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <div
                      key={tutorialIndex}
                      className="p-4 bg-black/40 border border-[#c6a255]/20 rounded-lg hover:border-[#c6a255]/40 transition-colors cursor-pointer"
                    >
                      <h4 className="text-lg font-semibold text-gray-200 mb-2">{tutorial.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{tutorial.duration}</span>
                        <span>•</span>
                        <span>{tutorial.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </LuxuryCard>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}
