// console.log('Selamat Anda berhasil menggunakan javascript pada website');
// alert('TERIMA KASIH');


//Variabel JAVASCRIPT
 x = 100;
var x;
console.log(x);
// sama dengan

var x;
x = 100;
console.log(x);

//HINDARI PENGGUNAAN VAR DIKARENAKAN SIFATNYA YANG HOISTING(MENGANGKAT)

let y;
y = 300;
y = 500;
console.log(y);
//let adalah variabel yang sangat efisien pengganti var(tidak hoisting)

const c = 456;
console.log(c);
//Bersifat immutable atau tidak perlu di inisiasi kembali

//////////////////////////////


//Tipe data JAVASCRIPT

let ab;
console.log(typeof(ab));
//Variabel yang tidak memiliki nilai, maka akan menghasilkan undefined jika dicari tipe datanya

let ac = 10;
console.log(typeof(ac));

let av = 17.25;
console.log(typeof(av));
//Tipe data Number

let postfix = 5;
console.log(postfix++);
let prefix = 5;
console.log(++prefix);
console.log(postfix);
//jika x++, statement akan menghasilkan nilai variabel sebelum ditingkatkan
// jika ++x, statement akan menghasilkan nilai variabel setelah ditingkatkan nilainya

let nama = "Achmad";
console.log('namaku adalah' + nama);
//String pada umumnya

let pembuktian = 2;
let penyalahan = 3;

let hasil = pembuktian > penyalahan;
console.log(hasil);
//boolean pada umumnya

let ray = ["Take" , 42.5 , true , 10];
console.log(ray[1]);
//Array pada javascript menggunakan []

let user = {
    firstname : "Harry",
    lastname : "potter",
    age : 20,
    isMuggle :  false ,
    stuff : ["Magic Wind", "Flying Car", "Owl"]

};

console.log("Hallo nama saya "+ user.firstname + " " + user.lastname);
console.log("Umur saya " + user.age + " tahun");
//Objek pada JAVASCRIPT

let jalu = {
    nama : {
        first : "Achmad",
        last : "Rijalu"
    },
    Age : 19,
    Status : true
};

console.log("Perkenalkan namaku " + jalu.nama.first + " " + jalu.nama.last);
//Object Pada JAVASCRIPT DAPAT DIMASUKKAN LEBIH DALAM LAGI

//MODE USE STRICT PADA JAVASCRIPT

// "use strict";
// x = 9;       // ini akan dianggap error karena variabel belum dideklarasikan
// showAngka();   // ini akan dianggap error karena function belum dideklarasikan
 
// function showAngka() {
//   var x = 9;
//   alert(x);
// }



// x = 9;       // ini tidak dianggap error karena tidak kena mode Strict
// showAngka();   // ini tidak dianggap error karena tidak kena mode Strict
 
// function showAngka() {
//   “use strict”;
//    x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
//   alert(x);
// }

//////////////////////////////

//kEMBALI KE CALC
