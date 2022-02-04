

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random())};

function getRandomNumber2(min2, max2){
    min2 = Math.ceil(min2);
    max2 = Math.floor(max2);
    return Math.floor(Math.random()* (max2-min2) + min2)};

// console.log(getRandomNumber(0,1000));
// console.log(getRandomNumber2(0,1000));

// getRandomNumber(min, max)= a;
// getRandomNumber2(min2, max2)= b;
 let a = getRandomNumber(0, 1000);
 let b = getRandomNumber2(0, 1000);
function maximum(){
    if(a > b){
        return a;
    }
    else return b;
}

console.log(a);
console.log(b);
console.log("Maximum Number = " + maximum());