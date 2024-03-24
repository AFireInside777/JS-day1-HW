namearray = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function evenIndex(arr){
    for (i in arr){
        if (i%2 == 0){
            arr[i] = 'EvenIndexDeclared'
        }
    }
    return arr
}

console.log(evenIndex(namearray))