//https://github.com/AFireInside777/JS-day1-HW
//Exercise 1
let sentence = "I have a new! dog named Lassie."
let doglist = ['Max', 'Lucky', 'Lassie', 'Golden', 'Wolf']
let stringword = ''
let result = ''

function findNames(stringobj){
    stringobj += ' '
    for(let i in stringobj){
        if (stringobj[i].toUpperCase() != stringobj[i].toLowerCase()){
            stringword += stringobj[i]
        }
        if (stringobj[i] == ' ') {
            if (doglist.includes(stringword)){
                let message = "Matched Dog Name: " + stringword
                return message
            } else {
                stringword = ''
            }
        }
    }
}

result = findNames(sentence)
if (result){
    console.log(result)
} else {
    console.log("None of our dog names were found in your sentence.")
}

