let users = [
    {
        id: 1,
        name: "Gökay",
        age: 19
    },
    {
        id: 2,
        name: "Halit",
        age: 14
    },
    {
        id: 3,
        name: "Göktuğ",
        age: 24
    }
]

const findAges = (user) => user.age === 24

let girenKisiler = users.find(findAges)

console.log(girenKisiler)