import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check if online
  const [onlineStatus, useOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      useOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      useOnlineStatus(true);
    });
  }, []);

  // return a bollean value
  return onlineStatus;
};

export default useOnlineStatus;
