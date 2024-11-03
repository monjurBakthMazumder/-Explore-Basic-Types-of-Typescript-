 // learning function
 // 1. normal function
 // 2. arrow function


 // normal function
 function add (num1: number = 0,num2:number =10): number {
    return num1 + num2;
 }
 add ( 20, 40)

 // arrow function

 const addArrow = (num1: number,num2: number): number => num1 + num2;

 // object --> function --> method

 const poorUser = {
    name: "monjur",
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance: ${this.balance + balance}`
    }
 }

 const arr : number[] = [2,4,7]

 const newArray : number[] = arr.map((elem: number ) : number=> elem * elem)