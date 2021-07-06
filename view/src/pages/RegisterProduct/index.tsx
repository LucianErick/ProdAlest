import './styles.scss';
export function Register() {
    return (
        <div className="register-container">
            <div className="top">
                <h1>Cadastrar livro</h1>
                <img src="./text-field.svg" alt="Preencha todos os campos" />
            </div>
            <div className="register-form">
                <form>
                    <input type="text" name="nome" placeholder="Insira o nome" required/>
                    <input type="text" name="categoria" placeholder="Insira a categoria" required/>
                    <input type="text" name="fabricante" placeholder="Insira o fabricante" required/>
                    <input type="number" name="preco" placeholder="Insira o preço" required/>
                    <input type="number" name="qtdDisponivel" placeholder="Insira a quantidade disponível" required/>
                    <input type="url" name="thumbnail" placeholder="Insira o link para thumbnail" required/>
                </form>
                <button type="submit">Enviar</button>
            </div>
        </div>
    );
}