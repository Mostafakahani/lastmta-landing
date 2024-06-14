import { motion } from "framer-motion";
import Tile from "./Tile";

const GridEffectSection = () => {
  return (
    <main className="w-full relative">
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip">
        {Array.from({ length: 20 * 12 }, (_, i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10 font-poppins">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl text-neutral-100 font-black uppercase tracking-tight"
        >
          LAST MTA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-white w-1/2 text-xl text-center tracking-wide"
        >
         Irannian Game Server in MTA luncher
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-neutral-100 rounded-full text-3xl bg-indigo-700 px-10 py-3 border border-indigo-900 pointer-events-auto"
        >
          Donwload
        </motion.button>
      </div>
    </main>
  );
};

export default GridEffectSection;
