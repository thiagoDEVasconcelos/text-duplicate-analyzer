import fs from 'fs';
import path from 'path';
import trataErros from './errors/funcoesErro.js';
import chalk from 'chalk';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';

const program = new Command();

program
  .version('0.0.1')
  .option('-t, --texto <string>', 'caminho do texto a ser processado')
  .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
  .action((options) => {
    const { texto, destino } = options;
    console.log('CHEGUEI AQUI');
    
    if (!texto || !destino) {
      console.error(chalk.red('erro: favor inserir caminho de origem e destino'));
      program.help();
      return;
    }
    
    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log(chalk.green('Processamento concluído com sucesso!'));
    } catch(erro) {
      console.log(chalk.red('Ocorreu um erro ao processar o arquivo:', erro.message));
      ;
    }
});

function processaArquivo(texto, destino) {
  fs.readFile(texto, 'utf-8', (erro, texto) => {
    try {
      if (erro) throw erro
      const resultado = contaPalavras(texto);
      criaESalvaArquivo(resultado, destino)
    } catch(erro) {
      trataErros(erro);
    }
  })
}

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const textoPalavras = montaSaidaArquivo(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, textoPalavras);
    console.log('arquivo criado');
  } catch(erro) {
    throw erro;
  }
}

program.parse(process.argv);