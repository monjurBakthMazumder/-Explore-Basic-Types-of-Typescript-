{
    // ternary operator || optional chaining || nullish


    const age = 19

    if(age >= 18){
        console.log("adult");
    }else{
        console.log("not adult");
    }

    // ternary operator
    const isAdult = age >= 18 ? "adult" : "not adult"
    console.log({isAdult});


    // nullish coalescing operator
    // null / undefined --> decision making
    const inAuthenticated1 = null
    const inAuthenticated2 = undefined
    const inAuthenticated3 = ""

    const result1 = inAuthenticated1 ?? "Guest"
    const result2 = inAuthenticated2 ?? "Guest"
    const result3 = inAuthenticated3 ?? "Guest"
    console.log({result1});
    console.log({result2});
    console.log({result3});
    

    // optional chaining

    type User = {
        name: string;
        address : {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user : User = {
        name: "monjur",
        address: {
            city: "dhaka",
            road: "12",
            presentAddress: "dhaka"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address"

    console.log(permanentAddress);




}