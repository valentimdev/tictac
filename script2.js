var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var primeira_linha=lines[0].split(' ')
var segunda_linha=lines[1].split(' ')
var vencedora1 = [['A1', 'B2', 'C3']]
console.log(primeira_linha)
function checar(linha){
    return (linha.includes('A1') && linha.includes('B2') && linha.includes('C3')) ||
    (linha.includes('A1') && linha.includes('A2') && linha.includes('A3')) ||
    (linha.includes('B1') && linha.includes('B2') && linha.includes('B3')) ||
    (linha.includes('C1') && linha.includes('C2') && linha.includes('C3')) ||
    (linha.includes('A1') && linha.includes('B1') && linha.includes('C1')) ||
    (linha.includes('A2') && linha.includes('B2') && linha.includes('C2')) ||
    (linha.includes('A3') && linha.includes('B3') && linha.includes('C3'))
}
if ((primeira_linha.includes('A1') && primeira_linha.includes('B2') && primeira_linha.includes('C3')) ||
    (primeira_linha.includes('A1') && primeira_linha.includes('A2') && primeira_linha.includes('A3')) ||
    (primeira_linha.includes('B1') && primeira_linha.includes('B2') && primeira_linha.includes('B3')) ||
    (primeira_linha.includes('C1') && primeira_linha.includes('C2') && primeira_linha.includes('C3')) ||
    (primeira_linha.includes('A1') && primeira_linha.includes('B1') && primeira_linha.includes('C1')) ||
    (primeira_linha.includes('A2') && primeira_linha.includes('B2') && primeira_linha.includes('C2')) ||
    (primeira_linha.includes('A3') && primeira_linha.includes('B3') && primeira_linha.includes('C3'))) {
    console.log('Player 1 Wins!');
}else if ((segunda_linha.includes('A1') && segunda_linha.includes('B2') && segunda_linha.includes('C3')) ||
(segunda_linha.includes('A1') && segunda_linha.includes('A2') && segunda_linha.includes('A3')) ||
(segunda_linha.includes('B1') && segunda_linha.includes('B2') && segunda_linha.includes('B3')) ||
(segunda_linha.includes('C1') && segunda_linha.includes('C2') && segunda_linha.includes('C3')) ||
(segunda_linha.includes('A1') && segunda_linha.includes('B1') && segunda_linha.includes('C1')) ||
(segunda_linha.includes('A2') && segunda_linha.includes('B2') && segunda_linha.includes('C2')) ||
(segunda_linha.includes('A3') && segunda_linha.includes('B3') && segunda_linha.includes('C3'))){
    console.log('Player 2 Wins!')
}else{console.log('Draw!')}
