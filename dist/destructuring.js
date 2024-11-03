"use strict";
{
    // destructuring operator
    var user = {
        id: 453,
        name: {
            firstName: "monjur",
            middleName: "bakth",
            lastName: "mazumder"
        },
        contactNo: "0170000000",
        address: "bangladesh"
    };
    var contactNo = user.contactNo, middleName = user.name.middleName;
    // array destructuring 
    var myFriends = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
}
