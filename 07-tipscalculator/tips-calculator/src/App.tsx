import { useState } from 'react'
import './App.css'
import { Total } from './components/total'
import { Amounts } from './components/amounts';

function App() {
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState(0);

  function populateTotal(b: number, t: number) {
    setBill(b);
    setTips(t);
  }
  return <>
    <Amounts onTotalChange={populateTotal} />
    <Total bill={bill} tips={tips} />
  </>
}

export default App
