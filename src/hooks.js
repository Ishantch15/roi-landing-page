import { useState, useEffect, useRef } from 'react';

export function useJivoChat() {
  useEffect(() => {
    if (window.jivo_api) {
      console.log('JivoChat API available');
    }
  }, []);
}

export function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export function useCountUp(target, decimals = 0, duration = 1800, threshold = 0.3) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const steps = 60;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(parseFloat((eased * target).toFixed(decimals)));
            if (step >= steps) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, duration, threshold]);

  return [ref, value];
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}
