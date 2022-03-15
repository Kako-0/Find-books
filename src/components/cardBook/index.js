import { useEffect, useState } from "react";
import getBooks from "../../requestBook";
import { Card, DescriptionText, Subtitle, Title, DescriptionContainer } from "./styles";

const CardBook = () => {
    const [books, setBooks] = useState([]);
    const [vI, setVI] = useState([]);
    useEffect(() => {
        getBooks(setBooks);
    }, []);
    useEffect(() => {
        setVI(books.map(e => e.volumeInfo));
    }, [books]);
    //infoLink
    return (
        <>
            {
                vI.length === 0 ? 
                    <p>loading... </p> 
                    :<Card>
                        <img src={vI[0].imageLinks.thumbnail} alt="img" />
                        <DescriptionContainer>
                            <Title>{vI[0].title}: {vI[0].subtitle}</Title>
                            <p>
                                {vI[0].authors.join(', ')} &#8226;
                                <Subtitle> {vI[0].publishedDate.substr(0,4)}</Subtitle>
                            </p>
                            
                            <DescriptionText>{vI[0].description}</DescriptionText>
                        </DescriptionContainer>
                    </Card>
            }
        </>
        
    )
}

export default CardBook