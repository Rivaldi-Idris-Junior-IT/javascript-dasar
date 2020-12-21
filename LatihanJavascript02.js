const user =  {
    username : "bukanebi",
    email : "bukanebi@email.com",
    password : "abcd12345"
}

// synchronous example
function example1(){
    console.log("angka 1")
    console.log("angka 2")
    console.log("angka 3")
    console.log("angka 4")
}

example1();

// Asyncronous example
function example2(){
    console.log("angka 1")
    console.log("angka 2")
    setTimeout(() => {
        console.log("angka 3")
    }, 1000)
    console.log("angka 4")
}
example2();

// Error in Asyncronouse
const getDataUser = () => {
    setTimeout (() => {
        return user.username
    }, 3000)
}
function example3(){
    const username = getDataUser()
    console.log(username)
}
example3();

// handle with callback
const getPassword = (cb) => {
    setTimeout (() => {
        return cb(user.password)
    }, 3000)
}

    // Celah 
    const getEmail = (cb) => {
        setTimeout(() => {
            return cb(user.email)
        }, 2000)
    }

    const getUsername = (cb) => {
        setTimeout(() => {
            return cb(user.username)
        }, 2000)
    }

    // const userLoginCelah = (password) => {
    //     getUsername((username) =>  {
    //         if (username){
    //             getEmail((email) => {
    //                 if (email){
    //                     getPassword((pass) => {
                            
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // }

const userLogin2 = (password) => {
    const passFromDB = getPassword((newpass) => {
        if (password == newpass){
            console.log("Anda berhasil login")
        }else {
            console.log("login gagal")
        }    
    })         
}

userLogin2("abcd12345")

// Promise 
const getPromiseUser = () => {
    return new Promise((resolve, reject) => {
        let err = false
        if (err){
            reject (new Error("Ada Kesalahan"))
        }else {
            setTimeout(() => {
                resolve(user)
            })
        }
    })
}

getPromiseUser()
    .then((res) => {
        console.log(res.password)
    })
    .catch((err) => {
        console.log(err)
    })
