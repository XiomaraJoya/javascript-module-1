const students = [

"Alberto",
"José",
"Aura",
"Walter",
"Dulce",
"Stef",
]
function showStudents(studentsArray) {
    for(let student = 0; student < students.length;student++) {
        console.log("the name of the student is" + studentsArray[student]);
    }
}

showStudents(students);