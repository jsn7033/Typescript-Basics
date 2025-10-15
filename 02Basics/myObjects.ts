// const User = {
//     name: "jaswnder",
//     email: "jsnagi@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}  ){
// }

// createUser({
//     name: "Jaswinder",
//     isPaid: false,
//     email: "jsnagi" //function createUser donn't accept this parameter
// });

// //to avoid above behaviour I can create a object separately
// let newUser = {
//     name: "Jaswinder",
//     isPaid: false,
//     email: "jsn@gmail.com"
//     /* this is not defined in the function. but this way we can still
//     pass it */
// };

// createUser(newUser); //now it won't complain about email

// //syntax for object as return type
// function createCourse (): {name: string}{
//     return {name: "jaswinder"}
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return {
//     name: "",
//     email: "",
//     isActive: false,
//   };
// }

// createUser({
//   name: "",
//   email: "",
//   isActive: false,
// });

type User = {
  readonly _id: string; //read only properly
  name: string;
  email: string;
  isActive: boolean;
  creditCard ?: number; //optional parameter
};

let myUser: User = {
    _id: "asdjflkajdsf",
    name: "h",
    email: "j@gmail.com",
    isActive: false;
}

myUser.email = "jsn@gmail.com";
// myUser._id = "q3445837987324";

type cardnumber = {
    cardNumber: string;
};

type cardDate = {
    cardDate: string;
};

type cardDetails = cardnumber & cardDate & {
    cvv: number
}

let card :cardDetails = {
    //it will have values from all cardnumber, cardDate and CVV details
}


export {};
