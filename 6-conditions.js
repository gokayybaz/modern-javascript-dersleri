// Note : "||" -> yada
// Note : "&&" -> ve

// if 
let isLoginned = false

if(isLoginned== true){
    // console.log("Kullanıcı sisteme giriş yapmış")
}

// if-else

if(isLoginned == true) {
    // console.log("Kullanıcı sisteme giriş yapmış")
}else {
    // console.log("Kullanıcı sisteme giriş yapmamış")
}

// if-else-if

let index = 2

if(index == 0){
    console.log("Client is Administrator")
}else if(index == 1){
    console.log("Client is Manager")
}else {
    console.log("Client is Customer")
}

// One Line if else

let isChecked = true

isChecked == true ? console.log("Kontrol edilmiştir.") : console.log("Kontrol Edilmemiştir.")

// "?" -> if
// ":" -> else


// switch case
let dayIndex = 3

switch(dayIndex) {
    case 0:
        console.log("Pazartesi")
    break;
    case 1:
        console.log("Salı")
    break;
    case 2:
        console.log("Çarşamba")
    break;
    case 3:
        console.log("Perşembe")
    break;
    case 4:
        console.log("Cuma")
    break;
    case 5:
        console.log("Cumartesi")
    break;
    case 6:
        console.log("Pazar")
    break;
}