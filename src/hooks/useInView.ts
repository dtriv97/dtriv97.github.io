import { RefObject, useEffect, useState } from 'react';

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  { threshold = 0.2, rootMargin = '0px 0px -10% 0px' }: UseInViewOptions = {}
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return inView;
};
