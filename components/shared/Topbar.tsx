"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "@/assets/loading.json";
import Link from "next/link";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <nav className="fixed top-0 z-30 w-full flex items-center justify-between px-6 py-3 bg-gray-700">
      <Link href={"/"} className="flex items-center ">
        <div className="w-10 h-10 items-center">
          <Lottie animationData={animationData} loop={false} />
        </div>
        <motion.p
          className="text-lg text-slate-300 font-medium"
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          Sync<span className="text-green-400">Sphere</span>
        </motion.p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden"></div>
      </div>
    </nav>
  );
};

export default Topbar;
