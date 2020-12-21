const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        let err = false;
        setTimeout(() => {
            const dataBay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataBay.find((item) => {
                return item === day
            })
            if (err) {
                reject(new Error('Hari ini bukan hari kerja'))

            } else {
                resolve(cek,"Adalah hari kerja")
            }
        }, 1000)
    })
}
//  then catch yaitu mengolah hasi hasil promise sukses dan gagal
cekHariKerja("senin")
    .then((cek) => {
        console.log(cek)
    })
    .catch((err) => {
        console.log(err)
    })
// try catch yaitu menangani async await pada fungsi then catch  
const examplesAsync = async () => {
    try {
        const dataharikerja = await cekHariKerja()
        console.log(dataharikerja)
    } catch (err) {
        console.log(err)
    }
}

// 2.
const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'];
        if (!error) {
            callback(month)
        } else {
            callback(new error('Sorry Data Not Found', []))
        }
    }, 4000)
}

function callback(value) {
    console.log(value.map(material => material))
}

getmonth(callback);

// 3.1
const filterCari = (nama, limit) => {
    return new Promise((resolve, reject) => {
        const name_orang = [
            'abigail', 'alexandra', 'alison',
            'amanda', 'angela', 'bella',
            'carol', 'caroline', 'carolyn',
            'deidre', 'diana', 'elizabeth',
            'ella', 'faith', 'olivia', 'penelope'
        ];
        const filterNama = name_orang.filter(function (e) {
            return e.toLowerCase().indexOf(nama.toLowerCase()) > -1
        });

        let batas = filterNama.slice(0, limit)

        if (batas.length < limit) {
            reject(new error('Hari ini bukan hari kerja'))
        } else {
            resolve(batas);
        }

    })

}
filterCari('an', 3)
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((reject) => {
        console.log(reject)
    })

// 3.2
const seleksiNomor = (nilaiAwal, nilaiAkhir, arrayData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tampilkan_data = [];
            for (var i = 0; i < arrayData.length; i++) {
                if (arrayData[i] >= nilaiAwal && arrayData[i] <= nilaiAkhir) {
                    resolve(tampilkan_data.push(arrayData[i]))
                } else if (nilaiAwal > nilaiAkhir) {
                    reject(new error("Maaf nilai awal tidak boleh lebih besar dari nilai akhir"))

                } else if (arrayData.length < 5) {
                    reject(new error("Maaf nilai index tidak boleh kurang dari 5"))

                }

            }
            console.log(tampilkan_data);

        },3000);
    });
}

seleksiNomor(5, 20, [2, 25, 4, 14, 17, 30, 8])
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((reject) => {
        console.log(reject)
    })

const contohAsync = async () => {
    try {
        const dataseleksiNomor = await seleksiNomor()
        console.log(dataseleksiNomor)
    } catch (err) {
        console.log(err)
    }
}

// fetch('https://jsonplaceholder.typicode.com/users')
// //  .then(response => response.json())
// .then(response => response.json())
// .then (data => {
//    data.forEach(element => console.log(element.name))
  
// })

// PAKAI CATCH PROMISE
// fetch('https://jsonplaceholder.typicode.com/users')
// //  .then(response => response.json())
// .then(response => response.json())
// .then (data => {
//    data.forEach(element => console.log(element.name))
// })
// .catch(err => console.log(err.message))


// PAKAI FOR SAMA PROMESE ASYNC
// const fetch = require('node-fetch')

// const getApiData = () => new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(result => resolve(result))
//         .catch(err => reject(err))
// });
// (async () => {
//     try {
//         const dataApi = await getApiData();
//         for (let i = 0; i < dataApi.length; i++) {
//             console.log(dataApi[i].name)
//         }
//     } catch (err) {
//         console.log(err.message)
//     }
// })();
