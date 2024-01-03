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