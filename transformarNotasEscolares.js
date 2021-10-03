/* ### Transformar notas escolares
Crie um algoritmo que transforme as notas do sistema numérico para sistema 
de notas em caracteres tipo A B C

*/

function getScore(score) {
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score <= 60 && score >= 0

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if (scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

return scoreFinal
}

console.log(getScore(10))


/*console.log("Transformando notas em Strings")

let nota = 92

switch (nota){
    case 1:
        if (nota > 90) {
            console.log("A")
        }
        break;
    case 2:
        if (nota >= 80 && nota <= 89){
            console.log("B")
        }
        break;
    case 3:
        if (nota >= 70 && nota <= 79){
            console.log("C")
        }
        break;
    case 4:
        if (nota >= 60 && nota <= 69){
            console.log("C")
        }
        break;
    case 4:
        if (nota < 60 && nota >= 0){
            console.log("F")
        }
        break;
    default:
        console.log("Nota inválida")
}
*/