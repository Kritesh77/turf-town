"use client";
import Loader from "@/components/Homepage/Loader";
import LoginSplashScreen from "@/components/Homepage/LoginSplashScreen";
import useTimer from "@/hooks/useTimer";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
export default function Home() {
  const [time, setTime] = useState(1); // Timer value

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1); // Decrease time
      }, 1000);
    } else if (time === 0) {
      setIsLoading(false); // Stop when time hits 0
    }
    return () => clearInterval(timer); // Cleanup
  }, [time]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <motion.main
          initial={{ opacity: 0 }} // Enter animation
          animate={{ opacity: 1 }} // During visible state
          exit={{ opacity: 0 }} // Exit animation
          transition={{ duration: 1 }}
          className="main-container grid-cols-2"
        >
          <div className="page-padding-x login-flow-container">
            <motion.div className="relative">
              <Image
                src={"./assets/logo/TT Logo White.svg"}
                alt="turf town logo"
                layout="intrinsic"
                height={0}
                width={100}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <LoginSplashScreen />
          </div>
          <div className="login-image-container relative">
            <motion.div
              className="login-image-container-front"
              initial={{ opacity: 0, top: "60%", left: -100 }}
              animate={{ opacity: isLoading ? 0 : 1, top: "50%", left: -10 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={"/assets/images/players2.webp"}
                layout="intrinsic"
                height={0}
                alt="players and football"
                width={500}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <motion.div
              className="login-image-container-back"
              initial={{ opacity: 0, top: "50%", right: -100 }}
              animate={{ opacity: isLoading ? 0 : 1, top: "40%", right: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src={"/assets/images/players1.webp"}
                layout="intrinsic"
                height={0}
                alt="players and football"
                width={500}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <motion.div
              className="login-image-subTitle"
              initial={{ opacity: 0 }} // Enter animation
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>Lets keep the world playing!</p>
            </motion.div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
