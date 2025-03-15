import {useState, useEffect } from 'react'
import './App.css'
import { answer, checkWord } from './createAnswer'

function App() {
  const [keyPresses, setKeyPresses] = useState([])
  const [answerWord] = useState(answer());



  useEffect(() => {
    const onKeyDown = (e) => {
     if(keyPresses.length < 5){
      const updatedKeyPresses = [...keyPresses,e.key];
      setKeyPresses(updatedKeyPresses);
      console.log(e.key)
      checkWord(updatedKeyPresses, answerWord);
     }
     else{
      setKeyPresses([e.key]);
      console.log(e.key)
      checkWord(e.key, answerWord);
     }
    }
   
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
   })

  return (
    <>
      <h1>Wordle</h1>
      <p>Press buttons on your keyboard to begin</p>
      <div className="card">
        <p>
          your letters are: {keyPresses.toString()}
          <br/>
          answer is:{answerWord}
        </p>
      </div>
    </>
  )
}

export default App
