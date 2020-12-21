// 1. Soal Pertama
// Penggunaan if else pada javascript:
// Tambahkan variabel untuk pengkondisian
var a = 1;
// masukkan variabel kedalam pengkondisian if else 
if (a = 1){
    a = "berhasil";
}
// Pada dalam kurung kurawal dapat menampilkan hasil dari berdasarkan pengkondisian if else di dalam buka kurung tutup kurung
// Tampilkan hasil dari if else menggunakan console.log
console.log(a);

// 2. Soal Kedua
function cekParameter(x){
    if (x){
        return console.log("ini parameternya " + x); 
    }else if(x === undefined) {
        return "Tidak ada parameternya";
    }
}

cekParameter('x');

// 3. Soal Ketiga
const salam = (waktu) => {
    if (waktu == 0) 
        return `Selamat pagi`;
    else if ( waktu == 10){
        return `Selamat pagi`;
    }else if (waktu >= 11 && 14){
        return `Selamat siang`;
    }else if ( waktu >= 15 <= 18){
        return `Selamat sore`;
    }else if (waktu >= 19 <= 24){
        return `Selamat malam`;
    }else if( waktu >= 24){
        return `Selamat malam`;
    }
}

console.log(salam('15'));

// 4. == (loose equality operator) adalah operator yang melakukan pengecekan pada nilai dari kedua operand.
   // === (strict equality operator)  adalah operator yang melakukan pengecekan terhadap tipe data keuda operand
   // != (not equal) adalah operator yang akan mengembalikan nilai true jika va1 bernilai berbeda dari nilai var2.
   // !=== (not equal value and type) adalah opeator yang akan mengembalikan false jika keuda operand memiliki tipe/nilai data yang sama


   function reverseString(str) {
    var currentString = str;
    var newString = '';
   for (let i = str.length - 1; i >= 0; i--) {
     newString = newString + currentString[i];
    }
    
    return newString;
   }
   console.log(reverseString('saya belajar javascript'));


   var kalimat = "Saya belajar Javascript";
   var ganti1 = kalimat.replace('Saya belajar Javascript','Javascript belajar Saya');   
   console.log(ganti1);


function reverseString(str){
    var currentString = str;
    var newString = '';

    for (let i = str.length-1; i>=0; i-- ){
        newString = newString + currentString[i];
    }

    return newString;
}

var baru = "rusak";

if (baru === reverseString(baru)){
    console.log(baru+"palindrome");
}else {
    console.log(baru+" tidak palindrome");
}

var arr =  ['Saya','belajar','javascript'];

for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}
