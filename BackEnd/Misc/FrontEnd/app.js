// let arr=[1,2,3];
// arr.sayhello=()=>{
//     console.log("Hi i am arr");

// }

//Factory functions
// function personMaker(name,age)
// {
//     const p={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi I am ${name}`)}
//     }
//     return p;
// }
// let  p1=personMaker("harith",19);

//Constructors
//Constructor function starts with a capital letter and doesnt return anything,
//it helps in creating js objects where the objects points to the constructor and functions created acts as the prototype for the objects created
//constructor createws a empty js object and starts to initialize thinsg in that object
// function Person(name,age)
// {
//     this.name=name;
//     this.age=age;
//     console.log(this);
// }
// Person.prototype.talk=
// function()
// {
//     console.log(`Hi I am ${this.name}`);
// }
// const p1=new Person("Harith",19);
// const p2=new Person("abc",19);
// console.log(p1.talk===p2.talk);

//Classes:a template for creating objects

class Person{
    constructor(name,age)
    {
        console.log("Person constructor");
         this.name=name;
         this.age=age;
    }
    talk()
    {
        console.log(`Hi I am ${this.name}`);
    }

}
class Student extends Person
{
    constructor(name,age,marks)
    {
        // this.name=name;
        // this.age=age;
        console.log("Student Constructor");
        super(name,age);
        this.marks=marks;
        // console.log(this);
    }
    talk()
    {
        console.log(`Hi I am ${this.name} and I am ${this.age} yaers old`);
    }
}
// let s1=new Student("Harith",19);
// let s2=new Student("abc",19);
// console.log(s1.talk===s2.talk);
class Teacher extends Person
{
    constructor(name,age,subj)
    {
        console.log("Teacher Constructor");
        super(name,age);
        // this.name=name;
        // this.age=age;
        this.subj=subj;
    }
}



