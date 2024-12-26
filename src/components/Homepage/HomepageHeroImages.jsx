import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { basicOpacityAnimate } from "@/utils/framerAnimate";

const HomepageHeroImages = ({ isTimerActive }) => {
  return (
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
  );
};



export default React.memo(HomepageHeroImages);
