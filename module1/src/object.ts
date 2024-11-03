// reference type --> Object

const user1 : {
    company : "Qrinux"; // type --> literal types
    firstName : string;
    middleName : string;
    lastName : string;
} = {
    company : "Qrinux", // this will be fixed
    firstName: "Monjur",
    middleName: "Bakth",
    lastName: "Mazumder"
}

const user2 : {
    readonly company : "Qrinux"; // type --> literal types
    firstName : string;
    middleName? : string;
    lastName : string;
} = {
    company : "Qrinux", // this will be fixed
    firstName: "Monjur",
    lastName: "Mazumder"
}


