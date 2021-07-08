import { Router } from 'express';
import { ProdutosController } from './controllers/ProdutosController';

const routes = Router();

const produtosController = new ProdutosController();

routes.get('/v1/listar-produtos', produtosController.listarProdutos);
routes.get('/v1/produtos/:nome', produtosController.listarProdutosPorNome)
routes.get('/v1/produto/:referencia', produtosController.exibirProduto);
routes.post('/v1/produto', produtosController.cadastrarProduto);
routes.delete('/v1/produto:/referencia', produtosController.excluirProduto);
routes.put('/v1/produto', produtosController.editarProduto);

export default routes;