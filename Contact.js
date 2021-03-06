const NAME_PATTERN = RegExp("^[A-Z][a-z]{2,}$");
const ADDRESS_PATTERN = RegExp("^[A-Z0-9a-z ]{4,}$");
const CITY_STATE_PATTERN = RegExp("^([A-Z][a-z]{3,})( )?([A-Z][a-z]{3,})?$");
const EMAIL_ID_PATTERN = RegExp("^[a-z0-9]+([+._-][a-z0-9]+){0,1}@[a-z0-9]+[.][a-z]{2,4}([.][a-z]{2,4}){0,1}$");
const PHONE_NUMBER_PATTERN = RegExp("^[0-9]{2}[ ][0-9]{10}$");
const ZIP_PATTERN = RegExp("[0-9]{3}[ ]?[0-9]{3}$");
class Contact 
{

    constructor(...params) 
    {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.email = params[7]
    }

    get firstName() 
    {
        return this._firstName;
    }
    set firstName(firstName) 
    {
        if (NAME_PATTERN.test(firstName)) 
        {
            this._firstName = firstName;
        }
        else {
            throw "firstName is Incorrect";
        }
    }
    get lastName() 
    {
        return this._lastName;
    }
    set lastName(lastName) 
    {

        if (NAME_PATTERN.test(lastName)) 
        {
            this._lastName = lastName;
        }
        else 
        {
            throw "lastName is Incorrect";
        }
    }
    get address() 
    {
        return this._address;
    }
    set address(address)
    {
        if (ADDRESS_PATTERN.test(address)) 
        {
            this._address = address;
        }
        else 
        {
            throw "address is Incorrect";
        }
    }
    get city() 
    {
        return this._city;
    }
    set city(city) 
    {
        if (CITY_STATE_PATTERN.test(city)) 
        {
            this._city = city;
        }
        else 
        {
            throw "city is Incorrect";
        }
    }
    get state() 
    {
        return this._state;
    }
    set state(state) 
    {
        if (CITY_STATE_PATTERN.test(state)) 
        {
            this._state = state;
        }
        else 
        {
            throw "state is Incorrect";
        }
    }
    get zip() 
    {
        return this._zip;
    }
    set zip(zip) 
    {
        if (ZIP_PATTERN.test(zip)) 
        {
            this._zip = zip;
        }
        else {
            throw "zip is Incorrect";
        }
    }
    get phoneNumber() 
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) 
    {
        if (PHONE_NUMBER_PATTERN.test(phoneNumber)) 
        {
            this._phoneNumber = phoneNumber;
        }
        else 
        {
            throw "phoneNumber is Incorrect";
        }

    }
    get email() 
    {
        return this._email;
    }
    set email(email) 
    {
        if (EMAIL_ID_PATTERN.test(email)) 
        {
            this._email = email;
        }
        else 
        {
            throw "email is Incorrect";
        }
    }

    toString() 
    {
        return "first name: " + this.firstName + " ,last name: " + this.lastName + " ,Address: " + this.address + ",city: " + this.city +
            ",state: " + this.state + ",city: " + this.city + ",zip: " + this.zip + ",phone number : " + this.phoneNumber +
            ",email: " + this.email;

    }

}


try 
{
    var contact1 = new Contact("Phoebe", "Buffay", "abc street", "Neww York", "United States", "456890", "01 1234522234", "abc@example.com");
    var contact2 = new Contact("Joey", "Tribbiani", "eee street", "Paris", "United States", "123123", "01 3453451234", "joey@example.com");
    var contact3 = new Contact("Ross", "Geller", "rrr street", "Trade", "United States", "322344", "01 3453451234", "ross@example.com")
    var contact4 = new Contact("Ross", "Geller", "rrr street", "Trade", "United States", "322344", "01 3453451234", "ross@example.com")
}
catch (e)
{
    console.error(e);
}

//UC3
let addressBook = new Array();
function addContact(contact) 
{
    //UC7
    let contactExists = addressBook.filter(existingContact => existingContact.firstName == contact.firstName
        && existingContact.lastName == contact.lastName)
        .reduce((totalContacts) => totalContacts + 1, 0);

    if (contactExists == 0) 
    {
        addressBook.push(contact);
    }
    else 
    {
        console.log(" duplicate contact")

    }

}
addContact(contact1);
addContact(contact2);
addContact(contact3);
addContact(contact4);


console.log(addressBook);

//UC4
function editContact(name, fieldToReplace, valueToReplace) 
{
    let contactToEdit = addressBook.find((contact) => contact.firstName == name)
    contactToEdit.fieldToReplace = valueToReplace;
    switch (fieldToReplace.toLowerCase()) {
        case "firstname":
            contactToEdit.firstName = valueToReplace;
            break;
        case "lastname":
            contactToEdit.lastName = valueToReplace;
            break;
        case "address":
            contactToEdit.address = valueToReplace;
            break;
        case "city":
            contactToEdit.city = valueToReplace;
            break;
        case "state":
            contactToEdit.state = valueToReplace;
            break;
        case "zip":
            contactToEdit.zip = valueToReplace;
            break;
        case "phonenumber":
            contactToEdit.phoneNumber = valueToReplace;
            break;
        case "email":
            contactToEdit.email = valueToReplace;
            break;

    }
}

editContact("Joey", "lastName", "Williams");
console.log(addressBook);

//UC5
const deleteContact = (name) => {
    let indexToDelete = addressBook
        .findIndex((contact) => contact.firstName == name);
    addressBook.splice(indexToDelete, 1);
};

deleteContact("Ross");
console.log(addressBook);

//UC6
let numberOfContacts = addressBook.reduce((totalContacts) => totalContacts + 1, 0);
console.log(numberOfContacts)


//UC 8
console.log("Finding a contact in given city")
let findInCity = addressBook.filter(contact => contact.city == "Paris").find(contact => contact.firstName == "Joey")
console.log(findInCity)

console.log("Finding a contact in given state")
let findInState = addressBook.filter(contact => contact.state == "United States").find(contact => contact.firstName == "Joey")
console.log(findInState)

//UC9
console.log("view all contacts in given city");
let findAllInCity = addressBook.filter(contact => contact.city == "Paris").map(contact => contact.firstName + " " + contact.lastName)
console.log(findAllInCity)

console.log("view all contacts in given State");
let findAllInState = addressBook.filter(contact => contact.state == "United States").map(contact => contact.firstName + " " + contact.lastName)
console.log(findAllInState)


let contactToCityMap = new Map();
let contactToStateMap = new Map();

function mapContactToCityAndState(contact) 
{
    if (contactToCityMap.has(contact.city)) 
    {
        let contactInCity = contactToCityMap.get(contact.city);
        contactInCity.push(contact.firstName + " " + contact.lastName);
    }
    else 
    {
        let contactInCity = new Array();
        contactInCity.push(contact.firstName + " " + contact.lastName);
        contactToCityMap.set(contact.city, contactInCity);
    }

    if (contactToStateMap.has(contact.state)) 
    {
        let contactInState = contactToStateMap.get(contact.state);
        contactInState.push(contact.firstName + " " + contact.lastName);
    }
    else 
    {
        let contactInState = new Array();
        contactInState.push(contact.firstName + " " + contact.lastName);
        contactToStateMap.set(contact.state, contactInState);
    }
}
addressBook.forEach(mapContactToCityAndState);
console.log(contactToCityMap)
console.log(contactToStateMap)

//UC10
let countByCityMap = new Map();
let countByStateMap = new Map();

contactToCityMap.forEach((value, key, map) => {
    countByCityMap.set(key, value.length)
});

contactToStateMap.forEach((value, key, map) => {
    countByStateMap.set(key, value.length)
});

console.log(countByCityMap)
console.log(countByStateMap)

//UC11
console.log("Sorting by first name:\n")
let addressBookSortedByName = [...addressBook]
addressBookSortedByName.sort((contact1, contact2) => { return contact1.firstName.localeCompare(contact2.firstName) });
addressBookSortedByName.forEach(contact => console.log(contact.toString()))

//UC12
console.log("Sorting by city:\n")
let addressBookSortedByCity = [...addressBook]
addressBookSortedByCity.sort((contact1, contact2) => { return contact1.city.localeCompare(contact2.city) });
addressBookSortedByCity.forEach(contact => console.log(contact.toString()))

console.log("Sorting by state:\n")
let addressBookSortedByState = [...addressBook]
addressBookSortedByState.sort((contact1, contact2) => { return contact1.state.localeCompare(contact2.state) });
addressBookSortedByState.forEach(contact => console.log(contact.toString()))

console.log("Sorting by zip:\n")
let addressBookSortedByZip = [...addressBook]
addressBookSortedByZip.sort((contact1, contact2) => { return contact1.zip.localeCompare(contact2.zip) });
addressBookSortedByZip.forEach(contact => console.log(contact.toString()))
