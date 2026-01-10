// singleton - literance ke andar kabhi bhi singleton nahi banta hai
// singleton - hamesha constructor se banta hai
// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Tejal",
    "full name": "Tejal Badgujar",
    [mySym]: "mykey1", // symbol ko refer kare to square brackets lagao
    age: 18,
    location: "Jaipur",
    email: "tejal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// object access

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "tejal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "tejal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // same onject ko referce karna hai to use : this
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// practice 

let student = {
    name: "Tejal",
    age: 20,
    course: "Node.js"
};

console.log(student.name);
console.log(student.course);
