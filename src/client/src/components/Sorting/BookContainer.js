import React from 'react'
import BookFilter from './BookFilter'
import BookList from '../../components/BookList'
import {withBookConsumer} from '../../context'

function BookContainer({context}){

const {loading, 
    sortedBooks,
    genre,
    price, 
    publication_date, 
    average_rating,
    books} = context

if(loading){
    return ('Loading...')
}
    return(
        <>
            <BookFilter books = {sortedBooks}/>      
        </>
    );
}

export default withBookConsumer(BookContainer)

