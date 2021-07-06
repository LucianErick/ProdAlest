import './styles.scss';

export function Home() {
    return (
        <div className="home-container">
            <div className="text">
                <h1>Bem vinde ao soLivros!</h1>
                <h2>Aqui você pode adicionar, pesquisar, editar e remover livros</h2>
                <a href="#" id="search-button">Pesquisar livros</a>
            </div>
            <div className="illustration">
                <img src="/reading-book.svg" alt="Lendo livros"/>
            </div>
        </div>
    );
}