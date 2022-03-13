import { HeaderContainer, ItemList, List, Logo } from "./style";

function Header (){
    return (
        <HeaderContainer>
            <Logo>FindBook</Logo>
            <List>
                <li>
                    <ItemList href="https://github.com/Kako-0/Find-books" target="_blank">Sobre</ItemList>
                </li>
                <li>
                    <ItemList href="https://www.linkedin.com/in/kayro-fran%C3%A7a-664365203/">Contato</ItemList>
                </li>
            </List>
        </HeaderContainer>
    );
}

export default Header;