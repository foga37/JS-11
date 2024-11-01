//Застосуйте всі методи масивів із лекції
console.log('Застосуйте всі методи масивів із лекції');
let arr = [2, 5, 'hello', 'arrow', true, 2, null, 'jop', false];
//find
let a1 = arr.find((el, ind, arr) => {
    return el === 'arrow';
})
console.log('find', a1);
//findIndex
let a2 = arr.findIndex((el, ind,arr) => {
    return el === 5;
})
console.log('findIndex', a2);
//indexOf
let a3 = arr.indexOf(2)
console.log('indexOf', a3);
//lastIndexOf
let a4 = arr.lastIndexOf(2)
console.log('lastIndexOf', a4);
//sort
console.log('sort', arr);
let a5 = arr.sort((a, b) => b - a)
console.log(a5);
let a6 = arr.sort()
console.log(a6);
const arr1 = ['222', '5', '11', '32'];
console.log(arr1);
let a7 = arr1.sort();
console.log(a7);
let arr2 = [ 
    {name: 'Yaroslav', id: 30},
   {name: 'Irina', id: 28},
    {name: 'Oleg', id: 35},
    {name: 'Vlad', id: 17}, 
 ]
arr2.sort((a, b) => a.id - b.id )
console.log(arr2);
// arr2.reverse()
// console.log(arr2);
//filter
const arr3 = [2, 4, 7, 21, 0, 1, 55, 32, 4];
let b = arr3.filter((el, ind, arr) => el > 7);
console.log('filter', arr3, b);
//some
let b1 = arr3.some(el =>  el > 55);
console.log('some', b1);
//every
let b2 = arr3.every(el => el <= 55);
console.log('every', b2);
//includes
let b3 = arr3.includes(55);
console.log('includes', b3);
//flat
const arr4 = [2, 4, ['jok', 43, ['hi', 31, 6]] ];
console.log(arr4);
let b4 = arr4.flat(Infinity);
console.log('flat', b4);
//concat
let b5 = arr4.concat([3, 33])
console.log('concat', b5);
//toLocaleString
let b6 = arr4.toLocaleString();
console.log('toLocaleString', b6);
//map
console.log(arr);
let b7 = arr.map((el, ind, arr) => {
    if(el === 2){
        return -150
    } else if(el == 'hello') {
        return 333
    }
    else {
        return el
    }
} )
console.log('map', b7);
//Array.isArray
const ara = 'fdfdfd'
console.log('Array.isArray', arr);
console.log(Array.isArray(arr));
console.log(ara);
console.log(Array.isArray(ara));