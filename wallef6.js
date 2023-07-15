let cash = Number(prompt("informar o seu salario:"))
let reajuste = 0

if (cash <= 280){
    reajuste = 0.20 * cash + cash
    console.log(reajuste)
}
if (cash > 280 <= cash <= 700){
    reajuste = 0.15 * cash + cash
    console.log(reajuste)
}