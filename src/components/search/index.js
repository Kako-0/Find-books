import { useState } from "react";
import ListBook from "../listBook";
import { BtnMain, ContainerMain, DivSearch, InputMain } from "./styles";

const Search = () => {
    const [toogle, setToogle] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [submitInputSearch, setSubmitInputSearch] = useState('');

    const submitSearch = () => {
        if (inputSearch.length < 2) return;
        if (inputSearch.length !== 0 && toogle === true){
            setSubmitInputSearch(inputSearch);
        }else{
            setSubmitInputSearch(inputSearch);
            setToogle(!toogle);
        }
    }

    return (
        <>
            <ContainerMain>
                <DivSearch>
                    <InputMain 
                        type="text" 
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)} 
                        placeholder="Digite sua busca (livro, autor...)"
                    />
                    <BtnMain 
                        type="button" 
                        onClick={submitSearch}
                    />
                </DivSearch>
            </ContainerMain>
            {toogle && <ListBook search={submitInputSearch}/>}
        </>
    );
}

export default Search;