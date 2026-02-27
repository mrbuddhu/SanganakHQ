'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import Link from 'next/link';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import { testimonials } from '@/data/testimonials';

const videoTestimonials = testimonials.filter((t) => t.type === 'video');
const textTestimonials = testimonials.filter((t) => t.type === 'text');

const landscapeVideos = videoTestimonials.filter((v) => v.orientation === 'landscape');
const portraitVideos = videoTestimonials.filter((v) => v.orientation === 'portrait');

const cardBase =
  'rounded-2xl border border-white/[0.08] bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#c6a255]/30 hover:shadow-[0_0_30px_-5px_rgba(198,162,85,0.12)]';

export default function TestimonialsSection() {
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});

  const toggleVideo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const video = document.getElementById(id) as HTMLVideoElement;
    if (!video) return;
    if (video.paused) {
      document.querySelectorAll('video[id^="wall-video-"]').forEach((v) => {
        const el = v as HTMLVideoElement;
        if (el.id !== id && !el.paused) {
          el.pause();
          el.muted = true;
        }
      });
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
      setPlayingVideos((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlayingVideos((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleVideoEnd = (id: string) => setPlayingVideos((p) => ({ ...p, [id]: false }));
  const handleVideoError = (id: string) => setVideoErrors((p) => ({ ...p, [id]: true }));

  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-24 bg-[#000000] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryHeading
          title="Wall of Love"
          subtitle="Hear from our distinguished clients who achieved measurable growth, market leadership, and exceptional ROI"
        />

        {/* Bento: one filled, cohesive container with fixed layout */}
        <div className="w-full mt-12 sm:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-4 sm:p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
          >
            {/* Row 1: landscape videos (single one spans full width) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {landscapeVideos.slice(0, 2).map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  className={`${cardBase} aspect-video min-h-[180px] sm:min-h-[200px] ${landscapeVideos.length === 1 ? 'sm:col-span-2' : ''}`}
                >
                  {item.videoUrl && !videoErrors[`wall-video-l${i}`] && (
                    <>
                      <div className="relative w-full h-full">
                        <video
                          id={`wall-video-l${i}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          src={item.videoUrl}
                          onEnded={() => handleVideoEnd(`wall-video-l${i}`)}
                          onError={() => handleVideoError(`wall-video-l${i}`)}
                          playsInline
                          preload="metadata"
                          muted
                          loop
                          onLoadedMetadata={(e) => {
                            e.currentTarget.currentTime = i === 1 ? 5 : 2;
                          }}
                        />
                        <button
                          type="button"
                          onClick={(e) => toggleVideo(e, `wall-video-l${i}`)}
                          className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#c6a255] flex items-center justify-center text-black z-10 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-[0_2px_12px_rgba(198,162,85,0.4)] ring-2 ring-black/20"
                          aria-label={playingVideos[`wall-video-l${i}`] ? 'Pause' : 'Play'}
                        >
                          {playingVideos[`wall-video-l${i}`] ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5" />
                          )}
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-8">
                          <div className="flex gap-1 mb-1">
                            {[...Array(item.rating)].map((_, j) => (
                              <span key={j} className="w-2 h-2 rounded-full bg-[#c6a255]" aria-hidden />
                            ))}
                          </div>
                          <p className="font-semibold text-[#c6a255] text-sm">{item.name}</p>
                          <p className="text-xs text-white/80">{item.role}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Row 2: two portrait videos + two text cards — fills one row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
              {portraitVideos.slice(0, 2).map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  className={`${cardBase} aspect-[3/4] min-h-[240px] sm:min-h-[280px]`}
                >
                  {item.videoUrl && !videoErrors[`wall-video-p${i}`] && (
                    <>
                      <div className="relative w-full h-full">
                        <video
                          id={`wall-video-p${i}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          src={item.videoUrl}
                          onEnded={() => handleVideoEnd(`wall-video-p${i}`)}
                          onError={() => handleVideoError(`wall-video-p${i}`)}
                          playsInline
                          preload="metadata"
                          muted
                          loop
                          onLoadedMetadata={(e) => {
                            e.currentTarget.currentTime = 2;
                          }}
                        />
                        <button
                          type="button"
                          onClick={(e) => toggleVideo(e, `wall-video-p${i}`)}
                          className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#c6a255] flex items-center justify-center text-black z-10 hover:scale-105 active:scale-95 transition-transform duration-200 shadow-[0_2px_12px_rgba(198,162,85,0.4)] ring-2 ring-black/20"
                          aria-label={playingVideos[`wall-video-p${i}`] ? 'Pause' : 'Play'}
                        >
                          {playingVideos[`wall-video-p${i}`] ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5" />
                          )}
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 pt-8">
                          <div className="flex gap-1 mb-1">
                            {[...Array(item.rating)].map((_, j) => (
                              <span key={j} className="w-2 h-2 rounded-full bg-[#c6a255]" aria-hidden />
                            ))}
                          </div>
                          <p className="font-semibold text-[#c6a255] text-sm">{item.name}</p>
                          <p className="text-xs text-white/80">{item.role}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
              {textTestimonials.slice(0, 2).map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  className={`${cardBase} flex flex-col min-h-[240px] sm:min-h-[280px] p-4 sm:p-5`}
                >
                  <div className="flex flex-1 min-h-0">
                    <span className="flex-shrink-0 mr-3 text-[#c6a255]/50" aria-hidden>
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </span>
                    <div className="flex-grow flex flex-col justify-between min-w-0">
                      <p className="text-sm sm:text-[15px] text-white/92 font-medium italic leading-relaxed overflow-y-auto max-h-[180px] sm:max-h-[220px] pr-1 [scrollbar-width:thin] [scrollbar-color:rgba(198,162,85,0.35)_transparent]">
                        &ldquo;{item.content}&rdquo;
                      </p>
                      <div className="mt-4 flex items-center justify-between flex-shrink-0">
                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, j) => (
                            <span key={j} className="w-2 h-2 rounded-full bg-[#c6a255]" aria-hidden />
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#c6a255] text-sm">{item.name}</p>
                          <p className="text-xs text-white/70">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: two wide text cards — each spans half on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              {textTestimonials.slice(2, 4).map((item, i) => (
                <motion.div
                  key={item.name + i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2 }}
                  className={`${cardBase} flex flex-col min-h-[200px] sm:min-h-[240px] p-4 sm:p-5`}
                >
                  <div className="flex flex-1 min-h-0">
                    <span className="flex-shrink-0 mr-3 text-[#c6a255]/50" aria-hidden>
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </span>
                    <div className="flex-grow flex flex-col justify-between min-w-0">
                      <p className="text-sm sm:text-[15px] text-white/92 font-medium italic leading-relaxed overflow-y-auto max-h-[140px] sm:max-h-[180px] pr-1 [scrollbar-width:thin] [scrollbar-color:rgba(198,162,85,0.35)_transparent]">
                        &ldquo;{item.content}&rdquo;
                      </p>
                      <div className="mt-4 flex items-center justify-between flex-shrink-0">
                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, j) => (
                            <span key={j} className="w-2 h-2 rounded-full bg-[#c6a255]" aria-hidden />
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-[#c6a255] text-sm">{item.name}</p>
                          <p className="text-xs text-white/70">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-black bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] shadow-[0_2px_16px_rgba(198,162,85,0.25)] hover:shadow-[0_4px_24px_rgba(198,162,85,0.4)] transition-shadow duration-300"
              >
                View more
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
