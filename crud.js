let students = [
    {
        id: 1,
        name: "Rahul",
        age: 22,
        course: "Python"
    },
    {
        id: 2,
        name: "Anu",
        age: 21,
        course: "Data Analytics"
    }
];

function viewStudents() {

    let result = "";

    students.forEach(function(student) {

        result +=
            "ID: " + student.id +
            "\nName: " + student.name +
            "\nAge: " + student.age +
            "\nCourse: " + student.course +
            "\n--------------------\n";

    });

    alert(result);
}

function addStudent() {

    let id = Number(prompt("Enter Student ID:"));
    let name = prompt("Enter Student Name:");
    let age = Number(prompt("Enter Student Age:"));
    let course = prompt("Enter Student Course:");

    let student = {
        id: id,
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    alert("Student Added Successfully!");

    console.log(students);
}

function deletestudent(){
    let id = nmber(prompt("enyrt students id:"));
    let index= students.findindex(function(student){
    return students.id==id;
});;
if(index!==-1){
    students.splice(index,1);
    alert("students delete sucessfuly");
}else{
    alert("students not found")
}
console.log(students);


}