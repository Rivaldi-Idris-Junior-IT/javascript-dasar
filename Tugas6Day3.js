// 1. Soal Pertama
// Perulangan For merupakan perulangan yang termasuk dalam couted loop, karena sudah jelas berapa kali ia akan mengulang.
// contoh : 
for (let i = 0; i < 5; i++){
    console.log('Hello World');
}

// Perulangan for in mengulang setiap properti enumerable dari sebuah objek, dalam urutan sembarang. Untuk setiap properti yang berbeda, pernyataan dapat dieksekusi.
// Contoh: 
let mobil = {
    merek: 'Toyota',
    model: 'Sedan',
    tahun: '2010'
  };
  
  for (let jenis in mobil) {
    console.log(`${jenis} --> ${mobil[jenis]}`);
  }

// Pengulangan for of pada objek yang dapat diulang, termasuk: built-in String, Array, objek seperti array (mis., argumen atau NodeList), TypedArray, Map, Set, dan iterables yang ditentukan pengguna. 
// Contoh :
let str = 'Lihat itu';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Perulangan while juga dapat menjadi perulangan yang counted loop dengan memberikan counter di dalamnya.
// Contoh :
var umur = 5;

while (umur < 10){
    console.log("Umurmu belum masuk 10 tahun");
    umur++;
}

// Perulangan do..while akan melakukan perulangan sebanyak 1 kali terlebih dahulu, lalu mengecek kondisi yang ada di dalam kurung while.
// Contoh :
var nomor =1;
do {
    console.log("Perhitungan nomor dari" + nomor );
    nomor ++;
}while(nomor<=10);


// 2. Soal Kedua
const printNumber = num => {
    for (i =0; i <= num; i++){
        console.log(i)

    }
}
printNumber(3)

// 3. Soal Ketiga
function ganjilGenap(angka){
    var ganjil = "Ganjil";
    var genap = "Genap";
    if ( angka %2== 0){
        console.log(genap);
    }else {
        console.log(ganjil);
    }
}
ganjilGenap(3);


// 4. Soal Ke empat
function deretganjil(deret){
    const ganjil = "Ganjil";
    const genap = "Genap";
    for(i = 1; i <= deret; i++){
        if ((i%2)===0){
            console.log(i,genap);
        }else if ((i%2)!=0) {
            console.log(i,ganjil);
        }
    }
}

deretganjil(4);

// 5. Soal Kelima
// Array Multidiemnsional ditambah for loop
const kegiatan = [
    ['cuci piring'],
    ['susun piring'],
    ['makan '],
    ['ngoding'],
    ['saya Tidur']
];

const pukul = [
    ['Pada pukul 7 saya'],
    ['Pada pukul 8 saya'],
    ['Pada pukul 9 saya'],
    ['Pada pukul 10 saya'],
    ['Pada pukul 1 saya']
];

for (let i = 0; i <= kegiatan.length; i++){
    for (let i = 0; i<=pukul.length; i++){
        console.log(pukul[i]+ ' ' + kegiatan[i]);
    }
    
}

// // Membuat bintang
// function printTriangle(num) {
//     for (let i = 0; i < num; i++) {
//       let str = ""
//       for (let j = 0; j < (i + 1); j++) {
//         str += "*"
//       }
//       console.log(str)
//     }
//   }
//   printTriangle(5);







