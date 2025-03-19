import wordList from './wordlist.json'
import listOfWords from './words.json'

function generateAnswer() {
    const listOfWords = wordList.words;
    const randomNumber = Math.floor(Math.random() * listOfWords.length)
    const word = listOfWords[randomNumber]
    return word;
}

export function validateAnswer(word, ans){
    

    //extract last 5 characters
    const guess = word.splice(word.length-5,word.length)
    const guessChar = guess.map(ch => ch.char)

    const wordString = guessChar.join('');
    if(listOfWords.words.includes(wordString)){
        const colorArray = guess.map(clr => clr.color)
        const keys = [];
        for (let i = 0; i < guess.length; i++) {
        if(guessChar[i] === ans[i]){
            colorArray[i] = 'green';
            for (let j = i-1; j > 0; j--) {
                if(guessChar[i] === guessChar[j] && colorArray[j] === 'yellow'){
                    keys[j].color = 'lightgrey'
                }
            }
        }
        else if(ans.includes(guessChar[i])){

            colorArray[i] = 'yellow'
            
        }


       
            keys.push({char: guessChar[i],color: colorArray[i]})
        }

        return word.concat(keys);
    }
    else{
        //alert("not a valid word")
        return word
    }
}



export function checkWord(word) {
    const guess = word.slice(word.length-5,word.length)
    const colorArray = guess.map(clr => clr.color)
    let numberOfCorrect = 0;

    for (let color of colorArray){ 
        if (color === 'green') {
            numberOfCorrect++;
        }
    }

    if(numberOfCorrect === 5){
        return true
    }
    else{
        return false;
    }
    

    
}

export function answer() {
    let ans = generateAnswer()
    return ans
}