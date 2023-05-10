
// import s from './Counter.module.css'
import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    const newTotalClicks = counterA + counterB;
    setTotalClicks(newTotalClicks);
    document.title = `Всего кликнули ${newTotalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>

      <p>Всего кликнули {totalClicks} раз</p>
    </>
  );
}

export default Counter;