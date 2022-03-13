import styled from 'styled-components';
import bgMain from '../../assets/images/background-main.jpg'
import searchIcon from '../../assets/images/search-white.svg'


const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
  background: url(${bgMain}) center no-repeat;
  background-size: cover;
  opacity: 0.7;
  `;

const InputMain = styled.input`
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    border: none;
    border-bottom-left-radius: 0.4rem;
    border-top-left-radius: 0.4rem;
    transition: box-shadow 0.8s;
    background-color: #333;
    color: #fff;

    ::placeholder {
        color: #fff
    }
    :focus {
        outline: none;
    }
`;

const BtnMain = styled.button`
    width: 3rem;
    height: 100%;
    background: url(${searchIcon}) no-repeat center #333;
    border: none;
    border-bottom-right-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    cursor: pointer;
`;

const DivSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 3rem;

    :focus-within {
        outline: none;
        box-shadow: 0.2rem 0.8rem 1.3rem #000;
    }
`;



export { ContainerMain, DivSearch, InputMain, BtnMain};