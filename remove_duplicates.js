
function Isunique(arr){
    let unique = [];

    for(let i = 0; i <= arr.length; i++){
        let element = arr[i]

        if(!unique.includes(element)){
            unique.push(element)
        }
    }
    return unique;
}


let nameArray = ['oli','alamin','sheikh','oli',"sheikh"]
console.log(Isunique(nameArray))