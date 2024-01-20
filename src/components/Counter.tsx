import { useState } from 'react';

import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.button}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
