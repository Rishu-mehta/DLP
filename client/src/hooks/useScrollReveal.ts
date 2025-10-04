import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      start = "top 80%",
      end = "top 20%",
      scrub = false,
      markers = false,
    } = options;

    const animation = gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          toggleActions: "play none none none",
          scrub,
          markers,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [options.start, options.end, options.scrub, options.markers]);

  return ref;
}
