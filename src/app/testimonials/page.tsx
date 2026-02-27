'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { testimonials } from '@/data/testimonials';

const videoTestimonials = testimonials.filter((t) => t.type === 'video');
const textTestimonials = testimonials.filter((t) => t.type === 'text');

export default function TestimonialsPage() {
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>({});
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});

  const toggleVideo = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const video = document.getElementById(`page-video-${index}`) as HTMLVideoElement;
    if (!video) return;
    if (video.paused) {
      document.querySelectorAll('video[id^="page-video-"]').forEach((v) => {
        const el = v as HTMLVideoElement;
        if (el.id !== video.id && !el.paused) {
          el.pause();
          el.muted = true;
        }
      });
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
      setPlayingVideos((prev) => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setPlayingVideos((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <MainLayout>
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[#000000] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <LuxuryHeading
            title="Wall of Love"
            subtitle="All testimonials from our clients — video and written."
          />

          {/* Videos */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-[#c6a255] mb-4">Video testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videoTestimonials.map((item, index) => (
                <motion.div
                  key={item.name + index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`${item.orientation === 'landscape' ? 'sm:col-span-2' : ''}`}
                >
                  <div className="relative aspect-[16/9] sm:aspect-[3/4] overflow-hidden rounded-xl border border-white/[0.08] bg-black/60 min-h-[200px] sm:min-h-[240px]">
                    {!videoErrors[index] && item.videoUrl && (
                      <>
                        <video
                          id={`page-video-${index}`}
                          className="w-full h-full object-cover"
                          src={item.videoUrl}
                          onEnded={() => setPlayingVideos((p) => ({ ...p, [index]: false }))}
                          onError={() => setVideoErrors((p) => ({ ...p, [index]: true }))}
                          playsInline
                          preload="metadata"
                          muted
                          loop
                          onLoadedMetadata={(e) => {
                            if (item.orientation === 'landscape') e.currentTarget.currentTime = 2;
                            else if (index === 1) e.currentTarget.currentTime = 5;
                            else e.currentTarget.currentTime = 2;
                          }}
                        />
                        <button
                          type="button"
                          onClick={(e) => toggleVideo(e, index)}
                          className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#c6a255]/95 flex items-center justify-center text-black z-10 hover:scale-105 transition-transform"
                          aria-label={playingVideos[index] ? 'Pause' : 'Play'}
                        >
                          {playingVideos[index] ? (
                            <Pause className="w-3.5 h-3.5" />
                          ) : (
                            <Play className="w-3.5 h-3.5 ml-0.5" />
                          )}
                        </button>
                      </>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                      <div className="flex gap-1 mb-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#c6a255]" aria-hidden />
                        ))}
                      </div>
                      <p className="font-semibold text-[#c6a255] text-xs">{item.name}</p>
                      <p className="text-xs text-white/80">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text testimonials */}
          <div className="mt-14">
            <h2 className="text-lg font-semibold text-[#c6a255] mb-4">Written testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {textTestimonials.map((item, index) => (
                <motion.div
                  key={item.name + index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <LuxuryCard className="p-5 h-full flex flex-col bg-black/40 border border-white/[0.08]">
                    <div className="flex flex-1 min-h-0">
                      <div className="flex-shrink-0 mr-3">
                        <svg
                          className="w-7 h-7 text-[#c6a255]/60 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>
                      <div className="flex-grow flex flex-col justify-between min-w-0">
                        <p className="text-base text-white/90 font-medium italic leading-relaxed">
                          &ldquo;{item.content}&rdquo;
                        </p>
                        <div className="mt-4 flex items-center justify-between flex-shrink-0">
                          <div className="flex gap-0.5">
                            {[...Array(item.rating)].map((_, i) => (
                              <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#c6a255]" aria-hidden />
                            ))}
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-[#c6a255]">{item.name}</p>
                            <p className="text-sm text-white/70">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/#testimonials"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-black bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] hover:shadow-[0_4px_20px_rgba(198,162,85,0.35)] transition-all duration-300"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
