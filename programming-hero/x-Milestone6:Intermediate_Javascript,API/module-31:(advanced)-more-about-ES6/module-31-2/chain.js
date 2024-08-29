// 1. kono object jokhon khujbo array er moddhe theke
// ekhane array er moddhe ekta element and shei element er moddhe (id / name / job) egulo holo ekekta object.
const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]

// ekhane array er vitor 1 ta element and er position number is 0. [0] position er object value gulo ber korte chai...
console.log(users[0].name);


// 2. another array
const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
console.log(data);
console.log(data.count);
// data object er vitor data array er first[0] position element er job ber korte hobe and egulo k 1 ta variable er moddhe rakhbo
const firstJob = data.data[0].job;
console.log(firstJob);


// 3. another Object
const user = {
    id: 5001,
    name: 'Thomas alva edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}

// user kon floor e thake
const userFloor = user.address.street.second;
console.log(userFloor);

// (using (? => optional chaining)) : to see porer element e kono value ache kina
const userFloor = user.address.street?.second;
console.log(userFloor);


// ----------------------
// data access in object inside array 
const data = [{id: 1, name: 'abul', address: 'kochu khet'}];
console.log(data[0].address); // ekhane object er vitore array ta 0 no position e ache

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

// second product price
console.log(products.data[1].price); // ekhane array er vitore object gulo 0, 1, 2 erokom position e ache


// 

const users = {
    id: 5001,
    name: 'Shariful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er boli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);
console.log(user.address.street?.second); // optional chaining


const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.second);  // optional chaining (jodi street er man pawa jay tahole move forward r na pawa gele give the result here)