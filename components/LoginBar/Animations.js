// Define parameters for Drop Down Animated Menu Background
export const variantsMenu = {
  hidden: {
    opacity: 1,
    y: -205,
    transition: {
      duration: 0.7,
      delay: 0.2,
      type: "Tween",
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: -30,
  },
};

// Define parameters for Drop Down Animated Menu List
export const variantsList = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.4,
      staggerChildren: 0.6,
    },
  },
};

// Define parameters for Drop Down Animated Menu Items
export const variantsItem = {
  hidden: { x: 0, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    delay: 0.4,
  },
};
