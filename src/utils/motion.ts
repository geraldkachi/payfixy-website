import { TargetAndTransition, Variants } from "framer-motion"

// interface Props {
//   direction?: string
//   type?: string
//   delay?: string | number
//   duration?: string | number
//   staggerChildren?: string | number
//   delayChildren?: string | number
// }

export const navVariants = {
  hidden: {
      opacity: 0,
      y: -50,
      transition: {
          type: 'spring',
          stiffness: 300,
          damping: 140,
      },
  },
  show: {
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring',
          stiffness: 80,
          delay: .2,
      },
  },
} as Variants;

export const textVariant = (delay?: string|number) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

  // export const fadeIn = ({ direction, type, delay, duration }: Props) => {
    export const fadeIn: any = (direction?: string | number, type?: string | number, delay?: string | number, duration?: string | number) => {
      return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  

  // export const zoomIn = ({ delay, duration }: Props)  => {
    export const zoomIn: any = (delay?: string, duration?: string) => {
      return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  // export const slideIn = ({ direction, type, delay, duration }: Props) => {
    export const slideIn: any = (direction?: string | number, type?: string, delay?: string | number, duration?: string | number) => {
      return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

// export const staggerContainer = ({ staggerChildren, delayChildren }: Props) => {
  export const staggerContainer: TargetAndTransition | any = (staggerChildren?: string | number, delayChildren?: string | number) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };


export const textContainer = {
    hidden: {
        opacity: 0,
    },
    show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
};

  // Next 13


  export const planetVariants = ( direction?: string ) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : '100%',
        rotate: 120,
    },
    show: {
        x: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            duration: 1.8,
            delay: 0.5,
        },
    },
});
  
export const footerVariants = {
  hidden: {
      opacity: 0,
      y: 50,
      transition: {
          type: 'spring',
          stiffness: 300,
          damping: 140,
      },
  },
  show: {
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring',
          stiffness: 80,
          delay: 0.5,
      },
  },
};