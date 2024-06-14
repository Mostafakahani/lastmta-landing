import Menu from "@/components/menu/menu";
import React, { useEffect, useRef } from "react";
import {
  delay,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import GridEffectSection from "@/components/HeroSection/GridEffectSection";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";
const gridContainerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};
const svgIconVarinets = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgb(252, 211, 77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgb(252, 211, 77, 1)",
  },
};
const gridSquareVarients = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
function Home() {
  const { scrollYProgress: ScP } = useScroll();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const paragraphValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const paragraphValue2 = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div>
      <Menu />
      <GridEffectSection />
      <main className="text-3xl font-bold font-mono flex min-h-screen justify-center flex-col items-center p-4">
        <AnimatedCounter from={0} to={10000} />
      </main>
      <div className="flex flex-col gap-10 overflow-x-hidden">
        <motion.section
          variants={gridContainerVarients}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 p-10 gap-10"
        >
          <motion.div
            variants={gridSquareVarients}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="w-20 h-20 bg-stone-100 rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="w-20 h-20 bg-stone-100 rounded-full"
            />
          </motion.div>
          <motion.div
            variants={gridSquareVarients}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <motion.div
              className="w-1/3 h-1/3 shadow-md bg-rose-400"
              animate={{
                scale: [1, 2, 2, 1],
                rotate: [0, 90, 90, 0],
                borderRadius: ["10%", "10%", "50%", "10%"],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.div>
          <motion.div
            variants={gridSquareVarients}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d1d5db",
                color: "black",
                transition: { bounceDamping: 10, bounceStiffness: 600 },
              }}
              className="bg-emerald-600 w-1/2 py-2 rounded-lg text-2xl text-gray-100 font-light tracking-wide"
            >
              Hover me
            </motion.button>
          </motion.div>
          <motion.div
            variants={gridSquareVarients}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <motion.div
              drag
              dragConstraints={{
                left: 0,
                right: 50,
                top: 0,
                bottom: 50,
              }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 10 }}
              className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            />
          </motion.div>
          <motion.div
            variants={gridSquareVarients}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
              <motion.div
                style={{ scaleY: ScP }}
                className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              ></motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={gridSquareVarients}
            className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-1/2 stroke-amber-500 stroke-[0.5]"
            >
              <motion.path
                variants={svgIconVarinets}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: "easeInOut",
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  },
                }}
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </motion.svg>
          </motion.div>
        </motion.section>
        <section className="flex flex-col gap-10 mb-10">
          <motion.h1
            className="h1 text-5xl tracking-wide text-slate-100 text-center"
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: {
                opacity: 0,
                y: 75,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ delay: 0.3 }}
          >
            Just For test
          </motion.h1>
          <motion.p
            style={{ translateX: paragraphValue }}
            className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
          >
            هشس ایتشساتیاتشسایه شسایهعشسایهشسعایهعشس اعهیاشسعهایعهشاعهاعه
            ثغشعفیعغشسلیشسخایهعحسشلیکشستایهعح اهعشسلعی شسعه یهعشسل عهیشسلخب لشسب
          </motion.p>
          <motion.p
            style={{ translateX: paragraphValue2 }}
            className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
          >
            هشس ایتشساتیاتشسایه شسایهعشسایهشسعایهعشس اعهیاشسعهایعهشاعهاعه
            ثغشعفیعغشسلیشسخایهعحسشلیکشستایهعح اهعشسلعی شسعه یهعشسل عهیشسلخب لشسب
          </motion.p>
        </section>
      </div>
    </div>
  );
}

export default Home;
