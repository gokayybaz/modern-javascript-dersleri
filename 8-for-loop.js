let users = ["Mustafa","Ahmet","Cengiz"]

for(let i = 0; i<users.length; i++){
    console.log("Kullanıcı : " + users[i])
}

for (let index = 1; index < 10; index++) {
   console.log(index)
}

let userList = [
    {
        id: 0,
        name: "Gökay",
        age: 19
    },
    {
        id: 1,
        name: "Zeynep",
        age: 15
    },
    {
        id: 2,
        name: "Mustafa",
        age: 20
    },
]

const girisSerbestList = []

for(let i = 0; i<userList.length; i++) {
    if(userList[i].age > 18) {
      girisSerbestList.push(userList[i])
    }
}

console.log(girisSerbestList)