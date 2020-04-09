/*import React from 'react'
import BookFilter from './BookFilter'
import BookList from '../../components/BookList'
import {withBookConsumer} from '../../context'

function BookContainer({context}){
    const {sortedTitle,sortedAuthor,sortedPrice,sortedRating,sortedDate,books} = context;

return(
    <>
        <BookFilter books={books}/>
        <BookList books={sortedTitle}/>
    </>
);
}
export default withBookConsumer(BookContainer)

/*function BookContainer() {
    return (
        <BookConsumer>
                {value => {
                    const {sortedTitle,sortedAuthor, sortedPrice,sortedRating,sortedDate,books} = value
                
                return(
                    <div>
                        Hello From Book BookContainer
                        <BookFilter books={books}/>
                        <BookList books={sortedTitle}/>
                    </div>
                );
            }}
        </BookConsumer>
    );
}

export default BookContainer*/
