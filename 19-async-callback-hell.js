// Async yapılara geçmeden önce : Senkron yapılara bakalım;
// Nedir bu Senkron Yapılar?
// Javascript'in kodu yazdığımız sıraya uygun bir şekilde baştan sona çalıştırmasıdır.

// Senkron yapıyı inceleyelim;

// İlk önce burası çalışacaktır.
//console.log("İlk console.log");

// Sonra burada böyle bir fonksiyon tanımladığını bilmek için bu imzayı belleğe atacaktır.
// (Tabi heran çalışacağını bildiği için belleğe atıyor.)
function getConsoleLog() {
  console.log("Function içerisindeki console.log");
}
// Daha sonra bellekten bu fonksiyonu çağırıp içerisindeki kodun çalışmasını sağladık.
//getConsoleLog();

// Son olarakta bu console.log'u çalıştıracaktır.
//console.log("İkinci console.log");

// Olay şurada kopmaktadır; biz javascript ile bir uygulama oluşturduğumuz zaman genellikle bir api'dan veri çekeriz ve veri geldikten
// sonra o veriler ile işlemler yaparız. İşte bu durumda senkron yapı işimize yaramayacaktır, çünkü veriyi çekip o veriye göre
// işlem yaptıracağımız zaman bir bekleme süresi meydana gelmektedir. İşte bizde bu bekleme sürelerini beklemesi için senkron yapılar
// yerine asenkron yapılar kullanırız. Verinin çekilmesini bekleyip ona göre işlem yapılacak.
// Bir de async yapıları veri çekme veya veri gönderme işlemlerinde sitenin çalışmasında herhangi bir aksaklık yaşanmaması için kullanırız.

// Yukarıdakilere göre temel bir yapı kuralım;

//console.log("İlk"); // Adım 1 -> Burası çalışacak

//setTimeout(() => console.log("Bu bir async yapıdır."), 2000); // Adım 3 -> 2sn sonra burası çalışacak.

//console.log("İkinci"); // Adım 2 -> Burası çalışacak

// Bu yapımızı biraz geliştirelim

// console.log("Gelişmiş ilk");

function getUser(callBack) {
  console.log("Function Body");
  setTimeout(() => {
    console.log("Hello World");
    callBack({ userName: "gokayybaz" });
  }, 2000);
}

// Burada fonksiyon içerisinde return edilen değer async bir yapıda yani belli bir süre sonra geldiği için,
// javascript senkron bir yapıda dosyayı okuduğu için bu değişkeni konsola bastığımız zaman "undefined" hatası göreceğiz
// çünkü user değişkeninin değeri 2 saniye sonra atanacak, fakat senkron bir yapıda hemen consola yazıldığı için undefined
// dönmektedir.

// Bunu çözmek için : eski yönteme bakalım; GetUser bir adet callback fonksiyon alsın ve döndereceği değeri içerisine alsın,
// getUser çalıştıktan 2 saniye sonra içerisine gönderdiğimiz callBack fonksiyonu çalıştırıyor. Ve bize callBack fonksiyonla bir
// değer verdiği için biz çalıştırdığımız yerde içerisindeki dataya ulaşabiliyoruz. Bu noktada undefined dönmez çünkü iki saniye
// sonra biz değerin dönmesi için callback fonksiyon ile çalıştırdık ve dataya erişebildik. Diğer türlü dataya erişimi sağlayamıyorduk,
// çünkü javascript beklemeden geçiyordu. Sonradan datayı değere atıyordu ve biz sonradan herhangi bir işlem yaptırmadığımız için
// data ilgili değişkene atanamıyordu. Fakat biz burada datanın gelmesini sağlayan bir callback fonksiyon gönderdiğimiz için
// belirtilen süre sonunda hem datamız gelecek hem de timeout içerisine yazdığımız kodumuz çalışacaktır.

// setTimeout return ile o anda o veriyi dönemediği için ilgili değişkene atayamamaktadır, callBack kullanınca biz o veriyi callBack
// ile gönderip sonradan callBack fonksiyonu çalıştırdığımız zaman veri süresi tamamlandıktan sonra bize callBack fonksiyon
// sayesinde gönderilecektir.

// Javascript çalışmaya başlıyor -> araya giren async işlemleri tanımlayıp belleğin bir tarafında bekletiyor -> async olmayan kodları-
// sırasıyla çalıştırıyor -> süresi tamamlanan async kodları çalıştırarak dosya okumasını tamamlıyor.
// getUser((user) => console.log(user.userName));

// console.log("Gelişmiş son");

// Gelelim CallBack Hell Yapısına

function getUser(callBack) {
  setTimeout(() => {
    callBack({ userName: "gokay" });
    console.log("Kullanıcı Geldi");
  }, 2000);
}

function getAddresses(userName, callBack) {
  setTimeout(() => {
    callBack(["Adana", "Kozan", "İstanbul"]);
    console.log("Kullanıcının adresleri Geldi");
  }, 1000);
}

function getRestaurants(addressses, callBack) {
  setTimeout(() => {
    callBack(["A Restoranı", "B Restoranı", "C Restoranı"]);
    console.log("Kullanıcıya uygun restoranlar listelendi.");
  }, 1000);
}

// İlk önce kullanıcıyı çek,
// Kullanıcının adresini al,
// Kullanıcıya uygun restoranları göster

getUser((user) => {
  getAddresses(user.userName, (addressses) => {
    getRestaurants(addressses, (restaurants) => {
      console.log(restaurants.toString());
    });
  });
});

// Callback Hell yapımız bu şekildedir, Fakat bize çok dezavantajı vardır; bunlardan en önemlisi: burada kullanıcının kesin geleceği,
// adreslerinin kesin geleceği ve restoranların kesin geleceği düşünülmektedir. Fakat diyelim ki backend'de bir sıkıntı oldu ve bilgi/bilgiler
// gelemedi işte bu durumda bu uygulama patlar. Bunu çözmek için bir sonraki bölümde daha efektif bir kullanım göreceğiz.
