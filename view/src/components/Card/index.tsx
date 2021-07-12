import { Product } from "../../types/types";
import './styles.scss';

type Props = {
    product: Product;
    onDeleteProduct: (product: Product) => void;
}

export function Card({ product, onDeleteProduct }: Props) {
    const price = product.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return (
        <div className="card-container">
            <div className="product-thumbnail">
                <img src={product.thumbnail} alt={product.nome} />
            </div>
            <div className="no-img-infos">
                <div className="infos">
                    <h1 className="product-name">{product.nome}</h1>
                    <div className="book-information">
                        <p className="product-author">{product.fabricante}</p>
                        <p className="product-category">{product.categoria}</p>
                    </div>
                    <p className="product-price">{price}</p>
                </div>
                <div className="options-button">
                    <button id="delete" onClick={() => onDeleteProduct(product)}>
                        <img src="./delete.svg" alt="Excluir produto" />
                    </button>
                    <button>
                        <img id="edit" src="./edit.svg" alt="Editar produto" />
                    </button>
                </div>
            </div>
        </div>
    );
}