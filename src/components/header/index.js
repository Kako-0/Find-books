import { HeaderContainer, ItemList, List, Logo } from "./style";

function Header (){
    return (
        <HeaderContainer>
            <Logo>FindBook</Logo>
            <List>
                <li>
                    <ItemList href="https://github.com/Kako-0" target="_blank">Sobre</ItemList>
                </li>
                <li>
                    <ItemList href="/">Contato</ItemList>
                </li>
            </List>
        </HeaderContainer>
    );
}

export default Header;