import React, { useEffect, useRef } from "react";
import "../../styles/toast.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  hideToastAction,
  showToastAction,
} from "@/redux/reducers/toastReducer";

export const ToastContainer = React.memo(() => {
  const intervalRef = useRef(null);
  const toastReducerData = useSelector((props) => props?.toastReducer);

  useEffect(() => {
    if (toastReducerData?.isActive) {
      intervalRef.current = setTimeout(() => {
        hideToast();
      }, toastReducerData?.timeOut);
      return () => {
        if (!toastReducerData.isActive) hideToast();
        clearTimeout(intervalRef.current);
      };
    }
  }, [toastReducerData]);

  return (
    <AnimatePresence>
      {toastReducerData?.isActive && (
        <motion.div
          initial={{ opacity: 0, bottom: 0 }}
          animate={{ opacity: 1, bottom: 30 }}
          transition={{
            duration: 0.5,
          }}
          exit={{ opacity: 0 }}
          className={`toast-container`}
        >
          <div className="toast-icon relative">
            <Image
              alt="toast icon"
              src="/assets/icons/fi_3502518.svg"
              fill
              style={{ objectFit: "contain", padding: "4px" }}
            />
          </div>
          <p className="toast-title">{toastReducerData?.title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export const showToast = (props = {}) => {
  const store = require("@/redux/store/store").store;
  store.dispatch(showToastAction(props));
};

export const hideToast = () => {
  const store = require("@/redux/store/store").store;
  store.dispatch(hideToastAction());
};
