const numberOfStudents = 15
const numberOfMentors = 8
const totalStudentsAndMentors = numberOfStudents + numberOfMentors
const percentageStudents = Math.round((numberOfStudents * 100 )/totalStudentsAndMentors)
const percentageMentors = Math.round((numberOfMentors * 100 )/totalStudentsAndMentors)

console.log("Percentage Students: "+ percentageStudents+"%");
console.log("Percentage Mentors: "+ percentageMentors+"%");

