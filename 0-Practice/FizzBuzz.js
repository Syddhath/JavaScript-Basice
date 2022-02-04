const output = fizzBuzz("fs");
console.log(output);
function fizzBuzz(input) {
    let a = input / 3;
    let b = input / 5;

    if(typeof input !== "number")
        return "not a number";

    if ((Number.isInteger(a) == true) && (Number.isInteger(b) == true))
        return "FizzBuzz";

    if (Number.isInteger(a) == true)
        return "Fizz";

    if (Number.isInteger(b) == true)
        return "Buzz";


    return input;
}
