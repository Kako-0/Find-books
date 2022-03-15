import axios from "axios";

const BOOKAPI = process.env.REACT_APP_BOOK_API;
const url = "https://www.googleapis.com/books/v1/volumes?q="
//https://www.googleapis.com/books/v1/volumes?q=clean+code&key=${BOOKAPI}



const getBooks = async (setBooks) => {
    try {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=clean+code&key=${BOOKAPI}`)

        return setBooks(books.data.items);
    } catch (error) {
        console.log(error)
    }
        return setBooks([]);
}

export default getBooks;
