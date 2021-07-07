import './styles.scss';
export function About() {
    return (
        <div className="about-container">
            <div className="description">
                <p>
                    Aplicação desenvolvida durante o processo seletivo para estágio em desenvolvimento na Alest.
                </p>

                <div className="social-medias">
                    <div id="instagram-button">
                        <a href="https://www.instagram.com/lucian_erick/?hl=pt-br">
                            <img src="./instagram-logo.svg" alt="Instagram" />
                        </a>
                    </div>
                    <div id="github-button">
                        <a href="https://github.com/LucianErick">
                            <img src="./github-icon.svg" alt="Github" />
                        </a>
                    </div>
                    <div id="linkedin-button">
                        <a href="https://www.linkedin.com/in/luciano-figueiredo/">
                            <img src="./linkedin-logo.svg" alt="Linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}