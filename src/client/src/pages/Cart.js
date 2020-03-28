import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addQ, subtractQ } from '../components/shoppingCart/cartActions'
import Calculate from '../components/shoppingCart/Calculate';


class Cart extends Component {
    //remove book from cart
    constructor(props) {
        super(props) 
        console.log(props)

        this.books = [
            {id:1,title: "book1", desc: "Placeholder desc", price: 10.23},
            {id:2,title: "book2", desc: "Placeholder desc", price: 9.17},
            {id:3,title: "book3", desc: "Placeholder desc", price: 10.99},
            {id:3,title: "book4", desc: "Placeholder desc", price: 1.99},
            {id:3,title: "book5", desc: "Placeholder desc", price: 18.99},
            {id:3,title: "book6", desc: "Placeholder desc", price: 20.99},
            {id:3,title: "book7", desc: "Placeholder desc", price: 89.99},
            {id:3,title: "book8", desc: "Placeholder desc", price: 54.99},
            {id:3,title: "book9", desc: "Placeholder desc", price: 34.99},
        ]

    }

   
    // handleRemove = (id)=> {
    //     removeFromCart(id);
    // }
   
    // //add book quantity
    // handleAddQ = (id)=>{
    //     addQ(id);
    // }

    // //subtract book quantity
    // handleSubtractQ = (id)=>{
    //     subtractQ(id);
    // }
   
    renderBooksInCart = () => {
      return this.books.map((book) => { 
          return (
            <div style={{display: 'flex'}}> 
              <h3>{book.title}</h3>
              <p>{book.desc}</p>
              <p>${book.price}</p>
            </div>
           )
      })
    }
    

    render() {
        const books = ["charlotess web", "lala"];
        return (
            <div className="row">
                <div className="col">
                    { this.props.logged_in ? 
                         this.renderBooksInCart() :
                         <div>Please Login To Populate Your Cart</div>
                    }
                    
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state)=>{
//     return {
//         // items: state.addedItems
//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return{
//         removeFromCart: (id)=>{dispatch(removeFromCart(id))},
//         addQ: (id)=>{dispatch(addQ(id))},
//         subtractQ: (id)=>{dispatch(subtractQ(id))}
//     }
// }
export default Cart;

// export default connect(mapStateToProps,mapDispatchToProps)(Cart);
