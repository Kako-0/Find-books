import axios from "axios";

const BOOKAPI = process.env.REACT_APP_BOOK_API;

// Return a callback from any useState(param: setBooks)
const getBooksFromApi = async (setBooks, searchValue) => {
    const searchUrl =  searchValue.split(' ').join('+');
    try {
        const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchUrl}&key=${BOOKAPI}`)

        return setBooks(books.data.items);
    } catch (error) {
        console.log(error)
    }
        return setBooks([]);
}

export default getBooksFromApi;
