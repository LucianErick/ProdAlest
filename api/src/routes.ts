import { Router } from 'express';
import { ProdutosController } from './controllers/ProdutosController';

const routes = Router();

const produtosController = new ProdutosController();

routes.get('/v1/produtos', produtosController.listarProdutos);
routes.get('/v1/produto', produtosController.exibirProduto);
routes.post('/v1/produto', produtosController.cadastrarProduto);
routes.delete('/v1/produto', produtosController.excluirProduto);
routes.put('/v1/produto', produtosController.editarProduto);

export default routes;