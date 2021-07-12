import { request, response } from "express";
import { useEffect, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { Product } from "../../types/types";
import './styles.scss';

export function Search() {

    const [products, setProducts] = useState<Product[]>([]);
    const [foundProducts, setFoundProducts] = useState<Product[]>(products); // o problema tá aqui
    const inputRef = useRef(null);

    useEffect(() => {
        api.get('/produtos').then((response) => {
            setProducts(response.data);
        })
    }, []);

    const onHandleSearch = async (event) => {
        event.preventDefault();
        if (!inputRef.current.value) {
            setFoundProducts(products);
        } else {
            await api.get(`/produtos?nome=${inputRef.current.value}`).then((response) => {
                if ((response.data).length === 0) {
                    alert("Sem produtos com esse nome");
                } else {
                    setFoundProducts(response.data);
                }
                inputRef.current.value = "";
            })
        }
    }

    const onHandleDelete = async (product: Product) => {
        await api.delete(`/produtos/${product.id}`)
        await api.get('/produtos').then((response) => {
            setProducts(response.data);
        })
        console.log(products)
    }

    return (
        <div className="search-products-container">
            <div className="search-header">
                <form>
                    <input type="text" name="pesquisa" placeholder="Digite o nome de um livro" ref={inputRef} />
                    <button onClick={onHandleSearch}>
                        <img src="./search-icon.svg" alt="Pesquisar livros" />
                    </button>
                </form>
            </div>
            <div className="search-result">
                {
                    foundProducts.map(product => {
                        return (
                            <Card key={product.id} product={product} onDeleteProduct={onHandleDelete} />
                        );
                    })
                }
            </div>
        </div>
    );
}