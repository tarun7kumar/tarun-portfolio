import { useState, useEffect } from 'react';

export default function useScrollSpy(ids = ['hero', 'skills', 'projects', 'contact'], offset = 120) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(ids[i]);
          return;
        }
      }
      setActiveId('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
