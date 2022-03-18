import { useEffect, useState } from "react";
import bookInfo from "../../modal/bookInfo";
import getBooksFromApi from "../../requestBook";
import CardBook from "../cardBook";
import { ListBookContainer, Loading } from "./styles";

const ListBook = (props) => {
    const [getBooks, setGetBooks] = useState([]);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooksFromApi(setGetBooks, props.search);
    }, [props.search]);
    useEffect(() => {
        setBooks(getBooks.map(e => e.volumeInfo));
    }, [getBooks]);
    return (
        <ListBookContainer>
            {
                books.length === 0 ? 
                    <Loading>loading... </Loading> 
                    : books.map((book, i) =>  {
                        const coverBook = book.imageLinks === undefined ? undefined : book.imageLinks.thumbnail;
                        const bookMapped = new bookInfo(book.title, book.subtitle, book.authors,
                                                coverBook, book.publishedDate, 
                                                book.description, book.infoLink);
                        return <CardBook key={i} book={bookMapped}/>
                    })
            }
        </ListBookContainer>
        
    )
}

export default ListBook;