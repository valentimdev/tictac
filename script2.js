var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var primeira_linha=lines[0].split(' ')
var segunda_linha=lines[1].split(' ')
var vencedora1 = [['A1', 'B2', 'C3']]
console.log(primeira_linha.includes('A1' && 'B2' && 'C2'))
console.log(primeira_linha)
if ((primeira_linha.includes('A1'&& 'B2'&& 'C3')) || (primeira_linha.includes('A1'&& 'A2'&& 'A3')) 
|| (primeira_linha.includes('B1'&& 'B2'&& 'B3')) || (primeira_linha.includes('C1'&& 'C2'&& 'C3'))
|| (primeira_linha.includes('A1'&& 'B1'&& 'C1'))|| (primeira_linha.includes('A2'&& 'B2'&& 'C2'))
|| (primeira_linha.includes('A3'&& 'B3'&& 'C3')) ){
    console.log('Player 1 Wins!')
}else if ((segunda_linha.includes('A1'&& 'B2'&& 'C3')) || (segunda_linha.includes('A1'&& 'A2'&& 'A3')) 
|| (segunda_linha.includes('B1'&& 'B2'&& 'B3')) || (segunda_linha.includes('C1'&& 'C2'&& 'C3'))
|| (segunda_linha.includes('A1'&& 'B1'&& 'C1'))|| (segunda_linha.includes('A2'&& 'B2'&& 'C2'))
|| (segunda_linha.includes('A3'&& 'B3'&& 'C3')) ){
    console.log('Player 2 Wins!')
}else{console.log('Draw!')}
