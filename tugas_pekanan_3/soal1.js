const prompt = require('prompt-sync')({sigint: true});
let res

console.log("Akar pangkat 2 dari x")
console.log("---------------------")
const x = prompt('Inputkan angka genap: ')


if (isNaN(parseInt(x))) {
    console.log("Tidak bisa input selain angka")
} else if (x < 0) {
    console.log("Tidak bisa input bilangan negatif")
} else if (x%2 == 1){
    console.log("Tidak bisa input bilangan ganjil")
} else {
    res = Math.sqrt(x);
    console.log("Akar pangkat 2 dari " + x + " = " + res)
}
