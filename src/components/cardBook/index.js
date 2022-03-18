import { Card, DescriptionText, Subtitle, Title, DescriptionContainer } from "./styles";

const CardBook = (props) => {
    return (
        <Card>
            <img src={props.book.imageBook} alt="img" />
            <DescriptionContainer>
                <Title href={props.book.infoLink} target="_blank">
                    {
                        props.book.subtitle === '' ?
                            `${props.book.title}`
                            : `${props.book.title}: ${props.book.subtitle}`
                    }
                </Title>
                <p>
                    {props.book.authors.join(', ')} &#8226;
                    <Subtitle> {props.book.publishedDate.substr(0,4)}</Subtitle>
                </p>
                
                <DescriptionText>{props.book.description}</DescriptionText>
            </DescriptionContainer>
        </Card>
    )
}

export default CardBook;