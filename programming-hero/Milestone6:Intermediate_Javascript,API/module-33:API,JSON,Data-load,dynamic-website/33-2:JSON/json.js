const user = {id: 1, name: 'Gorib Aamir', job: 'actor'}


// javascript object notation (JSON)
// JSON.parse
// JSON.stringify
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

/*
Output:

{ id: 1, name: 'Gorib Aamir', job: 'actor' }  => JS
{"id":1,"name":"Gorib Aamir","job":"actor"}  => JSON

*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
console.log(typeof shop);  // object

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
console.log(typeof shopJSON);  // string


// **** (JSON) er string theke object ta ke ber korte chai
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);