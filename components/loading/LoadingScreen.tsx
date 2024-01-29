import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import animationData from "@/assets/loading.json";
import { useRouter } from "next/navigation";
import "./loading.css";

type Props = {};

const LoadingScreen = (props: Props) => {
  const controls = useAnimation();
  const [text, setText] = useState("Welcome to SyncSphere");
  const router = useRouter();

  useEffect(() => {
    controls.start({ opacity: 1 });

    const phrases = [
      "Syncing your Sphere",
      "Almost there",
      "Finalizing",
      "Done",
    ];
    let index = 0;

    const intervalId = setInterval(() => {
      controls.start({ opacity: 0 });
      setTimeout(() => {
        if (index == phrases.length - 1) {
          controls.start({ opacity: 1 });
          index = (index + 1) % phrases.length;
          router.push("/onboarding");
        } else {
          setText(phrases[index]);
          controls.start({ opacity: 1 });
          index = (index + 1) % phrases.length;
        }
      }, 300);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [controls, router]);

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        className="w-24"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Lottie animationData={animationData} autoPlay />
      </motion.div>
      <div className="glitch-container">
        <motion.p
          className="glitch-text text-[#5dc960] text-md font-[500]"
          initial={{ opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
