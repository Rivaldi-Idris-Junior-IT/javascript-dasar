// Foreach melakukan pengulangan menggunakan pada array
const arr_foreach = [1, 2, 3, 4, 5, 6];

arr_foreach.forEach(item => {
  console.log(item); 
});

// Includes menentukan nilai yang ada di dalam array tsb. kemudian akan mengembalikan nilai true atau false
const kendaraan = ['motor', 'mobil', 'pesawat'];

console.log(kendaraan.includes('mobil'));
console.log(kendaraan.includes('mob'));

// Filter memfilter kata yang ingin ditampilkan
const array_filter = [1, 2, 3, 4, 5, 6];

  const filtered = array_filter.filter(num => num > 3);
  console.log(filtered); 

  console.log(array_filter); 

//   Map yaitu menambah nilai dari dalam array
  const array_map = [1, 2, 3, 4, 5, 6];
  
  const oneAdded = array_map.map(num => num + 1);
  console.log(oneAdded);

  console.log(array_map);

// reduce melakukan sebuah perhitungan pada array dengan membaca dari kiri ke kanan ke dalam menjadi satu nilai hasil
  const array_reduce = [1, 2, 3, 4, 5, 6];

  const sum = array_reduce.reduce((total, value) => total + value, 0);
  console.log(sum); 


  // Some() memeriksa jika nilai pada array jika nilai pada array sesuai kondisi maka mengembalikan nilai true jika tidak mengembalikan nilai false
  const array_some = [1, 2, 3, 4, 5, 6];


  const largeNum = array_some.some(num => num > 4);
  console.log(largeNum); 


  const smallNum = array_some.some(num => num <= 0);
  console.log(smallNum); 

  //  Every () untuk mengecek apakah nilai dalam array tsb seuai dengan kondisi yang dibuat. jika kondisi sesuai hasil yang akan ditampilkan bernilai true sebaliknya maka dia false
  const array_every = [1, 2, 3, 4, 5, 6];  
  
  const lessTen = array_every.every(num => num < 10);
  console.log(lessTen); 

  //  Sort ( ) Menampilkan nilai di urut dari terbesar ke kecil atau kecil ke besar
  const array_sort = [1, 2, 3, 4, 5, 6];
  const alpha = ['e', 'a', 'c', 'u', 'y'];
  
  descOrder = array_sort.sort((a, b) => a > b ? -1 : 1);
  console.log(descOrder); 

  
  ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
  console.log(ascOrder); 

  // Array.from() mengubah nilai variabel yang mungkin menjadi array
  const name = 'kakEbiDiscordSayaNggakDibalas';
  const nameArray = Array.from(name);

  console.log(nameArray); 

    
    // Splice () mengubah beberapa nilai array yang ingin diganti
    let array_splice = ["I", "study", "JavaScript", "sekarang", "juga"];
    array_splice.splice(0, 3, "ayo", "belajar");
    console.log(array_splice);  
  


// 2. 
const name_orang = [
    'abigail','alexandra','alison',
    'amanda','angela','bella',
    'carol','caroline','carolyn',
    'deidre','diana','elizabeth',
    'ella','faith','olivia','penelope'
];

    function searchName(keyword,i){
      const filterNama = name_orang.filter(function(e){
        return e.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      });

      let batas = filterNama.slice(0,i)

      console.log(batas.map(callback => {
        if(batas.length < i ){
          console.log('Data kurang Dari ${i}')
        }
        return callback;
      }));
    }

    searchName('an',3);
              

    let tampilkan_data = [];
    function Seleksi (nomorAwal,nomorAkhir,arrayData){
      for(var i = 0; i < arrayData.length; i++){
        if (arrayData[i] >=nomorAwal && arrayData[i] <= nomorAkhir ){
            tampilkan_data.push(arrayData[i])            
        }else if (nomorAwal > nomorAkhir){
          console.log("Maaf nilai awal tidak boleh lebih besar dari nilai akhir");
          break
        }else if (arrayData.length < 5){
          console.log("Maaf nilai index tidak boleh kurang dari 5");        
          break
        }
        
      }      
      console.log(tampilkan_data);
    }
    
    Seleksi(5,20,[2, 25, 4, 14, 17, 30, 8])
    
    


    // let dataArray = [2, 25, 4, 14, 17, 30, 8];
    // let tampung = [];
    // let nilaiAwal = 5;
    // let nilaiAkhir = 20;
        
    //   for(var i = 0; i < dataArray.length; i++){
    //     if (dataArray[i] >=nilaiAwal && dataArray[i] <= nilaiAkhir ){
    //         tampung.push(dataArray[i])
    //     }else if (nilaiAwal > nilaiAkhir){
    //       console.log("Maaf nilai awal tidak boleh lebih besar dari nilai akhir")
    //     }else if (dataArray.length < 5){
    //       console.log("Maaf nilai index tidak boleh lebih dari 5")
    //     }
    //   }      
    // console.log(tampung);
    

    
    