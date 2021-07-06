export function Search() {
    return (
        <div className="search-products-container">
            <div className="search-header">
                <form action="">
                    <input type="text" name="pesquisa"/>
                    <button type="submit">
                        <img src="./search-icon.svg" alt="Pesquisar livros"/>
                    </button>
                </form>
            </div>
            <div className="search-result">
                
            </div>
        </div>
    );
}