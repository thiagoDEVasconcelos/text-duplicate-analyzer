import fs from 'fs';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf8', (err, data) => {
  quebraEmParagrafos(data);
});

function quebraEmParagrafos (texto) {
  const listaParagrafos = texto.toLowerCase().split("\n");
  verificaPalavrasDuplicadas(listaParagrafos);
}

function limpaPalavras(listaDePalavras) {
  return listaDePalavras.map((palavra) => {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g, '');
  });
}

function verificaPalavrasDuplicadas(paragrafos) {
  const listaPalavras = paragrafos.join(" ").split(" ");
  const palavrasLimpas = limpaPalavras(listaPalavras).filter((palavra) => palavra !== "");
  const resultado = {};

  palavrasLimpas.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  })

  console.log("RESULTADO", resultado);
}