{
    // spread operator
    // rest operator

    // learn spread operator
    const bros1  : string[] = ['a', 'b', 'c', 'd', 'e']
    const bros2  : string[] = ['f', 'g', 'h', 'i']

    bros1.push(...bros2)


    const mentors1 = {
        typeScript: 'a',
        redux: 'b',
        dbms: 'c',
    }

    const mentors2 = {
        prisma: 'r',
        next: 'e',
    }
    const mentors = {
        ...mentors1,
        ...mentors2
    }

    // learn spread operator
    const greetFriend = (...friends: string[]) => {
        friends.forEach(friend =>
            console.log(`hi ${friend}`)
        )

    }

greetFriend('a', 'b', 'c', 'd', 'e')

}