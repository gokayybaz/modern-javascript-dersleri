 // map : forEach'den farklı olarak dizideki her bir eleman için hem bir fonksiyon çalıştırabilir hem de geriye bir dizi dönebilir.
 // forEach : sadece her bir eleman için bir fonksiyon çalıştırabiliyordu fakat array'e ekleme işlemini manuel yapıyorduk.
 // map : bir dizi map edilerek istenilen koşula göre yeni bir diziye değerler atanabilir.
  
 // forEach : Hiçbir şekilde bir return beklemiyor (geriye değer döndermeyi beklemiyor),
 // map : Çalışıyor ve bir return bekliyor çünkü karşılığında bize koşula göre yeni bir array oluşturuyor.
 // koşula göre bekliyor diyoruz fakat herhangi bir koşul belirtmesek bile her bir eleman için bizden bir return beklemektedir.
 // örnek yeni oluşturacak listede bütün elemanlarının yaşının 5 arttırılması lazım işte bu gibi durumlarda koşul kullanmadan da map kullanırız.

 let users = 
 [
    {
      id: 1,
      name: "Ahmet",
      age: 19
    },
    {
        id: 2,
        name: "Mehmet",
        age: 24
    },
    {
        id: 3,
        name: "Ömer",
        age: 5
    },
 ]

 let girisYapabilirler = users.map( (user) => {
    if(user.age > 18) {
        return user
    }else {
        // console.log("Giriş Yapamaz : " + user.name)
    }
 })

console.log(girisYapabilirler)

console.log("--------------------------------------------")

let sinavNotlari = [45, 55, 67, 89, 53]
sinavNotlari.forEach((not)=> {
    console.log("Eski sınav notu : " + not)
})

console.log("-------")

let yeniSinavNotlari = sinavNotlari.map((not) => {return not+45})
yeniSinavNotlari.forEach((yeniNot) => {
    console.log("Yeni sınav notu : " + yeniNot)
})