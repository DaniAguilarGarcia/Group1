import React from 'react'
import BookFilter from './BookFilter'
import BookList from '../../components/BookList'
import {withBookConsumer} from '../../context'

function BookContainer({context}){

const {loading, sortedTitle,sortedAuthor,sortedPrice, sortedRating,sortedDate,books} = context

if(loading){
    return ('Loading...')
}
    return(
        <>
            <BookFilter books = {sortedTitle}/>    
              
        </>
    );
}

export default withBookConsumer(BookContainer)

/*import React from 'react'
import BookFilter from './BookFilter'
import BookList from '../../components/BookList'
import {BookConsumer} from '../../context'

export default function BookContainer({context}){

return(
    <BookConsumer>
        {
            (value) => {
                const {loading, sortedTitle,sortedAuthor,sortedPrice, sortedRating,sortedDate,books} = value

            if(loading){
                return ('Loading...')
            }
                return(
                    <div>
                        <BookFilter books = {sortedTitle}/>                      
                    </div>
                )
            }
        }

    </BookConsumer>
);
}
*/
