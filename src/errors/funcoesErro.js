export default function trataErros(erro) {
    if (erro.erro === 'ENOENT') {
        throw new Error('Arquivo não encontrado:', erro.message);
    } else {
        return 'Ocorreu um erro ao ler o arquivo:', erro.message; 
    }
}