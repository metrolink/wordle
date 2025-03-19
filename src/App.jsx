import {useState, useEffect } from 'react'
import './App.css'
import { answer, checkWord, validateAnswer} from './createAnswer'
import SVGGrid from './svgDrawer'
import TempMessage from './notification/invalidMessage.jsx';
import Congrats from './congratulationsBox/congratsModal.jsx';
import FailedAttempt from './congratulationsBox/failedModal.jsx';

function App() {
  const [answerWord, setAnswerWord] = useState(answer());
  const [attempt, setAttempt] = useState(0)
  const [fullWords, setFullWords] = useState([])
  const [finished, setFinished] = useState(false)
  const [wrongWord, setWrongWord] = useState(false)

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
              else{
                setWrongWord(true)
                console.log(wrongWord)
              }
            }
          }
          else{
            setWrongWord(false)
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

   const handleResetModal = () => {
    setAnswerWord(answer());
    setAttempt(0);
    setFullWords([]);
    setFinished(false);
    setWrongWord(false);

  };



  return (
    <>
      <div> 
        <TempMessage wrong={wrongWord}/>
      </div>
      <div>
        <Congrats isOpen={finished} answer={answerWord} onClose={handleResetModal}/>
      </div>
      <div>
        <FailedAttempt isOpen={(attempt >= attemptLimit)} answer={answerWord} onClose={handleResetModal}/>
      </div>
      <h1>Wordle</h1>
      <p>Press buttons on your keyboard to begin</p>
      <SVGGrid letter={fullWords}/>
    </>
  )
}

export default App
