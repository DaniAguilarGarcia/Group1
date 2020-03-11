import React, { Component } from 'react'
import { connect } from 'react-redux'

class Calculate extends Component{
    render(){
        return(
            <div className="container">
                <div className="collection">
                    <li className="item-list"><b>Total: ${this.props.total.toFixed(2)}</b></li>
                </div>

                <div className ="checkout">
                    <button type="button" className="btn btn-primary">Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems:state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Calculate)