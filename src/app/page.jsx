"use client";
import HomepageHeroImages from "@/components/Homepage/HomepageHeroImages";
import Loader from "@/components/Homepage/Loader";
import LoginSplashScreen from "@/components/Homepage/LoginOptions";
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
        <motion.main {...basicOpacityAnimate} className="main-container">
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
          <HomepageHeroImages isTimerActive={isTimerActive} />
        </motion.main>
      )}
    </>
  );
}
