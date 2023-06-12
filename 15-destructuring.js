// Object & Array Destructuring

let user = {
    name: "Gökay",
    surName: "Baz",
    age: 18,
    isLoginned: true,
    school: {
        name: "Kozan Merkez Lisesi",
        class: 3
    }
}

// Bu işlem ile objemizdeki belirli propertyleri değişkene atamadan direk çekebiliriz.
let { name, surName, ...geriyeKalanPropertyler } = user
console.log(name, surName)
// ...geriyeKalanPropertyler ile de obje içerisindeki diğer / bilmediğimiz propertyleri çekmek için kullanırız.
// "..." spread operator'dür, "geriyeKalanPropertyler" ise bizim belirlediğimiz özel isimdir.
console.log(geriyeKalanPropertyler)
let { school: {name2} } = user
console.log(name2)


let programmingLanguages = ["HTML","CSS","Javascript"]

let [firstLanguage, secondLanguage, ...rest] = programmingLanguages

console.log(firstLanguage + secondLanguage)

console.log(rest)