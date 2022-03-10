import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    width: 100%;
    padding: 0 8rem;
    background-color: #fff;
    border-bottom: 1px solid #000;
`;

const Logo = styled.p`
    font-size: 3em;
    color: #fff;
    -webkit-text-stroke:  1px #000;
    cursor: pointer;

    :hover{
        color: #000;
    }
`;

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 8rem;
`;

const ItemList = styled.a`
    color: #777;
    cursor: pointer;
    text-decoration: none;
    
    :hover{
        color: #000;
    }
`;

export { HeaderContainer, List, ItemList, Logo };