// 1. Soal Pertama

var a = "arka";
var b = "demy";
var c = "arkademy";

function arkademy(arr){
    for(let i = 1; i <= arr; i++ ){
        if (i%3 == 0){
            console.log(a);
        }else if (i%5 == 0){
            console.log(b);
        }else if (i%5 == 0 && i%3 == 0){
            console.log(c);
        }
        console.log(i);
    }
        
}

arkademy(5);

// 2. Soal Kedua
function ganjil(nilai) {
    if (nilai%2!=0){
        console.log("True");
    }else{
        console.log("False");
    }
}

function genap(nilai1){
    if (nilai1%2== 0){
        console.log("True");
    }else{
        console.log("False");
    }
}

ganjil(3);
ganjil(6);
genap(4);

// 3. Soal Ketiga
function cekParameter(param){
    if (param = Boolean.isBoolean){
        console.log("Parameter" + param + "adalah Boolean");        
    }else if (param = Object.isObject){
        console.log("Parameter" + param + "adalah object");        
    }else if (param = String.isString){
        console.log("Parameter" + param + "adalah string");
    }else if (param = Number.isNumber){
        console.log("Parameter" + param + "adalah number");
    }else if (param = Array.isArray){
        console.log("Parameter " + param + "adalah array");
    }
}

cekParameter([1, 2, 9]);