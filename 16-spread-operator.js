// "..." -> Spread Operator
// Verileri toplamak/ayrıştırmak için kullanılır. 

// Array Merge

const array1 = ["Adana","İstanbul","Ankara"]

const array2 = ["Denizli", "Balıkesir", "Konya"]

let newArray = [...array1, ...array2]

newArray.forEach((city) => {
    console.log(city)
})


// Form Example

function registerForm(name, surName, ...rest){
  console.log(name, surName, rest)
}

registerForm("Gökay","Baz","19","2004")

// Object Example

let user = {
    id: 1,
    name: "Gökay",
    surName: "Baz",
    age: 19
}

let { name, surName, ...rest } = user

console.log(name, surName, rest)