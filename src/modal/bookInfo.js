import coveBook from '../assets/images/notAvailable.jpg'

export default class bookInfo {

    constructor(title, subtitle, authors, imageBook, publishedDate, description, infoLink){
        this.title = title === undefined ? '' : title;
        this.subtitle = subtitle === undefined ? '' : subtitle;
        this.authors = authors === undefined ? [''] : authors;
        this.imageBook = imageBook === undefined ? coveBook : imageBook;
        this.publishedDate = publishedDate === undefined ? '' : publishedDate;
        this.description = description === undefined ? '' : description;
        this.infoLink = infoLink === undefined ? '' : infoLink;
    }

}