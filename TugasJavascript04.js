// function reverseString(str){
//     let currentString = str;
//     let newString = '';

//     for (let i = str.length-1; i>=0; i-- ){
//         newString = newString + currentString[i];
//     }

//     return newString;
// }

// let baru = "rusak";

// if (baru === reverseString(baru)){
//     console.log(baru+" palindrome");
// }else {
//     console.log(baru+" tidak palindrome");
// }

// Filter code berdasarkan jarak nol 
let arr =  ['Saya','belajar','javascript'];
let tampilkan_array = [];

for (var i = arr.length - 1; i >= 0; i--) {  
  tampilkan_array.push(arr[i]);
}
console.log(tampilkan_array);



const divideAndSort = 5956560159466056;

const arrayOfDigits = Array.from(String(divideAndSort), Number);

console.log(arrayOfDigits);

function ambilnol (value){
    return value ==  0;
}

  const filtered = arrayOfDigits.filter(num => num != 0);  

  const bagi_pertama = filtered.slice(0,5);

  const bagi_kedua = filtered.slice(6,12)
  
  const bagi_ketiga = filtered.slice(12,14)
  
  bagi_pertama.sort(function(a,b){
      return a - b;
  });

  bagi_kedua.sort(function(a,b){
    return a - b;
  });

  bagi_ketiga.sort(function(a,b){
    return a - b;
  });

  const fusion = bagi_pertama.concat(bagi_kedua).concat(bagi_ketiga);

  const allComplete = parseInt(fusion.join(''));

  console.log(allComplete);

// Contoh yang kedua 
function divideAndSort(value){
  const division = value.toString().split("0")
  for (let num in division){
    division[num] = division[num].split("").sort().join('')
  }
  console.log(parseInt(division.join('')))
}

divideAndSort(5956560159466056)