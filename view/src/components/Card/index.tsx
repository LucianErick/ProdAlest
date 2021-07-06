type Product = {
    nome: string,
    fabricante: string,
    categoria: string,
    preco: number,
    qtdDisponivel: number,
    thumbnail: string

}

export function Card(product: Product) {
    return (
        <div className="card-container">
            <img src={product.thumbnail} alt={product.nome}/>
            <span className="product-name">{product.nome}</span>
            <span className="product-category">{product.categoria}</span>
            <span className="product-author">{product.fabricante}</span>
            <span className="product-price">{product.preco}</span>
        </div>
    );
}