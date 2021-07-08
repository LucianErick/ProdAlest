import './styles.scss';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="home-container">
            <div className="text">
                <h1>Bem vinde à LivrAlest!</h1>
                <h2>Aqui você pode adicionar, pesquisar, editar e remover livros</h2>
                <Link to="/pesquisar" id="search-button">Pesquisar livros</Link>
            </div>
            <div className="illustration">
                <img src="/reading-book.svg" alt="Lendo livros"/>
            </div>
        </div>
    );
}