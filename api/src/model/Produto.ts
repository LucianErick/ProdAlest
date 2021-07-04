export type Produto = {
    nome: string;
    categoria: string;
    fabricante: string;
    preco: number;
    qtdDisponivel: number;
    referencia?: string;
    thumbnail?: string;
}