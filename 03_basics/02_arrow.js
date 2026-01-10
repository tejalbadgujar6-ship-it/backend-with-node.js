//this - use for current contacts

const user = {
    username: "tejal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this ye current contact ki bat karta hai
        
    }
}

// user.welcomeMessage()  // yaha current contact print honga
// user.username = "sam" // contacts
// user.welcomeMessage() // contacts changeup

console.log(this); // yaha current contact hamara node environment me hai, to this ye empty object ko refer kar raha hai, kyuki ab global me koi bhi value nahi hai
// jb ham node environment me honge tab this empty object dega
// browser ke andar jo global object hai vo window object hai - Interview question

// function chai() {
//     let username = "tejal"
//     console.log(this.username); // node environment me function ko run kiya
// }

// chai()

// arrow though function declaration

// const chai = function () {
//     let username = "tejal"
//     console.log(this.username);
// }
const chai =  () => { // => - arrow
    let username = "tejal"
    console.log(this);
}

// chai()

// arrow fuction syntax
// () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2 // {} liya to return keyword likhna jaruri hai
// }
// implicit return - remove paranthesis and do not need to write return keyword

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // () liya to return keyword ki koi jarurat nahi hai
 // object return kaise kare

const addTwo = (num1, num2) => ({username: "tejal"})

console.log(addTwo(3, 4));

// practice

const add = (a, b) => a + b;
console.log(add(10, 5));
