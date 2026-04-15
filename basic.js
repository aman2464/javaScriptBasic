/* Variables & Data Types  */
let studentName="Aman Kumar Choudhary";
const studentId=23665113;
console.log(`StudentDetail:${studentName},${studentId}`);

/* Functions: Arrow Function */
function factorial(a){
    if (a==0){
        return 1;
    }
    else{
        return a*factorial(a-1);
    }
}
console.log(factorial(5));
/* arrow function */
const studentFunction=(studentId)=>{
    if (studentId==23665113){
        return "Aman Kumar Choudhary Btech CSE-AI 3rd Year Section C";
    }
}
console.log(studentFunction(23665113));


/*Conditional Statements */
const evenOdd=(number)=>{
    if (number%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(evenOdd(23));

/* Loops for while */
let result="";
for(let i=1;i<=10;i++){
    result+=i+" ";
}
console.log(result.trim());
let output="";
let j=1;
while(j<=10){
    output+=j+" ";
    j++;
}
console.log(output.trim());

/* Arrays plus using filter function */
let Names="";
let studentName1=["Aman","Pawan","Amin","Shivam"]
for(let name of studentName1){
   Names+= name+" ";
}
console.log(Names.trim());

const nameStartswithA=studentName1.filter(name => name.startsWith("A"));
console.log(nameStartswithA);

/* OOP Class & Constructer build */
class Student{
    Intro;
    Course;
    Section;

    constructor(Intro,Course,Section){
        this.Intro=Intro;
        this.Course=Course;
        this.Section=Section;
    }

StudentInfo(){
    console.log(`StudentDetail:${this.Intro},${this.Course},${this.Section}`)
}

}
let student=new Student("Aman Kumar Choudhary","Btech CSE-AI","C");
student.StudentInfo();