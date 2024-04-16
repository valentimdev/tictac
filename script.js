var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var primeira_linha=lines[1].split(' ')
var segunda_linha=lines[2].split(' ')
var linhas = ['A', 'B', 'C'];
var  colunas = ['1', '2', '3'];
var diagonais = [['A1', 'B2', 'C3'], ['A3', 'B2', 'C1']]
for(var i=0;i<primeira_linha.length;i++){
    var combinação=linhas[i]+colunas[i]
    if(combinação==primeira_linha[i]){
        
    }
}
if()