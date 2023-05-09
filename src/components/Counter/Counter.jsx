import React , {useState}from 'react'
import s from './Counter.module.css'

export default function Counter() {
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    const handleCounterAIncrement =() => {

    }


  return (
    <>
        <button
    className={s.btn} 
    type = 'button'
    onClick={handleCounterAIncrement}
    >
    </button>
    </>

  )
}
