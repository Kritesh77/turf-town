import { useEffect, useRef } from "react";
import "../../styles/toast.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const Toast = ({ toast, setToast }) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (toast?.timeOut) {
      intervalRef.current = setTimeout(() => {
        setToast({ isActive: false });
      }, toast?.timeOut);
      return () => {
        clearTimeout(intervalRef.current);
      };
    }
  }, [toast]);

  return (
    <AnimatePresence>
      {toast?.isActive && (
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
          <p className="toast-title">{toast?.title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Toast;
