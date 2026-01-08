function sayMyName() {
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("L");
}

// sayMyName() // () ye execution ka kam karta hai and sayMyName ye reference hota hai

// function addTwoNumbers(number1, number2) { // bracket ke andar parametes hai

//    console.log( number1 + number2);
// }
// function addTwoNumbers(number1, number2) { // bracket ke andar parametes hai

// //    let result = number1 + number2
// //    return result 
// return number1 + number2

   
// }

// const result = addTwoNumbers(3, 5) // bracket ke andar arguments hai

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if (username === undefined) {
        console.log("Please enter a username");
        return
        
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tejal"))
// console.log(loginUserMessage("tejal"))

function calculateCartPrice(val1, val2, ...num1) { // ... - rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "tejal", // object
    prices: 199 // object
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user)
handleObject({
    username: "teja",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 100, 500, 1000]));
