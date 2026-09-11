import fs from 'fs';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf8', (err, data) => {
  verificaPalavrasDuplicadas(data);
});


function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const palavrasDuplicadas = [];
}