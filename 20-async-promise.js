// Callback'den farkı;
// callBack'de biz dışarıdan çalışacağı sinyal metotunu veriyorduk, fakat burada o bize çalışacağı sinyal metotunu veriyor.
// resolve -> geriye dönecek değer.

// Yani kısacası bir Promise tanımlanıyor bu promise backend'den ilgili verileri çekip bize geri dönderiyor.
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      {
        resolve("Hello World !");
      }
    }, 1000);
  });
}

// getData.then() : ilgili promise bittiğinde demektir.
// Bizde burada veri çekme işlemi için yazılan promise'in işlemi bittiğinde gelen veriyi istediğimiz gibi işleyebiliyoruz.
getData().then((message) => console.log(message));

// Bir önceki derste yaptığımız örneği promise'e göre düzenleyelim;

function getUser() {
  // reject ile hata fırlatabiliyoruz.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve({ userName: "gokay" });
      //   console.log("Kullanıcı Geldi");
      reject("Kullanıcı bulunamadı !");
    }, 2000);
  });
}

function getAddresses(userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Adana", "Kozan", "İstanbul"]);
      console.log(userName + " adlı kullanıcının adresleri Geldi");
    }, 1000);
  });
}

function getRestaurants(addressses) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["A Restoranı", "B Restoranı", "C Restoranı"]);
    }, 1000);
  });
}

getUser()
  .then((user) => getAddresses(user.userName))
  .then((addressses) => getRestaurants(addressses))
  .then((restaurants) => console.log("Önerilen Restoranlar : " + restaurants))
  // error handling
  // catch ile de reject ile fırlatılan hatayı yakalayabiliyoruz.
  // Not bu 3 then için geçerlidir, herhangi birinde bir hata olursa bu catch yakalayacaktır.
  // sadece birinde hem özel işlemler yaptırıp hem de sadece onun hatasını yakalamak için onu bir blok içerisine ekleyip,
  // hem özel işlem kodlarını hem de özel hata yakalama metnini yazabiliriz.
  .catch((error) => console.log("Hata : " + error));

// Böylece önceki örnekteki callback hell'den kurtulduk ve daha okunaklı bir yapı kurduk.
// Bu yapıyı daha da okunaklı hale bir sonraki derste getireceğiz...
