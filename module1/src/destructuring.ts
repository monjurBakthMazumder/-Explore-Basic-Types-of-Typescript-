{
    // destructuring operator
    const user = {
        id: 453,
        name:{
            firstName: "monjur",
            middleName: "bakth",
            lastName: "mazumder"
        },
        contactNo: "0170000000",
        address: "bangladesh"
    }
    
    const {
        contactNo,
        name: {middleName}
    } = user

 // array destructuring 

 const myFriends = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
 const [,,bestFriend, ...rest] = myFriends









}