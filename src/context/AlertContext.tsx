"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "./AlertContext.module.css";

type Alert = {
  type: "info" | "danger" | "success" | "warning";
  message: string;
};

type AlertContextState = {
  alert: Alert | null;
  setAlert: (alert: Alert | null) => void;
};

const AlertContext = createContext<AlertContextState | null>(null);

export default function AlertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alert, setAlert] = useState<Alert | null>(null);
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    }
  }, [alert]);
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {alert?.type === "danger" && (
        <div className={`${styled.container} ${styled.danger}`}>
          <button className={styled.closebtn} onClick={() => setAlert(null)}>
            &times;
          </button>
          <strong>{alert.message}</strong>
        </div>
      )}
      {alert?.type === "success" && (
        <div className={`${styled.container} ${styled.success}`}>
          <button className={styled.closebtn} onClick={() => setAlert(null)}>
            &times;
          </button>
          <strong>{alert.message}</strong>
        </div>
      )}
      {alert?.type === "info" && (
        <div className={`${styled.container} ${styled.info}`}>
          <button className={styled.closebtn} onClick={() => setAlert(null)}>
            &times;
          </button>
          <strong>{alert.message}</strong>
        </div>
      )}
      {alert?.type === "warning" && (
        <div className={`${styled.container} ${styled.warning}`}>
          <button className={styled.closebtn} onClick={() => setAlert(null)}>
            &times;
          </button>
          <strong>{alert.message}</strong>
        </div>
      )}
      {children}
    </AlertContext.Provider>
  );
}

// Context를 추후 더 편하게 사용할 수 있도록 만든 Hook입니다.
export function useAlertState() {
  const alertState = useContext(AlertContext);
  if (!alertState) {
    throw new Error("AlertContext is not used");
  }
  return alertState;
}
