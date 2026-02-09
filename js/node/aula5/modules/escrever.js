const fs = require('fs').promises;

module.exports = function escreve(caminho, dados){
    fs.writeFile(caminho, dados, {flag: 'w'}); 
}