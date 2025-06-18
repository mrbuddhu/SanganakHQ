import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function TestimonialsSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const testimonials = [
    {
      name: "Ankit Kumar",
      role: "@Burgerrr",
      rating: 5,
      content: "Working with Sanganak Premium was a game-changing experience. Their attention to detail and innovative solutions exceeded our expectations.",
      videoUrl: "/testimonials/ankit-kumar.mp4",
      avatar: "/testimonials/headshots/ankit-kumar.jpg",
      type: "video"
    },
    {
      name: "Shyam Sharma",
      role: "@Interio",
      rating: 5,
      content: "Sanganak delivered our MVP in just 15 days. Their premium project management and full-stack expertise made all the difference.",
      avatar: "/testimonials/headshots/shyam-sharma.jpg",
      type: "text"
    },
    {
      name: "Shubham Kumar",
      role: "@GlobalEats",
      rating: 5,
      content: "Their expertise in food tech platforms helped us create a seamless experience for our global customer base.",
      videoUrl: "/testimonials/shubham-kumar.mp4",
      avatar: "/testimonials/headshots/shubham-kumar.jpg",
      type: "video"
    },
    {
      name: "Rahul Verma",
      role: "@TechStart",
      rating: 5,
      content: "3x revenue growth in 6 months! Their AI-powered solutions transformed our entire business model. Absolutely phenomenal work.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Priya Singh",
      role: "@LuxeFashion",
      rating: 5,
      content: "Our conversion rate jumped 150% after the redesign. The attention to luxury details and user experience is simply unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Aarav Patel",
      role: "@FinTechPro",
      rating: 5,
      content: "Delivered our MVP in just 15 days. The quality and speed of execution is remarkable. Worth every penny and more.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Meera Kapoor",
      role: "@LuxeInteriors",
      rating: 5,
      content: "2.5x increase in client acquisitions within 3 months. Their premium design approach perfectly aligns with our luxury market.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "text"
    }
  ];

  const getVisibleItems = (width: number) => {
    if (width < 640) return 1; // mobile
    if (width < 1024) return 2; // tablet
    return 3; // desktop
  };

  const visibleCount = getVisibleItems(windowWidth);
  const visibleTestimonials = testimonials.slice(
    currentTestimonialIndex,
    currentTestimonialIndex + visibleCount
  );

  const handleTestimonialScroll = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentTestimonialIndex(prev => 
        prev === 0 ? Math.max(testimonials.length - visibleCount, 0) : prev - 1
      );
    } else {
      setCurrentTestimonialIndex(prev => 
        prev >= testimonials.length - visibleCount ? 0 : prev + 1
      );
    }
  };

  const handleVideoEnd = (index: number) => {
    setPlayingVideos(prev => ({
      ...prev,
      [index]: false
    }));
  };

  const toggleVideo = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const video = document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement;
    
    if (video) {
      if (video.paused) {
        video.play().catch(error => {
          console.error("Error playing video:", error);
        });
        setPlayingVideos(prev => ({
          ...prev,
          [index]: true
        }));
      } else {
        video.pause();
        setPlayingVideos(prev => ({
          ...prev,
          [index]: false
        }));
      }
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <LuxuryHeading
          title="Client Stories"
          subtitle="Hear from our distinguished clients who achieved extraordinary results"
        />
        
        <div className="relative mt-16">
          <motion.div 
            className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto pb-6 px-4 -mx-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentTestimonialIndex + index}
                className="w-[320px] sm:w-[340px] flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <LuxuryCard className="overflow-hidden group hover:border-luxury-gold-300/40 transition-all duration-500 p-0 bg-black/60 backdrop-blur-md shadow-2xl">
                  <div className="relative aspect-[3/4]">
                    {testimonial.type === 'video' ? (
                      <>
                        <video
                          id={`testimonial-video-${index}`}
                          className="w-full h-full object-cover"
                          src={testimonial.videoUrl}
                          onEnded={() => handleVideoEnd(index)}
                          playsInline
                          preload="metadata"
                        />
                        <button
                          onClick={(e) => toggleVideo(e, index)}
                          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-black/40 hover:from-black/70 hover:via-black/30 hover:to-black/50 transition-all duration-500 cursor-pointer z-10"
                          type="button"
                        >
                          <div className="w-24 h-24 rounded-full bg-luxury-gold-300/95 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-luxury-gold-300/30">
                            {playingVideos[index] ? (
                              <Pause className="w-10 h-10 text-black" />
                            ) : (
                              <Play className="w-10 h-10 text-black ml-1" />
                            )}
                          </div>
                        </button>
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-xs text-luxury-gold-300 font-medium">Video Testimonial</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="relative h-full bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-300/5 via-transparent to-luxury-gold-300/10" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                          <div className="mb-6">
                            <svg className="w-12 h-12 text-luxury-gold-300/60" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                          </div>
                          <p className="text-lg text-luxury-gold-100 text-center font-medium italic leading-relaxed mb-4">
                            "{testimonial.content}"
                          </p>
                          <div className="absolute top-4 right-4">
                            <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                              <span className="text-xs text-luxury-gold-300 font-medium">Written Review</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 bg-gradient-to-t from-black/90 to-black/70 backdrop-blur-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: (index * 0.15) + (i * 0.1), duration: 0.3 }}
                            className="w-5 h-5 text-luxury-gold-300 drop-shadow-sm"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <h4 className="font-semibold text-luxury-gold-300 text-xl mb-1">{testimonial.name}</h4>
                        <p className="text-sm text-luxury-gold-300/80 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center items-center mt-10 gap-4">
            {testimonials.map((_, index) => {
              const isActive = index >= currentTestimonialIndex && index < currentTestimonialIndex + visibleCount;
              return (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-luxury-gold-300 scale-125' : 'bg-luxury-gold-300/30 hover:bg-luxury-gold-300/60'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              );
            })}
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <motion.button
              onClick={() => handleTestimonialScroll('prev')}
              className="p-3 rounded-full bg-luxury-gold-300/10 border border-luxury-gold-300/20 hover:bg-luxury-gold-300/20 hover:border-luxury-gold-300/40 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-luxury-gold-300 group-hover:text-luxury-gold-200 transition-colors" />
            </motion.button>
            <motion.button
              onClick={() => handleTestimonialScroll('next')}
              className="p-3 rounded-full bg-luxury-gold-300/10 border border-luxury-gold-300/20 hover:bg-luxury-gold-300/20 hover:border-luxury-gold-300/40 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-luxury-gold-300 group-hover:text-luxury-gold-200 transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
} 