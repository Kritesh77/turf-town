import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Enter animation
      animate={{ opacity: 1 }} // During visible state
      exit={{ opacity: 0 }}
      className="main-container grid-cols-2 "
    >
      <div className="page-padding-x login-flow-container">
        <div className="relative animate-container-logo"></div>
        <div className="login-text-container animate-loading">
          <h1 className="animate-container-lg login-flow-title animate-loading"></h1>
          <p className="animate-container-md login-flow-subtitle animate-loading"></p>
        </div>
        <div className="login-btn-containers animate-loading ">
          <div className="btn animate-container-lg"></div>
          <div className="text-center separator"></div>
          <div className="">
            <div className="btn animate-container-lg"></div>
            <div className="btn animate-container-lg"></div>
          </div>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Loader;
