const myobj = {
    name:'Alamin',
    dep:'CSE',
    age:[12,3,4]
}

console.log(Object.keys(myobj)) //[ 'name', 'dep', 'age' ]
console.log(Object.values(myobj)) //[ 'Alamin', 'CSE', [ 12, 3, 4 ] ]
console.log(Object.entries(myobj)) //[ [ 'name', 'Alamin' ], [ 'dep', 'CSE' ], [ 'age', [ 12, 3, 4 ] ] ]
console.log(myobj.hasOwnProperty('name')) // true