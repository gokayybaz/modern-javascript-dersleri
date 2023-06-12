// filter ile aynı işi görür, fakat filter dizi döner bu sadece aradığımız elemanı döner.

let users = [
    {
        id: 1,
        name: "Gökay",
        age: 18
    },
    {
        id: 2,
        name: "Mustafa",
        age: 45
    },
    {
        id: 3,
        name: "Cengiz",
        age: 36
    },
    {
        id: 4,
        name: "Gökbörü",
        age: 26
    },
]
// eğer birden fazla var ise ilk koşulu sağlayanı döner.
let user = users.find(user => user.age < 20)
console.log(user)