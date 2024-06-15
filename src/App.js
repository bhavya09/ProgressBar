import "./styles.css";
import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      }
    }, 20);

    return () => {
      clearInterval(time);
    };
  }, [progress]);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} color={"lightgreen"} />
      <ProgressBar progress={progress} color={"lightblue"} />
      <ProgressBar progress={progress} color={"yellow"} />
    </div>
  );
}
