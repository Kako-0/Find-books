import { useEffect, useState } from "react";
import getBooks from "../../requestBook";
import CardBook from "../cardBook";
import { ListBookContainer, Loading } from "./styles";

const ListBook = () => {
    const [books, setBooks] = useState([]);
    const [vI, setVI] = useState([]);
    useEffect(() => {
        getBooks(setBooks);
    }, []);
    useEffect(() => {
        setVI(books.map(e => e.volumeInfo));
    }, [books]);
    return (
        <ListBookContainer>
            {
                vI.length === 0 ? 
                    <Loading>loading... </Loading> 
                    : vI.map(book =>  <CardBook book={book}/>)
            }
        </ListBookContainer>
        
    )
}

export default ListBook;