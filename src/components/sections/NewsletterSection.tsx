import LuxuryCard from '@/components/ui/LuxuryCard';

export default function NewsletterSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <LuxuryCard className="p-8 sm:p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-[#c6a255]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#c6a255]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-[#c6a255] mb-3">Weekly Premium Content</h4>
            <div className="max-w-2xl">
              <p className="text-gray-300 mb-2">
                Get exclusive insights on luxury tech, AI innovations, and digital transformation.
              </p>
              <p className="text-[#c6a255] font-medium">
                For visionaries who demand excellence.
              </p>
            </div>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <form 
              action="https://sanganak.substack.com/api/v1/free" 
              method="post" 
              className="relative z-20 flex flex-col sm:flex-row gap-4 items-stretch"
            >
              <div className="flex-1 relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-black/60 border border-[#c6a255]/20 rounded-lg focus:outline-none focus:border-[#c6a255] text-white placeholder-gray-400 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#c6a255]/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none" />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-[#c6a255] hover:bg-[#e9d5a1] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#c6a255]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>
        </LuxuryCard>
      </div>
    </section>
  );
} 