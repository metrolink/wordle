import {useState, useEffect } from 'react'
import './App.css'
import { answer, checkWord, validateAnswer} from './createAnswer'
import SVGGrid from './svgExperimental'

function App() {
  const [answerWord] = useState(answer());
  const [attempt, setAttempt] = useState(0)
  const [fullWords, setFullWords] = useState([])
  const [finished, setFinished] = useState(false)

  const wordlength = 5;
  const attemptLimit = 5;

  function handleInput(button){
    if(button.key.length < 2){
      if(attempt < attemptLimit){
        if(!finished){
          if((fullWords.length % wordlength) > 0){
            const updatedFullWords = [...fullWords,{char:button.key, color: 'lightgrey'}]
            setFullWords(updatedFullWords)

            if ((fullWords.length % wordlength) === wordlength -1){
              const checkedWord = validateAnswer(updatedFullWords, answerWord);
              setFinished(checkWord(checkedWord))
              setFullWords(checkedWord)
              
              if(checkedWord !== updatedFullWords){
              setAttempt(attempt+1);
              }
            }
          }
          else{
            setFullWords([...fullWords,{char:button.key, color: 'lightgrey'}])
          }
        }
      }
    }
  }

  useEffect(() => {
    const onKeyDown = (e) => {
    handleInput(e)
    }
   
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
   })

  return (
    <>
      <h1>Wordle</h1>
      <p>Press buttons on your keyboard to begin</p>
      <SVGGrid letter={fullWords}/>
      <div className="card">
        <p>
          answer is:{answerWord}
        </p>
      </div>
    </>
  )
}

export default App
