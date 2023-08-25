export const variantsNav = {
  open: {
    clipPath: `circle(1800px at 20px 20px)`,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  closed: {
    clipPath: `circle(0px at 20px 20px)`,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0,
    },
  },
};

export const variantsList = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.8,
    },
  },
  visible: {
    transition: {
      delay: 0.8,
      delayChildren: 0.6,
      staggerChildren: 0.8,
    },
  },
};

export const variantsItem = {
  hidden: { x: -5, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    delay: 0.4,
  },
};
