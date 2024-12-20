"use client";
import Loader from "@/components/Homepage/Loader";
import LoginSplashScreen from "@/components/Homepage/LoginSplashScreen";
import useTimer from "@/hooks/useTimer";
import { basicOpacityAnimate } from "@/utils/framerAnimate";
import { motion } from "framer-motion";

import Image from "next/image";
import { useLayoutEffect } from "react";
export default function Home() {
  const { isTimerActive, startTimer } = useTimer(1);

  useLayoutEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      {isTimerActive ? (
        <Loader />
      ) : (
        <motion.main {...basicOpacityAnimate} className="main-container ">
          <div className="login-flow-container page-padding-x">
            <div className="relative">
              <Image
                src={"./assets/logo/TT Logo White.svg"}
                alt="turf town logo"
                layout="intrinsic"
                height={0}
                width={100}
                style={{ objectFit: "contain" }}
                priority={true}
              />
            </div>
            <LoginSplashScreen />
          </div>
          <div className="login-image-container relative page-padding-l">
            <motion.div
              className="login-image-container-front"
              initial={{ opacity: 0, top: "60%", left: -100 }}
              animate={{
                opacity: isTimerActive ? 0 : 1,
                top: "50%",
                left: -10,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
              animate={{
                opacity: isTimerActive ? 0 : 1,
                top: "40%",
                right: 10,
              }}
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
              {...basicOpacityAnimate}
              transition={{ delay: 1 }}
            >
              <p>Lets keep the world playing!</p>
            </motion.div>
          </div>
        </motion.main>
      )}
    </>
  );
}
