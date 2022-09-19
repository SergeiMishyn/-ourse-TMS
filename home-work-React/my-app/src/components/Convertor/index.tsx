import { link } from 'fs';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { Input } from '../Input';
import styles from './style.module.css';




export const Converter = () => {
  const [pln,setPL] = useState("")
  const [usd,setDollar] = useState("")
  // const [activeRate,activeRate] = useState(0)



  const handlePL: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value)
    if (!isNaN(num)) {
    setPL(event.target.value);
    setDollar(`${(num / 4.75).toFixed(2)} `) ;
    }
  }

  const handleDollar: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value)
    if (!isNaN(num)) {
    setDollar(event.target.value);
    setPL(`${(num * 4.75).toFixed(2)}`);
    }
  }
  

  return(
    <div>
      <h1 className={styles.title}>Live currency converter</h1>
      <div>
        <h3>PLN</h3>
        <Input  value={pln}  onChange={handlePL}/>
        <h3>USD</h3>
        <Input  value={usd}  onChange={handleDollar}/>
        
      </div>
    </div>
  )
};
