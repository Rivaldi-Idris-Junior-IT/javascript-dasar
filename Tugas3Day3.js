// 1. Soal Pertama
function salam(nama) {
    return console.log("Halo " + nama + " selamat pagi!");
}

salam('Rivaldi');

// 2. Soal Kedua
function tambah(bilanganPertama,bilanganKedua){
    return bilanganPertama + bilanganKedua;
}

var hasil = tambah(4,3);
console.log(hasil);

// 3. Soal Ketiga
function penjelasan(penjelasanArrowFunction){
    return penjelasanArrowFunction;
}

var penjelasanArrow = penjelasan('Arrow function adalah sintak penulisan fungsi yang bisa dibilang lebih singkat, menggunakan token baru yaitu “=>”, fungsi yang dideklarasikan menggunakan panah ini bersifat anonim.');

console.log(penjelasanArrow);

// 4. Soal Ke empat

var perkalian = (bilanganPertama, bilanganKedua) => { return bilanganPertama * bilanganKedua };

console.log(perkalian (6,5));


