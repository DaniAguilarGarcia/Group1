/* est viene siendo my context.js

import React, { PureComponent } from 'react'
import { bookData, detailBook } from '../data';

const BookContext = React.createContext();
//Provider - provide all info
//Consumer - to use info provided

class BookProvider extends PureComponent {
    
    state = {
            books: bookData, 
            detailBook : detailBook
        }
    
    handleDetail = () =>{
        console.log('hello from detail');
    }

    addToCart = () =>{
        console.log('hello from add to cart');
    }

    render() {
        return (
            <BookContext.Provider 
            value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

const BookConsumer = BookContext.Consumer;

export {BookProvider, BookConsumer};

*/