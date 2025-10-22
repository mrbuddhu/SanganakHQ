import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function TestimonialsSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [activeDot, setActiveDot] = useState(0);
  const [videoErrors, setVideoErrors] = useState<{[key: number]: boolean}>({});

  const testimonials = [
    {
      name: "Peedu Kass",
      role: "@PeeduKass",
      rating: 5,
      content: "SanganakHQ transformed our business with their innovative solutions. The results speak for themselves - exceptional growth and unmatched quality.",
      videoUrl: "/testimonials/PeeduKass.mp4",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "video",
      orientation: "landscape"
    },
    {
      name: "Lavent Marketing",
      role: "@LaventMarketing",
      rating: 5,
      content: "Working with SanganakHQ was a game-changing experience. Their marketing expertise and technical solutions delivered outstanding results for our campaigns.",
      videoUrl: "/testimonials/LaventMarketing.mp4",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "video",
      orientation: "landscape"
    },
    {
      name: "Ankit Kumar",
      role: "@Burgerrr",
      rating: 5,
      content: "Working with SanganakHQ was a game-changing experience. Our monthly revenue grew from $120k to $720k in just 45 days with their end-to-end solution.",
      videoUrl: "/testimonials/ankit-kumar.mp4",
      avatar: "/testimonials/headshots/ankit-kumar.jpg",
      type: "video",
      orientation: "portrait"
    },
    {
      name: "Shubham Kumar",
      role: "@GlobalEats",
      rating: 5,
      content: "SanganakHQ's expertise in food tech platforms helped us increase daily orders from 500 to 2,500 in just 2 months with their full-service solution.",
      videoUrl: "/testimonials/shubham-kumar.mp4",
      avatar: "/testimonials/headshots/shubham-kumar.jpg",
      type: "video",
      orientation: "portrait"
    },
    {
      name: "Rahul Kumar Rajak",
      role: "@DizIDice",
      rating: 5,
      content: "Aryabhatta and SanganakHQ have consistently delivered outstanding results for my multiple clients across all verticals including Branding, Dev, SEO and Digital Marketing. Their Growth Package is truly exceptional driving real impact and measurable success. He himself has great business acumen and his audits my god. Just have one with him for your business and you'll love it. Highly recommended.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Vishal Chauhan",
      role: "@MotorAxle",
      rating: 5,
      content: "Aryabhatta @SanganakHQ team did a brilliant job redesigning our blogging site. Fast, clean, and exactly what we needed. We've since kept them on retainer for SEO and email campaigns, and the results speak for themselves. Reliable, sharp, and growth-focused. We are also considering them for paid ads and social media. Highly recommended.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Lavent Marketing",
      role: "@LaventMarketing",
      rating: 5,
      content: "Excellent experience working with team Sanganak. Very experienced in design and development, and delivered exactly what we wanted. Completed the whole project in less than 3 days, clearly shows how fast and efficient they are. Communication was super good and well, always available, open to feedback, and even suggested great ideas. Fully confident I'll go to them again for any web work and would 100% recommend them to others.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Rahul Kumar Rajak",
      role: "@DizIDice",
      rating: 5,
      content: "I've worked with Aryabhatta on multiple projects and he consistently delivers with clear communication, timely results, and minimal revisions. Highly skilled in WordPress, JavaScript, full-stack web and mobile apps (Android and iOS) and eCommerce including WooCommerce, Magento, and Shopify. Creative, solution-oriented, and reliable, he is a trusted partner for complex projects and long-term collaborations. Highly recommended.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Vinit Kumar",
      role: "@DBS Bank",
      rating: 5,
      content: "I had the opportunity to collab with Aryabhata on AI-powered SaaS development. He combines strong AI development skills with deep full-stack SaaS architecture knowledge, delivering scalable, reliable, and business-ready solutions. His ability to translate complex ideas into working products with clean execution and speed truly stands out. He is not just a developer, but a strategist who understands both tech and business impact. Highly recommended AI Developer/ SaaS Developer.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Shyam Sharma",
      role: "@Interio",
      rating: 5,
      content: "Aryabhatta designed a premium and clean website for us in only a week. Very professional and good at his craft. Highly recommended for web design services.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Suhani Chamkar",
      role: "@EY",
      rating: 5,
      content: "Working with Aryabhatta has been an incredible experience. He built and ran our entire email campaign, newsletter system, and AI automation pipeline with precision and speed. Everything was seamless, data-driven, and way more efficient than we expected. His strategic approach and tech expertise truly stand out. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Subesh Kumar",
      role: "@Almarai",
      rating: 5,
      content: "Aryabhatta worked on multiple projects for me in 2024 as a freelancer. He handled Framer landing pages, converted Webflow websites, and built FlutterFlow apps. He has an excellent design sense and strong business acumen. He even improved our cheap copy for free. I wish him the best with his new venture, Sanganak. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Bipin Solanki",
      role: "@AIIMS Delhi @BBC",
      rating: 5,
      content: "Aryabhatta created my website with appointment booking in just 24 hours incredibly fast delivery without compromising quality. His top-notch communication and genuine, heart-driven service made the whole process seamless. The site is now live at drbipinsolanki.com, and I couldn't be happier with the result. Highly recommend him for anyone needing quick, reliable, and professional web design or development.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Karan Gakhar",
      role: "@NutMama",
      rating: 5,
      content: "Aryabhatta worked on our Nutmama Shopify store and delivered beyond expectations. His Liquid code customizations made a free theme feel truly premium. Clear communication, quick execution, and smart problem-solving throughout. Highly recommend him for anyone needing a reliable Shopify designer/developer.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
      type: "text"
    }
  ];

  const getVisibleItems = (width: number) => {
    if (width < 640) return 1; // mobile
    if (width < 1024) return 4; // tablet - show 4 videos
    return 4; // desktop - show 4 videos
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

  const handleVideoError = (index: number) => {
    console.log(`Video error for index ${index}`);
    setVideoErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const toggleVideo = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Try both desktop and mobile video IDs
    const desktopVideo = document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement;
    const mobileVideo = document.getElementById(`mobile-testimonial-video-${index}`) as HTMLVideoElement;
    
    // On mobile devices, prioritize mobile video
    const isMobile = window.innerWidth < 1024;
    const video = isMobile ? (mobileVideo || desktopVideo) : (desktopVideo || mobileVideo);
    
    console.log('Toggle video clicked for index:', index);
    console.log('Desktop video found:', !!desktopVideo);
    console.log('Mobile video found:', !!mobileVideo);
    console.log('Using video:', video?.id);
    
    if (video) {
      if (video.paused) {
        // Pause all other videos first and update their state
        const newPlayingState: {[key: number]: boolean} = {};
        testimonials.forEach((_, i) => {
          if (i !== index) {
            const otherDesktopVideo = document.getElementById(`testimonial-video-${i}`) as HTMLVideoElement;
            const otherMobileVideo = document.getElementById(`mobile-testimonial-video-${i}`) as HTMLVideoElement;
            const otherVideo = isMobile ? (otherMobileVideo || otherDesktopVideo) : (otherDesktopVideo || otherMobileVideo);
            
            if (otherVideo && !otherVideo.paused) {
              otherVideo.pause();
              // Ensure others are muted when paused to avoid any race conditions
              otherVideo.muted = true;
            }
            newPlayingState[i] = false;
          }
        });
        
        // Pause the opposite device type video for the same index
        const oppositeVideo = isMobile ? 
          document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement :
          document.getElementById(`mobile-testimonial-video-${index}`) as HTMLVideoElement;
        
        if (oppositeVideo && !oppositeVideo.paused) {
          oppositeVideo.pause();
          oppositeVideo.muted = true;
        }
        
        // Prepare attributes for reliable inline playback on mobile browsers
        try {
          video.setAttribute('playsinline', '');
          video.setAttribute('webkit-playsinline', 'true');
          video.setAttribute('x5-playsinline', 'true');
          video.setAttribute('x5-video-player-type', 'h5');
          video.setAttribute('x5-video-player-fullscreen', 'false');
          // Force mobile video to work
          if (video.id.includes('mobile')) {
            video.style.position = 'relative';
            video.style.zIndex = '1';
            video.style.display = 'block';
            video.style.visibility = 'visible';
            video.style.opacity = '1';
            // Force video to render frames
            video.currentTime = 0;
            setTimeout(() => {
              video.currentTime = 2;
            }, 100);
          }
        } catch {}
        
        // Play the selected video
        // Unmute explicitly on user interaction so audio plays
        const attemptPlay = () => {
          try {
            // Remove muted attribute if present and unmute
            if (video.hasAttribute('muted')) {
              video.removeAttribute('muted');
            }
            video.muted = false;
            video.volume = 1;

            // If video hasn't buffered enough, ensure it loads before playing
            if (video.readyState < 2) {
              video.load();
            }
            // Tiny seek to force frame refresh on some browsers
            const smallNudge = 0.0001;
            if (!isNaN(video.currentTime)) {
              video.currentTime = Math.max(0, video.currentTime + smallNudge);
            }
            
            // Force mobile video to show frames
            if (video.id.includes('mobile')) {
              video.style.transform = 'translateZ(0)';
              video.style.backfaceVisibility = 'hidden';
              video.style.perspective = '1000px';
              // Force a frame update
              video.pause();
              setTimeout(() => {
                video.play();
              }, 50);
            }
          } catch {}

          const playPromise = video.play();
          console.log('Play promise:', playPromise);
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch((error) => {
              console.log('Play failed, retrying:', error);
              // Wait for canplay, then retry once
              const onCanPlay = () => {
                console.log('Video can play, retrying...');
                video.removeEventListener('canplay', onCanPlay);
                setTimeout(() => {
                  try { 
                    video.play().then(() => console.log('Retry play succeeded')).catch((e) => console.log('Retry play failed:', e)); 
                  } catch {}
                }, 0);
              };
              video.addEventListener('canplay', onCanPlay, { once: true });
              try { video.load(); } catch {}
            });
          }
          // As a final safety, retry shortly if still paused
          setTimeout(() => {
            if (video.paused) {
              console.log('Video still paused, final retry...');
              try { 
                video.play().then(() => console.log('Final retry succeeded')).catch((e) => console.log('Final retry failed:', e)); 
              } catch {}
            }
          }, 150);
        };

        attemptPlay();
        newPlayingState[index] = true;
        
        setPlayingVideos(newPlayingState);
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
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      // When switching device types, pause all videos from the opposite type
      const isNowMobile = newWidth < 1024;
      
      testimonials.forEach((_, i) => {
        if (isNowMobile) {
          // Now mobile - pause desktop videos
          const desktopVideo = document.getElementById(`testimonial-video-${i}`) as HTMLVideoElement;
          if (desktopVideo && !desktopVideo.paused) {
            desktopVideo.pause();
            desktopVideo.muted = true;
          }
        } else {
          // Now desktop - pause mobile videos
          const mobileVideo = document.getElementById(`mobile-testimonial-video-${i}`) as HTMLVideoElement;
          if (mobileVideo && !mobileVideo.paused) {
            mobileVideo.pause();
            mobileVideo.muted = true;
          }
        }
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll to update active dot
  useEffect(() => {
    const scrollContainer = document.getElementById('testimonials-scroll');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = 600 + 24; // card width + gap
      const newActiveDot = Math.round(scrollLeft / cardWidth);
      setActiveDot(newActiveDot);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 bg-[#000000] overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <LuxuryHeading
            title="Client Success Stories"
            subtitle="Hear from our distinguished clients who achieved measurable growth, market leadership, and exceptional ROI"
          />
        </div>
        
        <div className="relative mt-16">
          {/* Desktop Video Row */}
          <div className="hidden lg:block">
          <motion.div 
              className="flex gap-8 overflow-x-auto pb-6 px-4 -mx-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
              {/* Peedu - Landscape Video */}
              <motion.div
                key={0}
                className="w-[320px] flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <div className="relative aspect-[16/9] h-full overflow-hidden rounded-lg border border-luxury-gold-300/20 bg-black/60 backdrop-blur-md shadow-2xl group hover:border-luxury-gold-300/40 transition-all duration-500">
                    <video
                      id="testimonial-video-0"
                      className="w-full h-full object-cover"
                      src={testimonials[0].videoUrl}
                      onEnded={() => handleVideoEnd(0)}
                      onError={() => handleVideoError(0)}
                      playsInline
                      webkit-playsinline="true"
                      preload="auto"
                      muted
                      loop
                      x5-video-player-type="h5"
                      x5-video-player-fullscreen="true"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.currentTime = 2; // Start 2 seconds ahead
                      }}
                    />
                    <button
                      onClick={(e) => toggleVideo(e, 0)}
                      className="absolute top-2 left-2 bg-gradient-to-t from-black/60 via-black/20 to-black/40 hover:from-black/70 hover:via-black/30 hover:to-black/50 transition-all duration-500 cursor-pointer z-10 rounded-full"
                      type="button"
                    >
                    <div className="w-6 h-6 rounded-full bg-luxury-gold-300/95 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-luxury-gold-300/30">
                        {playingVideos[0] ? (
                          <Pause className="w-2 h-2 text-black" />
                        ) : (
                          <Play className="w-2 h-2 text-black ml-0.5" />
                            )}
                          </div>
                        </button>
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2">
                      <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonials[0].rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          transition={{ delay: 0.1 + (i * 0.1), duration: 0.3 }}
                            className="w-2 h-2 text-luxury-gold-300 drop-shadow-sm"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    <h4 className="font-semibold text-luxury-gold-300 text-xs mb-1">{testimonials[0].name}</h4>
                    <p className="text-xs text-luxury-gold-300/80 font-medium">{testimonials[0].role}</p>
                          </div>
                        </div>
              </motion.div>

              {/* Explicit Gap Between Peedu and Lavent */}
              <div className="w-24 flex-shrink-0"></div>

              {/* Portrait Videos */}
              {testimonials.slice(1, 4).map((testimonial, index) => (
              <motion.div
                  key={index + 1}
                  className="w-[200px] flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                  <div className="relative aspect-[3/4] h-full overflow-hidden rounded-lg border border-luxury-gold-300/20 bg-black/60 backdrop-blur-md shadow-2xl group hover:border-luxury-gold-300/40 transition-all duration-500">
                    <video
                      id={`testimonial-video-${index + 1}`}
                      className="w-full h-full object-cover"
                      src={testimonial.videoUrl}
                      onEnded={() => handleVideoEnd(index + 1)}
                      onError={() => handleVideoError(index + 1)}
                      playsInline
                      webkit-playsinline="true"
                      preload="auto"
                      muted
                      loop
                      x5-video-player-type="h5"
                      x5-video-player-fullscreen="true"
                      onLoadedMetadata={(e) => {
                        if (index + 1 === 1) {
                          e.currentTarget.currentTime = 5; // Lavent 5 seconds
                        } else {
                          e.currentTarget.currentTime = 2; // Others 2 seconds
                        }
                      }}
                    />
                    <button
                      onClick={(e) => toggleVideo(e, index + 1)}
                      className="absolute top-2 left-2 bg-gradient-to-t from-black/60 via-black/20 to-black/40 hover:from-black/70 hover:via-black/30 hover:to-black/50 transition-all duration-500 cursor-pointer z-10 rounded-full"
                      type="button"
                    >
                      <div className="w-6 h-6 rounded-full bg-luxury-gold-300/95 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-luxury-gold-300/30">
                        {playingVideos[index + 1] ? (
                          <Pause className="w-2 h-2 text-black" />
                        ) : (
                          <Play className="w-2 h-2 text-black ml-0.5" />
                        )}
                      </div>
                    </button>
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 + (index * 0.1) + (i * 0.1), duration: 0.3 }}
                            className="w-2 h-2 text-luxury-gold-300 drop-shadow-sm"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                      <h4 className="font-semibold text-luxury-gold-300 text-xs mb-1">{testimonial.name}</h4>
                      <p className="text-xs text-luxury-gold-300/80 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
              </motion.div>
              ))}

            </motion.div>
          </div>

          {/* Mobile Video Row */}
          <div className="lg:hidden">
            <motion.div 
              className="flex gap-8 overflow-x-auto pb-6 px-4 -mx-4 scrollbar-hide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Peedu - Landscape Video */}
              <motion.div
                key={0}
                className="w-[320px] flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <div className="relative aspect-[16/9] h-[200px] overflow-hidden rounded-lg border border-luxury-gold-300/20 bg-black/60 backdrop-blur-md shadow-2xl group hover:border-luxury-gold-300/40 transition-all duration-500">
                    <video
                      id="mobile-testimonial-video-0"
                      className="w-full h-full object-cover object-center"
                      src={testimonials[0].videoUrl}
                      onEnded={() => handleVideoEnd(0)}
                      onError={() => handleVideoError(0)}
                      playsInline
                      webkit-playsinline="true"
                      preload="auto"
                      muted
                      loop
                      x5-playsinline="true"
                      x5-video-player-type="h5"
                      x5-video-player-fullscreen="false"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.currentTime = 2; // Start 2 seconds ahead
                      }}
                    />
                    <button
                      onClick={(e) => toggleVideo(e, 0)}
                      className="absolute top-2 left-2 bg-gradient-to-t from-black/60 via-black/20 to-black/40 hover:from-black/70 hover:via-black/30 hover:to-black/50 transition-all duration-500 cursor-pointer z-10 rounded-full"
                      type="button"
                    >
                    <div className="w-6 h-6 rounded-full bg-luxury-gold-300/95 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-luxury-gold-300/30">
                        {playingVideos[0] ? (
                        <Pause className="w-2 h-2 text-black" />
                        ) : (
                        <Play className="w-2 h-2 text-black ml-0.5" />
                        )}
                      </div>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(testimonials[0].rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 + (i * 0.1), duration: 0.3 }}
                            className="w-2 h-2 text-luxury-gold-300 drop-shadow-sm"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    <h4 className="font-semibold text-luxury-gold-300 text-xs mb-1">{testimonials[0].name}</h4>
                      <p className="text-xs text-luxury-gold-300/80 font-medium">{testimonials[0].role}</p>
                    </div>
                  </div>
              </motion.div>

              {/* Explicit Gap Between Peedu and Lavent */}
              <div className="w-24 flex-shrink-0"></div>

              {/* Portrait Videos */}
              {testimonials.slice(1, 4).map((testimonial, index) => (
                <motion.div
                  key={index + 1}
                  className="w-[200px] flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="relative aspect-[3/4] h-[200px] overflow-hidden rounded-lg border border-luxury-gold-300/20 bg-black/60 backdrop-blur-md shadow-2xl group hover:border-luxury-gold-300/40 transition-all duration-500">
                      <video
                        id={`mobile-testimonial-video-${index + 1}`}
                        className="w-full h-full object-cover"
                        src={testimonial.videoUrl}
                        onEnded={() => handleVideoEnd(index + 1)}
                        onError={() => handleVideoError(index + 1)}
                        playsInline
                        webkit-playsinline="true"
                        preload="auto"
                        muted
                        loop
                        x5-playsinline="true"
                        x5-video-player-type="h5"
                        x5-video-player-fullscreen="false"
                        onLoadedMetadata={(e) => {
                          if (index + 1 === 1) {
                            e.currentTarget.currentTime = 5; // Lavent 5 seconds
                          } else {
                            e.currentTarget.currentTime = 2; // Others 2 seconds
                          }
                        }}
                      />
                      <button
                        onClick={(e) => toggleVideo(e, index + 1)}
                        className="absolute top-2 left-2 bg-gradient-to-t from-black/60 via-black/20 to-black/40 hover:from-black/70 hover:via-black/30 hover:to-black/50 transition-all duration-500 cursor-pointer z-10 rounded-full"
                        type="button"
                      >
                      <div className="w-6 h-6 rounded-full bg-luxury-gold-300/95 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-luxury-gold-300/30">
                          {playingVideos[index + 1] ? (
                          <Pause className="w-2 h-2 text-black" />
                          ) : (
                          <Play className="w-2 h-2 text-black ml-0.5" />
                          )}
                        </div>
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.svg
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 + (index * 0.1) + (i * 0.1), duration: 0.3 }}
                              className="w-2 h-2 text-luxury-gold-300 drop-shadow-sm"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </motion.svg>
                          ))}
                        </div>
                      <h4 className="font-semibold text-luxury-gold-300 text-xs mb-1">{testimonial.name}</h4>
                        <p className="text-xs text-luxury-gold-300/80 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Text Testimonials Section */}
          <div className="hidden lg:block mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
                <div className="max-w-7xl mx-auto">
                  {/* All Text Testimonials in One Row */}
                  <div className="relative">
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2" id="testimonials-scroll">
                      {testimonials.slice(4).map((testimonial, index) => (
                  <motion.div
                    key={4 + index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="w-[600px] h-80 flex-shrink-0"
                  >
                      <LuxuryCard className="p-4 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-md shadow-2xl h-full">
                        <div className="flex h-full">
                          {/* Left side - Quote icon */}
                          <div className="flex-shrink-0 mr-3">
                            <svg className="w-8 h-8 text-luxury-gold-300/60 mt-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                          </div>
                          
                          {/* Center - Content */}
                          <div className="flex-grow flex flex-col justify-between min-w-0">
                            <p className="text-base text-luxury-gold-100 font-medium italic leading-relaxed">
                            "{testimonial.content}"
                          </p>
                            
                            {/* Bottom - Rating and Author */}
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <motion.svg
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.0 + (index * 0.1) + (i * 0.1), duration: 0.3 }}
                                    className="w-4 h-4 text-luxury-gold-300 drop-shadow-sm"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </motion.svg>
                                ))}
                              </div>
                              <div className="text-right">
                                <h4 className="font-semibold text-luxury-gold-300 text-base mb-0">{testimonial.name}</h4>
                                <p className="text-base text-luxury-gold-300/80 font-medium">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </LuxuryCard>
                    </motion.div>
                    ))}
                    </div>
                    
                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-6 space-x-3">
                      {Array.from({ length: testimonials.slice(4).length }, (_, i) => (
                        <button
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeDot === i 
                              ? 'bg-luxury-gold-300 scale-125' 
                              : 'bg-luxury-gold-300/30 hover:bg-luxury-gold-300/60 hover:scale-110'
                          }`}
                          onClick={() => {
                            const scrollContainer = document.getElementById('testimonials-scroll');
                            if (scrollContainer) {
                              const cardWidth = 600 + 24; // card width + gap
                              scrollContainer.scrollTo({
                                left: i * cardWidth,
                                behavior: 'smooth'
                              });
                            }
                          }}
                        />
                      ))}
                      </div>
                  </div>
                </div>
            </motion.div>
                  </div>
                  
          {/* Mobile Text Testimonials Section */}
          <div className="lg:hidden mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-7xl mx-auto px-4"
            >
            <motion.div 
                className="flex gap-8 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide items-stretch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              >
              {testimonials.slice(4).map((testimonial, index) => (
                <motion.div
                  key={4 + index}
                    className="w-[300px] flex-shrink-0 flex"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                    <LuxuryCard className="p-4 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-md shadow-2xl flex flex-col w-full">
                      <div className="flex flex-1">
                      <div className="flex-shrink-0 mr-3">
                        <svg className="w-6 h-6 text-luxury-gold-300/60 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      <div className="flex-grow flex flex-col justify-between min-w-0 h-full">
                          <p className="text-sm text-luxury-gold-100 font-medium italic leading-relaxed flex-1 overflow-hidden">
                          "{testimonial.content}"
                        </p>
                          <div className="mt-3 flex items-center justify-between flex-shrink-0">
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.svg
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6 + (index * 0.1) + (i * 0.1), duration: 0.3 }}
                                className="w-3 h-3 text-luxury-gold-300 drop-shadow-sm"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </motion.svg>
                            ))}
                          </div>
                          <div className="text-right">
                            <h4 className="font-semibold text-luxury-gold-300 text-sm mb-0">{testimonial.name}</h4>
                              <p className="text-xs text-luxury-gold-300/80 font-medium">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 