import './styles.scss';
import { Link } from 'react-router-dom';
export function Header() {
    return (
        <header className="header-container">
            <div className="brand-name">
                <Link to="/">
                    <span id="contrast">Livr</span>
                    <span>Alest</span>
                </Link>
            </div>
            <div className="informations">
                <Link to="/sobre" id="about">
                    Sobre
                </Link>
                <Link to="/cadastrar" id="register-product">
                    Adicionar
                </Link>
            </div>
        </header >
    );
}