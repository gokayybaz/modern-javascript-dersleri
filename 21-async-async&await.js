// Promise'deki thenlerden farklı olarak aynı senkron kod yazar gibi, okunması kolay kodlar yazmak için kullanırız.
// Bunun için thenleri silip işlemleri bir değişkene atayıp, bir fonksiyona toplayacağız.
// Bunu fonksiyona topladığımız zaman bir senkron yapı olacaktır, fakat bizim istediğimiz işlemler asenkron(beklemeli) olarak gerçekleşmektedir.
// işte bunu tanımlamak için async ve await keywordlerini kullanırız.
// async : asenkron olduğunu belirtiriz.
// await : nerelerde spesifik olarak beklemesi gerektiğini söylemek için kullanırız.
// gelelim bu işlemleri uygulamaya

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

async function displayRestaurant() {
  // gelelim hata yakalamaya ;
  // try ile bu işlemleri dene diyoruz,
  // catch ile de herhangi birinde bir hata/reject varsa yakala diyoruz.
  // bir önceki then/catch yapısındaki gibi her metota spesifik hata yakalama yazmak zorunda değiliz
  // özel işlemler yapsak dahi bu blok içerisinde olduğu için ona özel hatayı yakalayacaktır.
  // bu blok hata yakaladığı zaman try'daki işlemleri sonlandırır, catch bloğuna geçer.
  try {
    const user = await getUser();
    const address = await getAddresses(user.userName);
    const restaurants = await getRestaurants(address);
    console.log("Kullanıcıya uygun restoranlar : " + restaurants);
  } catch (error) {
    console.log("Hata : " + error);
  }
}

// gelelim neden asenkron işlemleri bir fonksiyon içerisinde yazdığımıza ;
// çünkü javascript dosyası içerisinde direk await yapamıyoruz onu bir async fonksiyon içerisinde yapmamız gerekiyor.

displayRestaurant();
