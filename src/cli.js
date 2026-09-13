import fs from 'fs';
import trataErros from './errors/funcoesErro.js';
import { quebraEmParagrafos } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf8', (err, data) => {
  try{
    if(err) throw err;
    const resultado = quebraEmParagrafos(data);
    criaESalvaArquivo(resultado, endereco);
  } catch(err) {
    trataErros(err);
  }
});

async function criaESalvaArquivo (listaPalavras, enderecoArquivo) {
  const caminhoArquivo = `${enderecoArquivo}/resultado.txt`;
  const textoPalavras = JSON.stringify(listaPalavras);
  try {
    await fs.promises.writeFile(caminhoArquivo, textoPalavras);
    console.log("Arquivo criado com sucesso");
  } catch (err) {
    throw err;
  }
}