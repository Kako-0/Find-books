import styled from 'styled-components';

const ListBookContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
`;

const Loading = styled.p`
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2em;
`;

export { Loading, ListBookContainer };