import { request, response } from "express";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { Product } from "../../types/types";
import './styles.scss';

export function Search() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get('/produtos').then((response) => {
            setProducts(response.data);
        })
    }, []);

    return (
        <div className="search-products-container">
            <div className="search-header">
                <form>
                    <input type="text" name="pesquisa" placeholder="Digite o nome de um livro" />
                    <button>
                        <img src="./search-icon.svg" alt="Pesquisar livros" />
                    </button>
                </form>
            </div>
            <div className="search-result">
                {products.map(product => {
                    return (
                        <Card key={product.referencia} product={product} />
                    );
                })}
            </div>
        </div>
    );
}