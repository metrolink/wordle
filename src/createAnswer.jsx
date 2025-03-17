import wordList from '../wordlist.json'

function generateAnswer() {
    const listOfWords = wordList.words;
    const randomNumber = Math.floor(Math.random() * listOfWords.length)
    const word = listOfWords[randomNumber]
    return word;
}

export function validateAnswer(word, ans){
    if(word === ans)
        return 0;
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