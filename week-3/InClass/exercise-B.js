const students = ["Xiomara", "Natalia", "Luis", "Oswaldo"];
const students1 =["Lina","Litzy","Karelys","Miguel"];

const allStudents = students.concat(students1);

console.log(allStudents.sort());

function name (person, students){
    if (students.includes(person)) {
        return person + " "+ "is at the class with"+" "+ students;
    }
}

console.log(name("Natalia", allStudents));