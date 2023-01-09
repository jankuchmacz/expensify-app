const person = {
    name: 'Janek',
    age: 28,
    location: {
        city: 'Cracow',
        temp: 5
    }
};
//object destructuring
//const name=person.name;
//const age=person.age;
//es6 object destructuring
//we grab name and age from person object
//we create name and age variable
//default value name = 'Anonymus'
const {name: firstName = 'Anonymus', age} = person;
//console.log(`${firstName} is ${age}.`);

//destructuring statement
//renaming - temp grabed from person.location is saved in temperature variable
const {city, temp: temperature} = person.location;

if(city && typeof temperature === 'number'){
    //console.log(`It is ${temperature} in ${city}`)
}
const book={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const {name: publisherName = 'Self-Published'} = book.publisher;
//console.log(publisherName);

//array destructuring
const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, town, state] = adress;

console.log(`You are in ${town} ${state}.`);

const item = ['Coffee (hot)', '$2.00' , '$2.50', '$2.75'];
const [product, , mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}`)



