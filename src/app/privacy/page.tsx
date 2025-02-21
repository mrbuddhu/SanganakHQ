import MainLayout from '@/components/layout/MainLayout'

export default function PrivacyPage() {
  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#c6a255] mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Learn about how we protect your privacy and handle your data.
            </p>
            {/* Add more content here */}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}
