import wordList from '../wordlist.json'
import listOfWords from './words.json'

function generateAnswer() {
    const listOfWords = wordList.words;
    const randomNumber = Math.floor(Math.random() * listOfWords.length)
    const word = listOfWords[randomNumber]
    return word;
}

export function validateAnswer(word, ans){
    
    const wordArray = word.map(ch => ch.char)
    const wordString = wordArray.join('');
    if(listOfWords.words.includes(wordString)){
    const colorArray = word.map(clr => clr.color)
    const keys = [];
    for (let i = 0; i < wordArray.length; i++) {
       if(wordArray[i] === ans[i]){
        colorArray[i] = 'green';
       }
       else if(ans.includes(wordArray[i])){
        if((wordString.match(/${ans[i]}/) || []).length > 1){
        colorArray[i] = 'yellow'
       }
    }


       
        keys.push({char: wordArray[i],color: colorArray[i]})
    }

    return keys;
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