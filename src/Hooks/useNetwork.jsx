import { useEffect, useState } from "react";
import Style from "./useNetwork.module.css";

export default function useNetwork() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function updateStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div className={`${Style.network} ${isOnline ? Style.online : Style.offline}`}>
      {isOnline ? "You are online" : "You are offline"}
    </div>
  );
}
