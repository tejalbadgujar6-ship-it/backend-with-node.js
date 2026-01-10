// define course
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tejal"

}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// object de-structure

const navbar = ({company}) => {

}

navbar(company = "tejal")

// API- documantation

// {
//     "name": "tejal",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]