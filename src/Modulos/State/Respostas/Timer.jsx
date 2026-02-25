import { useState } from "react";

const Timer = () => {
  const [val, setVal] = useState();
  const [isTimerOn, setIsTimerOn] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const handleClick = () => {
    if (intervalId) return;

    const start = Number(val);

    if (!Number.isFinite(start) || start <= 0) {
      setIsTimerOn(0);
      return;
    }

    setIsTimerOn(start);

    const id = setInterval(() => {
      setIsTimerOn((prev) => {
        const current = typeof prev === "number" ? prev : start;

        if (current <= 1) {
          clearInterval(id);
          setIntervalId(null);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    setIntervalId(id);
    setVal("");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setVal(value);
  };

  const handleStop = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <form>
      <label htmlFor="" className="font-mono text-xs block mb-1.5">
        defina os segundos
      </label>
      <div className="inline-flex items-start gap-3">
        <input
          type="number"
          className="min-w-20! max-w-20!"
          onChange={handleOnChange}
          value={val}
        />
        <button
          type="button"
          onClick={handleClick}
          className="h-10 rounded cursor-pointer transition-colors text-white bg-indigo-500 hover:bg-indigo-700 px-3 text-xs font-mono uppercase shadow-xl"
        >
          iniciar
        </button>
      </div>

      {isTimerOn > 0 && (
        <span className="inline-flex justify-center items-center text-xl ml-5 font-medium uppercase mt-2 bg-amber-500 rounded-full w-20 h-20">
          {isTimerOn}
        </span>
      )}

      {isTimerOn === 0 && (
        <span className="block text-xs font-medium text-red-600 uppercase mt-2">
          Tempo esgotado!
        </span>
      )}
    </form>
  );
};

export default Timer;
