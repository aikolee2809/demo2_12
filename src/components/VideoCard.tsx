import { useRef, useEffect } from 'react';
import type { VideoItem } from '@/data/videoData';

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const el = videoRef.current;
    if (!container || !el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.muted = true;
            el.defaultMuted = true;
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative h-full w-full overflow-hidden rounded-none bg-[#E8D8D5] shadow-[0_2px_12px_rgba(52,40,45,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(52,40,45,0.12)]"
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        className="h-full w-full object-cover"
      />

      {/* Subtle bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
    </div>
  );
}
