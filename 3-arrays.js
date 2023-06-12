let userList = ["Gökay", "Benan", "Hakkı","Zeynep", 1, 1.56, false, true]

console.log(userList[0])
console.log(userList[1])

// Array Methods

console.log(userList.length) // Dizinin uzunluğunu verir.

userList.push("Göktuğ","Gökbörü") // Dizinin sonuna eleman/elemanlar eklemek için kullanılır.

console.log(userList.pop()) // Dizinin son elemanını çıkarmak için kullanılır, çıkardıktan sonra çıkardığı elemanı kullanmamızı da sağlamaktadır.
// Not : pop gibi metotlar var olan diziyi manipüle etmek için kullanılır, işlemi yapıp yeni bir dizi oluşturmazlar.

userList.splice(0,2) // sıfırıncı index'ten başla ve iki tane eleman sil demiş olduk.
// Gökay ve Benan silinmiş oldu.
// Bu metotta var olan dizi üzerinde işlem yapar, yeni bir dizi oluşturmazlar. (Mutet etmek)

userList.slice(1,4) // diziden belirlediğimiz aralığı çıkarıp bizim kullanımımıza vermeye yarar.
// Not : Slice metotu var olan array üzerinde değişiklik yapmaz, yeni bir array oluşturulup bize verir.

console.log(userList.join("-+")) // dizinin elemanlarını belirli ayırtaçlar ile tek bir string'e çevirmeye yarayan metotdur.

console.log(userList.indexOf("Göktuğ")) // gönderdiğimiz parametrenin dizide hangi index'e sahip olduğunu bize dönderiyor, dizide yoksa -1 döndermektedir.

console.log(userList.reverse()) // diziyi ters dönderdip bize geri dönderiyor.
// Array üzerinde değişiklik yapmaktadır.

console.log(userList.shift()) // pop ile aynı işlemi yapmaktadır fakat bu dizinin başından çıkarmaktadır.




