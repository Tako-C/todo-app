function fillStartWord(startWord,word) {
    let arrayStringInput = [startWord,word]
    if (word === null || word === undefined) {
        return undefined    

    } else if (word.startsWith(startWord)) {
        return word;
    }
    return startWord + word
}
console.log(fillStartWord("JS","beginner"))