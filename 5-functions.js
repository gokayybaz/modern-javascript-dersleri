// Temel fonksiyon tanımlama

function veriGetir() {
    console.log("Veriler Getirildi!!!")
}

// veriGetir()

function veriEkle(eklenecekVeri){
    console.log(eklenecekVeri + " sisteme eklendi !")
}

// veriEkle("Laptop")

// Değişkene normal fonksiyonu atama
let hesapla = function() {
    console.log(5+5)
}

// hesapla()

// Arrow fonksiyon tanımlama

let veriGetirArrow = () => console.log("Veriler yeni yöntemle getirildi!!!")
// veriGetirArrow()

let veriEkleArrow = (eklenecekYeniVeri) => console.log(eklenecekYeniVeri + " sisteme yeni yöntemle eklendi !")
// veriEkleArrow("Mustafa")

// Fonksiyonlarda dışarıdan parametre gönderildiği zaman fonksiyoni içerisinde tamamen farklı bir değere dönüşüyor,
// biz fonksiyon içerisinde istediğimiz değişikliği yapalım yine de dışarıki parametreye etki etmez.
// Scope çalışma mantığı vardır. 

// Fonksiyonlarda işlem sonucu oluşan değeri farklı bir yerde kullanmak istediğimiz zaman normal fonksiyonlarda;

function topla(){
    let result = 5+3
    return result
}

var result2 = topla() + 15

console.log(result2)

// Arrow fonksiyonlarda ise

let arrawFunc = () => { return 5 + 2 }

console.log(arrawFunc())

// İşlemini uygularız. 