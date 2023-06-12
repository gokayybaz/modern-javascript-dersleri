// map işlemi ile bir filtreleme yaparken orada olmayan değerler undefined olarak gözükmekteydi,
// işte bunun gözükmemesi için aynı map gibi çalışan filter metotunu kullanırız.
// aslında map gibi fakat burada filtreleme yapıp yeni bir liste oluşturuyor.
// map filtreleme işlemi yaparken kullanılmaz çünkü filtreye uymayan veriler undefined olarak dönmektedir.
// buda çeşitli kontrollerde ve yazdırmalarda hata verecektir.
// bunu çözmek için : filter kullanırız.

let users = [
    {
        id: 1,
        name: "Gökay",
        age: 19
    },
    {
        id: 2,
        name: "Mustafa",
        age: 24
    },
    {
        id: 3,
        name: "Göktürk",
        age: 8
    },
    {
        id: 4,
        name: "Göktuğ",
        age: 9
    },
]

let filtrelenmisUsers = users.filter(user => {
    if(user.age > 18){
        return user
    }else {
        console.log("Giremez : " + user.name)
    }
})


filtrelenmisUsers.forEach((user) => console.log("Girebilir : " + user.name))