const student = {
  name: "Marie",
  age: 20,
  courses: []
}

student.age = 21

student.grade = "A"

// console.log (student)

student.courses.push("Math", "Physics", "Chemistry")

// console.log (student.courses)

const foundcourses = student.courses.indexOf("Physics")

// console.log (foundcourses)

// console.log (student.courses.slice(0,2))

class User {
 constructor(firstName, lastName, age, email, admin = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.admin = admin;
 }


// Example usage
    // Method to get user information
  getUserInfo() {
    return `Full Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
  }

  setAge(newAge) {
    this.age = newAge;
  }
}

const user = new User('Tin', 'Nguyen', 20, 'tin@gmail.com' );

user.setAge (21);

console.log(user.getUserInfo());

