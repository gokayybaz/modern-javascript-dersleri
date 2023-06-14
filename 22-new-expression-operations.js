// Template Literal String
// String birleştirme yaparken toplama operatörü yerine "template string"'leri kullanabiliriz.
function helloLiteralString(name) {
  return `Hello ${name}!`;
}
console.log(helloLiteralString("Gökay"));

// One Line if-else
const user = {
  name: "Gökay",
  surName: "Baz",
};

function conditionHello(person) {
  const name = person ? person.name : "Yabancı";
  return `Hey ${name}`;
}

// Logical Or
function logicalOrHello(person) {
  // person geliyorsa onun name'ini al, gelmiyorsa "bilinmiyor"'u al.
  const name = person.name || "Bilinmiyor";
  return `Kullanıcı : ${name}`;
}

function logicalAndHello(person) {
  // Person varsa ve Person içerisinde name adlı property varsa
  // değer ataması için iki koşuluda sağlamak zorundadır.
  // null veya undefined bir değer gönderirsek bir bakıyor person yok, işlemi sonlandırıp null dönecektir.
  const name = person && person.name;
  return `Kim o : ${name}`;
}

function helloOptionalChaning(person) {
  // ? ile person'un var olup olmadığına bakıyoruz var ise person.name 'ini almasını istiyoruz.
  const name = person?.name || "Bilinmiyor";
  return `Kişi : ${name}`;
}

// logicalORdan farkı : gelen değer sadece null ve undefined ise "Yabancı" çalışacaktır.
function helloNullishCoalescing(person) {
  // null değil ise person.name, null ise "Yabancı" demiş olduk.
  const name = person.name ?? "Yabancı";
  return `Person : ${name}`;
}

console.log(conditionHello());

// One Line if-else'den farkı içerisine bir değer göndermek zorundayız ve gönderdiğimiz değer yoksa or çalışacaktır.
console.log(logicalOrHello(user));

console.log(logicalAndHello(user));
