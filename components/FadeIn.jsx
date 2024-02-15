"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, classname }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5 }}
      className={classname}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
