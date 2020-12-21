// 1.
const biodata = {
    name : "Rivaldi Idris",
    umur : 23,
    hobbies : "Ngoding, Gaming",
    isMarried : false,
    schooList: 
        [ 
          
            {
                name : "Sekolah Dasar Negeri 42 Kota Jambi",
                yearIn : "2003",
                yearOut : "2009",
                major : null,            
            },        
            {
                name : "Sekolah menengah pertama 11 Kota Jambi",
                yearIn : "2009",
                yearOut : "2012",
                major : null,            
            },    
          {
                name : "Sekolah menengah pertama 10 Kota jambi",
                yearIn : "2012",
                yearOut : "2015",
                major : "IPA"
            },
        {
            name : "Sekolah Tinggi Ilmu Komputer Dinamika bangsa kota jambi ",
            yearIn : "2015",
            yearOut : "2019",
            major : "Teknik Informatika"    
            }
        ],
    
    skills: 
        {
        beginner : "video editing",
        advanced : "Desain",
        expert : "Coding",
        },
    
    interestingInCoding : true
}

console.log(biodata);

// 2.
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

const total = 80 + 90 + 89 + 69;
const rata2 = total/4;


var nilaiSiswa = 85;

if (nilaiSiswa >= 90){
    console.log("A");
}else if (nilaiSiswa >= 80 ){
    if (nilaiSiswa <= 89 ){
        console.log("B");
    }
}else if (nilaiSiswa >= 70 ){
    if (nilaiSiswa <= 79 ){
        console.log("C");
    }
}else if (nilaiSiswa >= 60 ){
    if (nilaiSiswa <= 69 ){
        console.log("D");
    }
}else if (nilaiSiswa >= 0 ){
    if (nilaiSiswa <= 59 ){
        console.log("E");
    }
}else {
    console.log("Anda masuk sekolah luar biasa saja");
}
    
// 3. 
    let a = 1;
    let val = "";
    if (typeof a != 'number'){
        console.log("Harus Number");
    }else{
     
        for(let i=5; i>=a; i--){           
            for (let j = 1; j<=i; j++){   
                val += j;
            }
            val += "\n";
        }
        console.log(val);
    }
    
    
// 4.
let hobby =  {
    name : "Rivaldi Idris",
    username : "Aldi",
    email : "aldi@gmail.com"
}

let data = {
    id : 1,
    ...hobby,
    address : 
    {
        street : "Jl Walisongo",
        suite : "RT 03 3219",
        city : "Kota Jambi",
        zipcode : "0888-1234"
    },
    phone : "082302768773",
    website : "rivaldi_bio.co.id"
}

console.log(data);

const data2 = data.address.street
const data3 = data.address.city

console.log(data2);
console.log(data3);




