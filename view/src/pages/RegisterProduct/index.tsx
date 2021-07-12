import { response } from 'express';
import { useRef, useState } from 'react';
import { api } from '../../services/api';
import { v4 as uuid } from 'uuid';
import './styles.scss';

export function Register() {

    const [nome, setNome] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [fabricante, setFabricante] = useState<string>("");
    const [preco, setPreco] = useState<number>(0);
    const [qtdDisponivel, setQtdDisponivel] = useState<number>(0);
    const [url, setUrl] = useState<string>("");

    const nomeRef = useRef(null);
    const categoriaRef = useRef(null);
    const fabricanteRef = useRef(null);
    const precoRef = useRef(null);
    const qtdDisponivelRef = useRef(null);
    const urlRef = useRef(null);

    const handleNomeInput = (event) => {
        event.preventDefault();
        setNome(nomeRef.current.value);
    }

    const handleCategoriaInput = (event) => {
        event.preventDefault();
        setCategoria(categoriaRef.current.value);
    }

    const handleFabricanteInput = (event) => {
        event.preventDefault();
        setFabricante(fabricanteRef.current.value);
    }

    const handlePrecoInput = (event) => {
        event.preventDefault();
        if (precoRef.current.value >= 1) {
            setPreco(precoRef.current.value);
        } else {
            setPreco(1);
        }
    }

    const handleQuantidadeInput = (event) => {
        event.preventDefault();
        if (precoRef.current.value >= 1) {
            setQtdDisponivel(precoRef.current.value);
        } else {
            setQtdDisponivel(1);
        }
    }

    const handleUrlInput = (event) => {
        event.preventDefault();
        setUrl(urlRef.current.value);
    }

    let cadastro = {
        id: uuid(),
        nome,
        categoria,
        fabricante,
        thumbnail: url,
        preco: Number(preco),
        qtdDisponivel: Number(qtdDisponivel)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        nomeRef.current.value = "";
        categoriaRef.current.value = "";
        fabricanteRef.current.value = "";
        precoRef.current.value = "";
        qtdDisponivelRef.current.value = "";
        urlRef.current.value = "";
        await api.post('/produtos', cadastro);
    }



    return (
        <div className="register-container">
            <div className="top">
                <h1>Cadastrar livro</h1>
                <img src="./text-field.svg" alt="Preencha todos os campos" />
            </div>
            <div className="register-form">
                <form>
                    <input type="text" name="nome" placeholder="Insira o nome" required ref={nomeRef} onInput={handleNomeInput}/>
                    <input type="text" name="categoria" placeholder="Insira a categoria" required ref={categoriaRef} onInput={handleCategoriaInput}/>
                    <input type="text" name="fabricante" placeholder="Insira o fabricante" required ref={fabricanteRef} onInput={handleFabricanteInput}/>
                    <input type="number" name="preco" placeholder="Insira o preço" required ref={precoRef} onInput={handlePrecoInput}/>
                    <input type="number" name="qtdDisponivel" placeholder="Insira a quantidade disponível" required ref={qtdDisponivelRef} onInput={handleQuantidadeInput}/>
                    <input type="url" name="thumbnail" placeholder="Insira o link para thumbnail" required ref={urlRef} onInput={handleUrlInput}/>
                </form>
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    );
}