import { useCallback } from 'react';

const presets = {
  bounce: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 0.5 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  slide: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }
};

const useAnimation = (options = {}) => {
  const {
    type = 'fade',
    duration = 0.5,
    delay = 0,
    repeat = 0
  } = options;

  const getAnimationProps = useCallback(() => {
    const preset = presets[type] || presets.fade;

    return {
      ...preset,
      transition: {
        ...preset.transition,
        duration,
        delay,
        repeat
      }
    };
  }, [type, duration, delay, repeat]);

  return getAnimationProps();
};

export default useAnimation; 