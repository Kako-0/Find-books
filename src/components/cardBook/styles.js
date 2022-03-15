import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
    background-color: #eee;
`;  

const DescriptionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
`;

const Title = styled.p`
    font-size: 1.2em;
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.span`
    color: #444;
`;

const DescriptionText = styled.p`
    width: 90%;
    margin-top: 0.5rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2em;
    max-height: 3.6em;
`;

export {Card, DescriptionContainer, Title, Subtitle, DescriptionText}
