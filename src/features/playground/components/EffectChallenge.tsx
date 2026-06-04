import { Card } from "@/components/Card";
import { useEffect, useState } from "react";

export function EffectChallenge() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
      if (seconds === 59) {
        setMinutes((prev) => prev + 1);
        setSeconds(0);
        if (minutes === 59) {
          setHours((prev) => prev + 1);
          setMinutes(0);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, seconds, minutes]);

  return (
    <Card title="Effect Challenge">
      <h1 className="text-2xl font-bold mb-4 text-black">Timer</h1>
      <p className="text-xl mb-4 text-black">
        {" "}
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={toggleTimer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </Card>
  );
}
