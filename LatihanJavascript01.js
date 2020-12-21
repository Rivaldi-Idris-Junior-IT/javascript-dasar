// Function parameter
function sayName (name, region){
    if (region == "indo"){
        console.log("hallo" + name)
    }
    else if (region == "eng"){
        console.log("hello" + name)
    }
}

sayName("ebi","eng")

// function with return
function perkalian(angka1, angka2){
    return angka1 * angka2
}

console.log(perkalian(10,20))

const secret = "abcd1234";
function checkPassword(Password){
 
    if (secret != Password){
        console.log("password Salah")
    }else {
        console.log("Password Benar")
        console.log("Anda Berhasil Login")
    }
}
checkPassword("1234abcd")

// Function rest Param 
function penjumlahan (...numbers){
    for (let i = 0; i< numbers.length; i++){
        console.log(numbers[i])
    }
}
// Function rest Param2



penjumlahan(20, 30) 

// Function Expression
const hallo = function (){
    console.log("hellow")
}

// Function Deklarasi
function sayHello(){
    console.log("Hallow")
}

// Function ES6
const yourLocation = (location) => {
    console.log("you here " + location)
}
yourLocation("depok")


// Method 
const myData = {
    name : "ebi",
    lokasi : () => {
        console.log("Depok")
    },
}

myData.lokasi()

// built in Method
const arr = ["apel","jagung"]
let str = "bukan"
let myInt = 20

myInt.toString()
arr.push("mangga")
console.log(arr)

// Callback
function calback(value){
    console.log(value)
}

function cetakNama (nama, calbackFn){
    return calbackFn(nama)
}

cetakNama("bukanebi",calback)