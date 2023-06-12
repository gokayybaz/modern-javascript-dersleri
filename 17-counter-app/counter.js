// Dom Manipulation
// Butonlar ve alanlar HTML'den seçiciler ile getirildi.
let countText = document.getElementById("txt-count")
// let decrementButton = document.getElementById("btn-decrement")
let decrementButton = document.querySelector("#btn-decrement")
let incrementButton = document.getElementById("btn-increment")
// HTML tarafında ilgili alana yazılacak ve manipüle edilecek değer tanımlandı.
let value = 0
// Getirilen butonlara event tanımlandı ve manipüle edilecek değer üzerinde işlemler yaptırılıp html'in ilgili alanına yazıldı.
incrementButton.addEventListener("click", () => {
    countText.innerHTML = value = value+1
})
decrementButton.addEventListener("click", ()=> {
    if(value > 0) {
       countText.innerHTML = value = value-1
    }else {
        alert("Sayı 0'dan küçük olamaz")
    }
})