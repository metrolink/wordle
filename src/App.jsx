import {useState, useEffect } from 'react'
import './App.css'
import { answer, checkWord, validateAnswer} from './wordHandler/createAnswer.jsx'
import SVGGrid from './wordHandler/wordDrawer.jsx'
import TempMessage from './notification/invalidMessage.jsx';
import Congrats from './ModalBoxes/congratsModal.jsx';
import FailedAttempt from './ModalBoxes/failedModal.jsx';
import Intro from './ModalBoxes/firstModal.jsx';

function App() {
  const [answerWord, setAnswerWord] = useState(answer());
  const [attempt, setAttempt] = useState(0)
  const [fullWords, setFullWords] = useState([])
  const [finished, setFinished] = useState(false)
  const [wrongWord, setWrongWord] = useState(false)
  const [firstTime, setFirstTime] = useState(true)

  const wordlength = 5;
  const attemptLimit = 5;

  //Should have found a way to reduce if statements in this function. And improve readability
  function handleInput(button){
    const re = new RegExp("\\b[a-zA-z]\\b")
    if((re.test(button.key)) && (attempt < attemptLimit) && (!finished)){

      const updatedFullWords = [...fullWords,{char:button.key, color: 'lightgrey'}]
      setFullWords(updatedFullWords)

      if ((fullWords.length % wordlength) === wordlength -1){

        const checkedWord = validateAnswer(updatedFullWords, answerWord);
        setFinished(checkWord(checkedWord))
        setFullWords(checkedWord)

        if(!checkWord(checkedWord)){
          if(checkedWord !== updatedFullWords){
            setAttempt(attempt+1);
          }
          else{
            setWrongWord(true)
          }
        }
      }
    }
    else if(button.key === 'Backspace'){
      fullWords.pop()
      setFullWords([...fullWords])
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

  const handleFirstModal = () => {
    setFirstTime(false)
  }



  return (
    <>
      <div> 
        <TempMessage wrong={wrongWord}/>
      </div>
      
      <h1>Wordle</h1>
      <p>Press keys on your keyboard to input words</p>
      <SVGGrid letter={fullWords} maxChar={wordlength} maxAttempts={attemptLimit}/>

      <div>
        <Congrats isOpen={finished} answer={answerWord} onClose={handleResetModal}/>
      </div>
      <div>
        <FailedAttempt isOpen={(attempt >= attemptLimit)} answer={answerWord} onClose={handleResetModal}/>
      </div>
      <div>
        <Intro isOpen={firstTime} onClose={handleFirstModal} />
      </div>
    </>
  )
}

export default App
