//  1. Soal Pertama
 var printTriangle;
 printTriangle = (num) =>{
    for (let i = 0; i < num; i++) {
        let str = ""
        for (let j = 0; j < (i + 1); j++) {
          str += "*"
        }
        console.log(str)
      }
  }

  printTriangle(5);

// 2. Soal Kedua
  printSquare = (num) =>{
    for (let i = 0; i < num; i++) {
        let str = "****"        
        console.log(str)
      }
    }
    printSquare(4);

// 3. Soal Ketiga
function gradeCheck(nilai){
    if (nilai <= 50){
        console.log("Tidak Lulus");
    }else if( nilai >= 65){
        console.log("Lulus");
    }    
}
gradeCheck(65);

// 4. Soal Ke empat
let nilai = [50,70,90];
function addArray(arr){
    return console.log([nilai+' '+arr]);
}
addArray([50,30]);