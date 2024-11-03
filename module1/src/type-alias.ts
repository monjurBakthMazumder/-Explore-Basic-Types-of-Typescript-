{

// Type alias

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}

const student1 : Student  = {
    name: 'a',
    age : 11,
    gender: 'male',
    contactNo: '0132234234',
    address: "dhaka"
}
const student2 : Student  = {
    name: 'b',
    age : 3,
    gender: 'male',
    address: "dhaka"
}

type UserName = string;

const user : UserName = "monjur"

// Type alias in function

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2)=> num1 + num2

}