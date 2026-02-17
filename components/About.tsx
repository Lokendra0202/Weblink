"use client";

import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ---------- COUNT HOOK ---------- */
function useCountUp(end, duration = 1.8, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * end));

      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return count;
}

/* ---------- STAT CARD ---------- */
function StatCard({ item, fadeUp }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const number = parseInt(item.value.replace(/\D/g, ""), 10);
  const suffix = item.value.replace(/[0-9]/g, "");
  const count = useCountUp(number, 1.8, inView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ scale: 1.05 }}
      className="
        rounded-xl sm:rounded-2xl
        border border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800/60
        backdrop-blur
        p-4 sm:p-5
        shadow-sm
        transition-all duration-300
        hover:shadow-lg
      "
    >
      <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        {count}{suffix}
      </p>

      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-wide text-slate-600 dark:text-slate-400">
        {item.label}
      </p>
    </motion.div>
  );
}

/* ---------- DATA ---------- */

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Long-Term Clients" },
  { value: "13+", label: "Years Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ---------- COMPONENT ---------- */

export default function About() {
  return (
    <section
      id="about"
      className="
        relative mx-auto w-full max-w-8xl
        px-4 py-16 sm:py-20 lg:py-24
        sm:px-6 lg:px-8
        bg-white dark:bg-slate-950
        overflow-hidden
      "
    >

      {/* mobile-optimized background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        <div className="absolute left-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="
          grid grid-cols-1 lg:grid-cols-2
          items-center gap-10 lg:gap-14
          rounded-2xl sm:rounded-3xl
          border border-slate-200 dark:border-slate-800
          bg-white/90 dark:bg-slate-900/70
          backdrop-blur-xl
          p-6 sm:p-8 lg:p-14
        "
      >

        {/* LEFT */}
        <motion.div variants={fadeUp}>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-cyan-500">
            About Us
          </p>

          <h2 className="
            mt-2 sm:mt-3
            text-2xl sm:text-3xl lg:text-4xl
            font-bold text-slate-900 dark:text-white
            leading-tight
          ">
            Building Digital Success for Your Business
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            WLSPL is a multidisciplinary digital partner helping brands scale
            through modern web engineering, polished visual storytelling, and
            performance-driven marketing. We focus on execution quality, speed,
            and long-term business impact.
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Web Link Services Pvt. Ltd. believes success comes from delivering
            quality service and hiring exceptional talent. We consistently build
            innovative software solutions that create measurable value.
          </p>

          {/* stats responsive grid */}
          <motion.div
            variants={stagger}
            className="
              mt-8 sm:mt-10
              grid grid-cols-2 sm:grid-cols-3
              gap-3 sm:gap-5
            "
          >
            {stats.map((item) => (
              <StatCard key={item.label} item={item} fadeUp={fadeUp} />
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="
            relative
            rounded-2xl sm:rounded-3xl
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            p-3 sm:p-5
            shadow-xl dark:shadow-none
          "
        >
          <ImageWithSkeleton
            src="/about-illustration.svg"
            alt="Team collaborating on web and software projects"
            width={640}
            height={480}
            containerClassName="rounded-xl sm:rounded-2xl"
            className="h-auto w-full rounded-xl sm:rounded-2xl"
          />

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-indigo-500/10 via-transparent to-cyan-400/10" />

          {/* responsive floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              absolute
              -bottom-4 right-4 sm:-bottom-6 sm:right-8
              rounded-lg sm:rounded-xl
              border border-cyan-500/30
              bg-cyan-500/10
              px-3 py-2 sm:px-5 sm:py-3
              backdrop-blur
            "
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-wide text-cyan-300">
              Delivery Model
            </p>
            <p className="text-xs sm:text-sm font-semibold text-white">
              Agile • Transparent • Scalable
            </p>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}
