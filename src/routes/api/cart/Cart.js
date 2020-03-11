import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addQ, subtractQ } from './cartActions'
import Calculate from './Calculate';

class Cart extends Component{
    //remove book from cart
    handleRemove = (id)=>{
        this.props.removeFromCart(id);
    }

    //add book quantity
    handleAddQ = (id)=>{
        this.props.addQ(id);
    }

    //subtract book quantity
    handleSubtractQ = (id)=>{
        this.props.subtractQ(id);
    }

    render(){
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item=>{
                return(
                    <li className="book-img-list" key = {item.id}>
                        <div className="book-img">
                            <img src={item.img} alt={item.img} className=""/>
                        </div>

                        <div className="book-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>

                        <div classsName="add-remove">
                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQ(item.id)}}>arrow_drop_up</i></Link>
                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQ(item.id)}}>arrow_drop_down</i></Link>
                        </div>

                        <button className="removal" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                    </li>
                )
            })
        ):
        (
            <p>The cart is empty</p>
        )
    return(
        <div className="container">
            <div className="cart">
                <ul clasName="list">
                    {addedItems}
                </ul>
            </div>
            <Calculate />
        </div>
    )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
        addQ: (id)=>{dispatch(addQ(id))},
        subtractQ: (id)=>{dispatch(subtractQ(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)