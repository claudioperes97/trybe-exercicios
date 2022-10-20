let salarioBruto = 6000
let alicota = 0
if (salarioBruto <= 1556.94) {
    alicota = 0.08
}else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    alicota = 0.09
}else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    alicota = 0.11
}else {
    alicota = 570.88
}
let salarioBase = 0
if (alicota <= 0.11) {
    salarioBase = salarioBruto - (salarioBruto * alicota)
} else {
    salarioBase = salarioBruto - alicota
}
let ir = 0
let parcela = 0
if (salarioBase < 1903.98) {
    parcela = 0
    ir = 0
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = 0.075
    parcela = 142.8
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05 ) {
    ir = 0.15
    parcela = 354.8
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    ir = 0.225
    parcela = 636.13
}else {
    ir = 0.275
    parcela = 869.36
}
let impostoDeRenda = (salarioBase * ir) - parcela
let resultado = salarioBase - impostoDeRenda
console.log(resultado); 