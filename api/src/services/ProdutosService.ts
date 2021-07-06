import { Produto } from "../model/Produto";
import { admin, db } from "../server";
import { v4 as uuid } from 'uuid';

interface IEditarProduto {
    referencia: string;
    nomeParametro: string;
    novoValor: string;
}

class ProdutosService {

    async listarProdutosCadastrados() {
        let listaProdutos = [];
        const produtosRef = db.collection('produtos');
        const produtos = await produtosRef.get();
        if (produtos.empty) { throw new Error("Não há produtos cadastrados") }
        produtos.forEach(doc => {
            listaProdutos.push(doc.data());
        })
        return listaProdutos;
    }

    async listarProdutosPorNome(nome: string) {
        const produtosRef = db.collection('produtos');
        let lista = [];
        const listaProdutosPorNome = await produtosRef.where('nome', '==', nome).get();
        if (listaProdutosPorNome.empty) { throw new Error("Não há produtos com esse nome cadastrados") }
        listaProdutosPorNome.forEach(doc => {
            lista.push(doc.data());
        })
        return lista;
    }

    async exibirProdutoPorReferencia(referencia: string) {
        const produtosRef = db.collection('produtos');
        let dadosProduto = null;
        let produto = await produtosRef.where('referencia', '==', referencia).get();
        produto.forEach(doc => {
            dadosProduto = doc.data();
        })
        return dadosProduto
    }

    async cadastrarProduto({ nome, preco, fabricante, qtdDisponivel, categoria, thumbnail }: Produto) {
        const id = uuid();
        const dados = {
            referencia: id,
            nome: nome,
            fabricante: fabricante,
            preco: preco,
            categoria: categoria,
            qtdDisponivel: qtdDisponivel,
            thumbnail: thumbnail,
            atualizadoEm: new Date()
        }
        await db.collection('produtos').doc(id).set(dados);
    }

    async excluirProduto(referencia: string) {
        const produtoRef = db.collection('produtos').doc(referencia);
        const produto = await produtoRef.get();
        if (!produto.exists) {
            throw new Error("Produto não encontrado.");
        } else {
            const deletado = await db.collection('produtos').doc(referencia).delete();
        }
    }

    async editarProduto({ referencia, nomeParametro, novoValor }: IEditarProduto) {
        const produtoRef = db.collection('produtos').doc(referencia);
        const produto = await produtoRef.get();
        if (!produto.exists) {
            throw new Error("Produto não encontrado.");
        } else {
            switch (nomeParametro.toUpperCase()) {
                case 'NOME':
                    await produtoRef.update({ nome: novoValor });
                    break;

                case 'FABRICANTE':
                    await produtoRef.update({ fabricante: novoValor });
                    break;

                case 'CATEGORIA':
                    await produtoRef.update({ categoria: novoValor });
                    break;

                case 'THUMBNAIL':
                    await produtoRef.update({ thumbnail: novoValor });
                    break;

                case 'PRECO':
                    await produtoRef.update({ preco: Number(novoValor) });
                    break;

                case 'QTDDISPONIVEL':
                    await produtoRef.update({ qtdDisponivel: Number(novoValor) });
                    break;

                default:
                    throw new Error("Parâmetro inválido.")
            }
            await produtoRef.update({ atualizadoEm: new Date() })
        }
    }
}

export { ProdutosService };