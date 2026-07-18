import {
  RiCss3Line,
  RiGithubFill,
  RiHtml5Line,
  RiJavascriptLine,
  RiReactjsLine,
} from "react-icons/ri";
import { SiTailwindcss, SiSupabase, SiPostgresql, SiChakraui } from "react-icons/si"; 
import { motion } from "framer-motion";

// Icon animation variants
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* ✅ All icons wrapped in one flex container */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center gap-6 flex-wrap"
      >
        {/* HTML Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
          <RiHtml5Line className="text-7xl text-orange-600" />
        </motion.div>

        {/* CSS Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <RiCss3Line className="text-7xl text-blue-500" />
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)}>
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>

        {/* React Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
          <SiTailwindcss className="text-7xl text-teal-400" />
        </motion.div>

        {/* Chakra UI Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)}>
          <SiChakraui className="text-7xl text-teal-500" />
        </motion.div>

        {/* Supabase Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiSupabase className="text-7xl text-emerald-500" />
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
          <SiPostgresql className="text-7xl text-sky-600" />
        </motion.div>

        {/* GitHub Icon */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)}>
          <RiGithubFill className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;