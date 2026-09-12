import fs from 'fs';
import { trataErros } from './errors/funcoesErro.js';
import { quebraEmParagrafos } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf8', (err, data) => {
  try{
    if(err) throw err;
    quebraEmParagrafos(data);
  } catch(err) {
    trataErros(err);
  }
});