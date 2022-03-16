import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    background-color: #eee;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;  

const DescriptionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 1rem;
`;

const Title = styled.a`
    text-decoration: none;
    text-emphasis: none;
    color: #000;
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