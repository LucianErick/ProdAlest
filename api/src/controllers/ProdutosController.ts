import { Request, Response } from 'express';
import { ProdutosService } from "../services/ProdutosService";

class ProdutosController {
    async listarProdutos(req: Request, res: Response): Promise<Response> {
        const produtosService = new ProdutosService();
        try {
            const listaProdutos = await produtosService.listarProdutosCadastrados();
            return res.json(listaProdutos);
        } catch (err) {
            return res.status(404).json({
                message: err.message
            })
        }
    }

    async exibirProduto(req: Request, res: Response): Promise<Response> {
        const { referencia } = req.body;
        const produtosService = new ProdutosService();
        try {
            const produto = await produtosService.exibirProdutoPorReferencia(referencia);
            return res.json(produto);
        } catch (err) {
            return res.status(404).json({
                message: err.message
            })
        }
    }

    async cadastrarProduto(req: Request, res: Response): Promise<Response> {
        const { nome, preco, fabricante, qtdDisponivel, categoria, thumbnail } = req.body;
        const produtosService = new ProdutosService();
        try {
            const produto = await produtosService.cadastrarProduto({ nome, preco, fabricante, qtdDisponivel, categoria, thumbnail });
            return res.json(produto);
        } catch (err) {
            return res.status(404).json({
                message: err.message
            })
        }
    }

    async editarProduto(req: Request, res: Response): Promise<Response> {
        const { referencia, nomeParametro, novoValor } = req.body;
        const produtosService = new ProdutosService();
        try {
            const editado = await produtosService.editarProduto({referencia, nomeParametro, novoValor});
            return res.json(editado);
        } catch (err) {
            return res.status(404).json({
                message: err.message
            })
        }
    }

    async excluirProduto(req: Request, res: Response): Promise<Response> {
        const { referencia } = req.body;
        const produtosService = new ProdutosService();
        try {
            const excluido = await produtosService.excluirProduto(referencia);
            return res.json(excluido);
        } catch (err) {
            return res.status(404).json({
                message: err.message
            })
        }
    }
}

export { ProdutosController };