// notation object
const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}
const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
console.log(chemistry);

// change subject name
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);


// ❌ can not write like this
const marks2 = student.marks.subject;
console.log(marks2); // answer: undefined;
