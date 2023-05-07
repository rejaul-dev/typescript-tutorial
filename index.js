// build in type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 123;
firstName = "Rejaul";
lastName = " Karim";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your Id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());
