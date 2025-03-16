import {useState, useEffect } from 'react'
import './App.css'
import { answer, checkWord } from './createAnswer'
import {SvgDrawer} from './svgDrawer'
import SVGGrid from './svgExperimental'

function App() {
  const [keyPresses, setKeyPresses] = useState([])
  const [answerWord] = useState(answer());
  const [attempt, setAttempt] = useState(0)

  const wordlength = 5;
  const attemptLimit = 5;



  useEffect(() => {
    const onKeyDown = (e) => {
    if(attempt < attemptLimit){
      if(keyPresses.length < wordlength){
        const updatedKeyPresses = [...keyPresses,e.key];
        setKeyPresses(updatedKeyPresses);
        console.log(e.key)
        checkWord(updatedKeyPresses, answerWord);
      }
      else{
        setAttempt(attempt+1);
        setKeyPresses([e.key]);
        console.log(e.key)
        checkWord(e.key, answerWord);
      }
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
      <SVGGrid letter={keyPresses}/>
    </>
  )
}

export default App
