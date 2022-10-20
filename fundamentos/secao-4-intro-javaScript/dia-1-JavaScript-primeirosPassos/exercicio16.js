const custo = 100
const imposto = 0.2
const custoTotal = custo + (custo * imposto);
const valorDaVenda = 500;
const lucro = valorDaVenda - custoTotal
if (valorDaVenda < 0) {
    console.log('erro')
}else if (valorDaVenda < custoTotal) {
    console.log('prejuizo')
}else {
    console.log('o lucro de mil vendas foi: '+ lucro *1000)
}