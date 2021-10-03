
let family = {
    incomes: [2500, 3100, 500, 300, 150],
    expenses: [254, 1456, 2300, 100, 99]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    let balanceText = "negativo"

    const its0k = total >= 0
    if (total >= 0) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)

}

calculateBalance()



/*

let familia = {
    despesas: [],
    entradas: []
}

familia.despesas.push(1, 2, 3, 4, 1000)
familia.entradas.push(5, 6, 3, 10, 1200)


let somaEntrada = 0;
let somaSaida = 0;

for(let i = 0; i < familia.despesas.length; i++) {
    somaSaida += familia.despesas[i];
}

for(let i = 0; i < familia.entradas.length; i++) {
    somaEntrada += familia.entradas[i];
}


function soma() {
    let total = somaEntrada - somaSaida;
    console.log(total)

    let saldo;

    if(total >= 1) {
        saldo = "positivo";
    } 
    else {
        saldo = "negativo";
    }

    console.log(`R$${total}: seu saldo está ${saldo}!`)
}

soma()

*/




