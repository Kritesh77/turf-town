import { useEffect, useRef } from "react";
import "../../styles/toast.css";
import Image from "next/image";
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
    <>
      {toast?.isActive && (
        <div className={`toast-container`}>
          <div className="toast-icon relative">
            <Image
              alt="toast icon"
              src="/assets/icons/fi_3502518.svg"
              fill
              style={{ objectFit: "contain", padding: "4px" }}
            />
          </div>
          <p className="toast-title">{toast?.title}</p>
        </div>
      )}
    </>
  );
};
export default Toast;
