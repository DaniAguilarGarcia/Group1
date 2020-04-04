import React, { PureComponent } from 'react'


class Search extends PureComponent {
   
    filterUpdate(){
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
       
        return (
           <React.Fragment>
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
               type = "text"
               ref={ (value) => {this.myValue = value} }
               placeholder ="Search"
               onChange = {this.filterUpdate.bind(this)}
               />
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-search"></i></button>
           
           </React.Fragment> 
        )
    }
}

export default Search;