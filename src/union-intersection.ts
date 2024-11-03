{
    // union type

    type FrontendDeveloper1 = "fakibaz" | "junior"
    type FullStackDeveloper1 = "frontend" | "expert"

    type Developer1 = FrontendDeveloper1 | FullStackDeveloper1

    const newDeveloper : FrontendDeveloper1 = "fakibaz"

    type User = {
        name: string;
        email: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "AB+"
    }

    const user1 : User = {
        name: "monjur",
        email: "monjur@gmail.com",
        gender: "male",
        bloodGroup: "O+"
    }

    // intersection type

    type FrontendDeveloper = {
        skill: string[];
        designation1: "Frontend Developer"
    }
    type BackendDeveloper = {
        skill: string[];
        designation2: "Backend Developer"
    }


    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper : FullStackDeveloper = {
        skill: ["html", "css", "js"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }

}