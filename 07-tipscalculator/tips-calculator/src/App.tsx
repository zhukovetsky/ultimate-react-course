import { useState } from 'react'
import './App.css'
import { Total } from './components/total'
import { Amounts } from './components/amounts';

function App() {
  const [bill, setBill] = useState(0);
  const [myEval, setMyEval] = useState(10);
  const [friendsEval, setFriendsEval] = useState(10);

  const tips = (myEval + friendsEval) / 2;

  return <>
    <Amounts bill={bill} setBill={setBill} myEval={myEval} setMyEval={setMyEval} friendsEval={friendsEval} setFriendsEval={setFriendsEval} />
    <Total bill={bill} tips={tips} />
  </>
}

export default App
