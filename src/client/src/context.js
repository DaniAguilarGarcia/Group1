import React, { Component} from "react";
import BookList from "./components/BookList";
import axios from 'axios';
import {Pagination} from 'react-bootstrap';

const BookContext = React.createContext();

class BookProvider extends Component {
  state = {
    books: [],
    cart: [],
    modalOpen: false,
    modalBook: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    detailsBooks: [],
    sortedBooks : [],
    topSellers: [],
    isTopSeller: false,
    active: 1,
    count: 10,
    minCount : 10,
    pageStart: 0,
    pageEnd: 10,
    pageList: []
    };


  getBook = () => {
    axios.get('/books/')
    .then((response)=>{
      const data = response.data;
      this.setState({ books: data});
      this.setState({ modalBook: data});
      this.setState({detailsBooks: data});
      console.log('Data has been received')
    })
    .catch(()=> {
      alert('error retrieving data for context');
    });
  }
  
  componentDidMount() {
    this.getBook();
    this.setBooks();

    this.setState(
      {pageList:this.initPagination()
      });
  }

  setBooks = () => {
    let books = [];
      books.forEach(item => {
      const singleItem = { ...item };
      books = [...books, singleItem];
    });
    this.setState(() => {
      return { books };
    }, this.checkCartItems);
  };

  handleChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;
    console.log(value)

    this.setState(
      {
       count: value
       }
      
     )
  };

  calculatePagination = (event) => {
    if(event.target.text != 'undefined'){
      console.log(event.target.text)
      let pages = []
      for (let number = 1; number <= 5; number++) {
        pages.push(
          <Pagination.Item onClick={this.calculatePagination.bind(this)} key={number} active={number === parseInt(event.target.text)}>
            {number}
          </Pagination.Item>,
        );
      this.setState({pageList:pages, active: parseInt(event.target.text)})
      }
    }
  }
  
  initPagination = () => {
    let pages = []
  
    for (let number = 1; number <= 5; number++) {
      pages.push(
        <Pagination.Item onClick={this.calculatePagination.bind(this)} key={number} active={number === 1}>
          {number}
        </Pagination.Item>,
      );
    }
  return pages;
  }

  getItem = id => {
    const book = this.state.books.find(item => item.id === id);
    return book;
  };
  handleDetail = id => {
    const book = this.getItem(id);
    this.setState(() => {
      return { detailBook: book };
    });
  };
  addToCart = id => {
    let tempBooks = [...this.state.books];
    const index = tempBooks.indexOf(this.getItem(id));
    const book = tempBooks[index];
    book.inCart = true;
    book.count = 1;
    const price = book.price;
    book.total = price;

    this.setState(() => {
      return {
        books: [...tempBooks],
        cart: [...this.state.cart, book],
        detailBook: { ...book }
      };
    }, this.addTotals);
  };
  openModal = id => {
    const book = this.getItem(id);
    this.setState(() => {
      return { modalBook: book, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedBook = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedBook);
    const book = tempCart[index];
    book.count = book.count + 1;
    book.total = book.count * book.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedBook = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedBook);
    const book = tempCart[index];
    book.count = book.count - 1;
    if (book.count === 0) {
      this.removeItem(id);
    } else {
      book.total = book.count * book.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };
  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  removeItem = id => {
    let tempBooks = [...this.state.books];
    let tempCart = [...this.state.cart];

    const index = tempBooks.indexOf(this.getItem(id));
    let removedBook = tempBooks[index];
    removedBook.inCart = false;
    removedBook.count = 0;
    removedBook.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        books: [...tempBooks]
      };
    }, this.addTotals);
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setBooks();
        this.addTotals();
      }
    );
  };
  render() {

      return (
      
      <BookContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          calculatePagination: this.calculatePagination,
          initPagination: this.initPagination,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </BookContext.Provider>
     
    );
  }
}

const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer, BookContext};

export function withBookConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BookConsumer>
        {value => <Component {...props} context={value} />}
      </BookConsumer>
    );
  };
}