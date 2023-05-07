// build in type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 123;
firstName = "Rejaul";
lastName = " Karim";
isActivated = true;
fullName = firstName.concat(lastName);

console.log(
  `Your Id: ${userId}, username: ${fullName}, account activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());
