/* JavaScript challenges */

/* 
1. insert "*" between the even numbers and "-" between odd numbers 
*/
const test_1 = 2344976;

function insertStarOrDash(num) {
    const arr = String(num).split("").map(e => Number(e));    //create an int array
    let res = "";
    arr.forEach((e,i)=>{
        res += e;
        if(e % 2 == 0 && arr[i+1] % 2 == 0){    //if current and next number is even
            res += "*";
        } else if(e % 2 != 0 && arr[i+1] % 2 != 0){ //if current and next number is odd
            res += "-";
        }
    })
    return res;
}
console.log(insertStarOrDash(test_1));


/* 
2. return "k" th smallest number if there is none then return null
//input: 9 3 2 7 2 5 3 8, k=4 => 7
//input: 0 1 0 1 1 1 1 0 0 1, k=3 => null
*/
const test_2 = [9, 3, 2, 7, 2, 5, 3, 8];

function kThSmallestNumer(arr, k){
    return [...new Set(test_2.sort())][k-1];    //duplicates are not counted. k-1 th element because arrays are 0 indexed
}
console.log(kThSmallestNumer(test_2, 4));

/*
3. reverse String
*/
const test_3 = "Hello World!";

function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString(test_3));

/*
4. number to int array
*/
const test_4 = 1234567890;

function numToIntArray(num){
    return String(num).split("").map(e => Number(e));
}
console.log(numToIntArray(test_4));

/*
5. check if every letter is unique in a word
*/
const test_5 = "Notunique"; //"n" and "u" repeated twice

function isUnique(word) {
    const arr = word.split("");
    return arr.every(w =>{                          //array.every(fn) => returns a boolean. if "return" keyword is missed here function retuns undefined
        if(arr.indexOf(w) == arr.lastIndexOf(w)){
            return true;
        } else {
            return false;
        }
    })
}
console.log(isUnique(test_5));

/* 
6. self-descriptive number test
Input: 2020
Output: true
Explanation:
Position 0 has value 2 and there are two 0s in the number
Position 1 has value 0 and there are no 1s in the number
Position 2 has value 2 and there are two 2s
Position 3 has value 0 and there are zero 3s 

other examples:
1210
21200
3211000
42101000
521001000
*/
const test_6 = 2020;

function isSelfDescriptiveNum(num){
    const arr = String(test_6).split("").map(e => Number(e));
    return arr.every((d,i) => {
        return(d == arr.filter(e => e == i).length)    //count match with .length
        //                     number of elements matching the index number/value
    })
}
console.log(isSelfDescriptiveNum(test_6));

/*
7. count duplicates digits in a number/an array
*/
const test_7 = 23435513;

function countDuplicateDigits(num){
    const intArr = String(num).split("").map(e => Number(e));
    let tempMap = new Map(); //{};
    for(const n of intArr){
        //tempMap[n] = (tempMap[n] || 0) + 1;   //not iterable
        tempMap.set(n, (tempMap.get(n) || 0) + 1);  //iterable
    }
    //return tempMap;
    for(const [k, v] of tempMap){
        console.log(`${k} is repeated ${v} times`);
    }
}
console.log(countDuplicateDigits(test_7));