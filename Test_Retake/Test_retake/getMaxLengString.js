function getMaxLengString(arrOfString) {
    let maxLength = Math.max(...arrOfString.map(stringL => stringL.length)) // [...arrOfString.map(stringL => stringL.length)]
    let current_st = arrOfString.filter((current)=> current.length === maxLength)
    return current_st
}
let array = ["apple", "banana", "kiwi", "strawberry"];
let test = getMaxLengString(array)
console.log(test);