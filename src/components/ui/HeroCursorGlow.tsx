import { RefObject, useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type HeroCursorGlowProps = {
  sectionRef: RefObject<HTMLElement>;
};

export const HeroCursorGlow = ({ sectionRef }: HeroCursorGlowProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    let raf = 0;

    const onMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      target.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      visible.current = true;
      glow.style.opacity = '1';
    };

    const onLeave = () => {
      visible.current = false;
      glow.style.opacity = '0';
    };

    const animate = () => {
      if (visible.current) {
        current.current.x += (target.current.x - current.current.x) * 0.1;
        current.current.y += (target.current.y - current.current.y) * 0.1;
        glow.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion, sectionRef]);

  if (prefersReducedMotion) return null;

  return <div ref={glowRef} className="hero-cursor-glow" aria-hidden="true" />;
};
