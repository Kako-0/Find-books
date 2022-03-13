import { BtnMain, ContainerMain, DivSearch, InputMain } from "./styles";

const Search = () => {
    return (
        <ContainerMain>
            <DivSearch>
                <InputMain type="text" placeholder="Digite sua busca (livro, autor...)"/>
                <BtnMain type="button"/>
            </DivSearch>
        </ContainerMain>
    );
}

export default Search;