import React, { useEffect, useState, useRef } from 'react';

const StatCounter = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const end = parseInt(target, 10);
        if (isNaN(end)) return;
        
        const totalMiliseconds = duration;
        const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
        
        const timer = setInterval(() => {
          start += Math.ceil(end / (totalMiliseconds / stepTime));
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, stepTime);
        
        observer.unobserve(elementRef.current);
      }
    });

    observer.observe(elementRef.current);
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

export default StatCounter;
