import { useEffect, useState } from "react";
import { Button } from "../Button";
import styles from "./style.module.css"

export const Timer = () => {
  let [count, setCount] = useState(0);
  let intervalId: any;
  const start = () => {
    setCount((count += 1));
  };
  useEffect(() => {
    if (count > 0) {
      intervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  });
  const stop = () => {
    clearInterval(intervalId);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p className={styles.count}>{count}</p>
      <div>
        <Button text={"start"} onClick={start} type={'secondary'}/>
        <Button text={"stop"} onClick={stop}  type={'secondary'}/>
        <Button text={"reset"} onClick={reset} type={'secondary'}/>
      </div>
    </div>
  );
};