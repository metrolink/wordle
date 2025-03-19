import wordList from '../wordlist.json'
import listOfWords from './words.json'

function generateAnswer() {
    const listOfWords = wordList.words;
    const randomNumber = Math.floor(Math.random() * listOfWords.length)
    const word = listOfWords[randomNumber]
    return word;
}

export function validateAnswer(word, ans){
    

    const guess = word.splice(word.length-5,word.length)
    const guessChar = guess.map(ch => ch.char)

    const wordString = guessChar.join('');
    if(listOfWords.words.includes(wordString)){
    const colorArray = guess.map(clr => clr.color)
    const keys = [];
    for (let i = 0; i < guess.length; i++) {
       if(guessChar[i] === ans[i]){
        colorArray[i] = 'green';
       }
       else if(ans.includes(guessChar[i])){
        
        let regEx = new RegExp(`${guessChar[i]}`, 'g')
        console.log(wordString.match(regEx) || [])
        if((wordString.match(regEx) || []).length < 2){
        colorArray[i] = 'yellow'
       }
    }


       
        keys.push({char: guessChar[i],color: colorArray[i]})
    }

    return word.concat(keys);
    }
    else{
        console.log("not a valid word")
        return [{char: 'f', color:'black'}]
    }
}



export function checkWord(word, ans) {
    const arrayAns = ans
    let numberOfCorrect = 0;


    for (let letter of word){ 
        if (arrayAns.includes(letter.char)) {
            numberOfCorrect++;
        }
    }

    console.log(numberOfCorrect)
    if(numberOfCorrect === 5)
        return true
    //console.log(arrayAns)

    return false;
    

    
}

export function answer() {
    let ans = generateAnswer()
    return ans
}