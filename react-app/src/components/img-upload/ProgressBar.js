import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import "./ProgressBar.css";
import { useAuth } from "../../contexts/AuthContext";

const ProgressBar = ({ file, setFile }) => {
  const { currentUser } = useAuth();
  const { url, progress } = useStorage(file, currentUser);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
