let Name = "John Smith"
let Address = "123 Main St"
console.log(Name + " Original name");
console.log(Address + " Original address");

// buttons to change name and address
let changeName = true
let changeAddress = true


if (changeName === true) {
    let newName = Name.replace(Name, "Bob Jones")
    console.log('Your name has been changed to ' + newName);
} else if (changeName === false) {
    console.log('You did not press the name change button');
}

if (changeAddress === true) {
    let newAddress = Address.replace(Address, "489 Brooklyn rd")
    console.log('Your address has been changed to ' + newAddress);
} else if (changeAddress === false) {
    console.log('You did not press the Address change button');
}