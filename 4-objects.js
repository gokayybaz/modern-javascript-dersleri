// Objeler / Objects

let userName = "Gökay"
let userSurName = "Baz"
let userAge = 19
let userLength = 1.78

console.log(userName)
console.log(userSurName)
console.log(userAge)
console.log(userLength)

// Yukarıdaki işlemde bir kullanıcı tanımladık ve bütün özelliklerini ayrı ayrı değişken tanımlayarak tanımladık,
// Bu işlemi uzun uzun yapmak yerine bir obje oluşturup içerisine özellikleri property olarak verebiliriz.
// Nesne tabanlı programlama dillerindeki class mantığına sahiptir.
// Mantığı : key-value'dir.

let user = {
    name: "Göktuğ",
    surName: "Baz",
    age: 32,
    length: 1.67,
    skills: ["HTML","CSS","Javascript"],
    isLoginned: true,
    family: [
        {
            name: "Gökay",
            surName: "Baz"
        },
        {
            name: "Mustafa",
            surName: "Baz"
        }
    ]
}

console.log(user.name) // Tanımladığımız obje içerisindeki propertylere böyle erişebiliyoruz.
console.log(user['surName'])
console.log(user.age)
console.log(user.length)
console.log(user.family[0].name)
console.log(user.family[1].name)

// Objeye dışarıdan key-value ekleme
console.log(user)
user.degree =  "Lisans"
// user["degree"] = "Lisans"
console.log(user)

// Obje Metotları

// freeze - hasOwnProperty - keys - values - entries

// freeze : obje tanımlandıktan sonra içerisine herhangi bir veri / property eklenmesini önlemek için kullanılır.
Object.freeze(user)

// hasOwnProperty : Gönderdiğimiz property ilgili objede var mı yok mu onu öğrenmek için kullanırız.
console.log(user.hasOwnProperty("name"))

// keys : obje içerisindeki keyleri bize dönderecektir.
console.log(Object.keys(user))

// values : obje içerisindeki value'leri bize dönderecektir.
console.log(Object.values(user))

// entries : objenin her bir property'sini tek tek key value değerlerini bir array'e aktararak bize dönderiyor.
console.log(Object.entries(user))