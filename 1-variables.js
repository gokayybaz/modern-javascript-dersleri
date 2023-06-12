// Variables / Değişkenler

// Keywords : var, let, const
// var : JS ile gelen bir değişken tanımlama keyword'üdür.
// let : Ecmascript ile JS'e dahil edilen değişken tanımlama keyword'üdür.
// const : JS ile gelen bir sabit tanımlama keyword'üdür.

// "var" ile "let" arasındaki fark;
// "var" keyword'ü ile bir değişken tanımladığımız zaman kodun heryerinden o değişkene erişebiliriz fakat "let" ile bir değişken tanımladığımız zaman,
// sadece tanımladığımız blok içerisinde o değişkene erişebiliriz. Bunun sonucunda biz bellek yönetimini daha iyi yapabilmek için genellikle let kullanırız.

var userName = "gokayybaz"
// console.log(userName)
let userName2 = "hakkibaz"
// console.log(userName2)
const userName3 = "goktugbaz"
// console.log(userName3)


// Variable Types / Değişken Türleri

// string : Metinsel ifadeleri tutmak için kullanılır.
// int : Tam sayıları tutmak için kullanılır.
// double : Ondalıklı sayıları tutmak için kullanılır.
// boolean : Mantıksal ifadeleri tutmak için kullanılır.
// symbol & bigint


let userFullName = "Gökay Baz"
let userAge = 19
let userLength = 1.69
let userIsLoginned = true

console.log("Kullanıcı : " + userFullName)
console.log("Yaşı : " + userAge)
console.log("Boy Uzunluğu : " + userLength)
console.log("Sisteme Giriş Yapmış Mı? : " + userIsLoginned)

// Type of keyword
// Değişkenin değerinin tipini görmek için kullanılır.
console.log(typeof userFullName) // string
console.log(typeof userAge) // number
console.log(typeof userLength) // number
console.log(typeof userIsLoginned) // boolean