import React, { PureComponent } from 'react'
import { useContext } from 'react'
import { BookContext } from '../../context'

const BookFilter = ({books}) => {
    const context = useContext(BookContext);
   
    const{
        handleChange,
        sortType,
        loading ,
        title,
        genre,
        price, 
        minPrice,
        maxPrice,
        publication_date, 
        average_rating,
        maxRating,
        order = "desc",
        isTopSeller
    } = context;

    return ( 
    
    <React.Fragment>
       <div className="container">
        <section>
          <form className ="filter-form">
            <div className = "form-group">
              <label htmlFor= "type">Sort By Genre</label>
                <select
                    name ="genre" 
                    id="genre" 
                    value={genre}
                    className = "form-control"
                    onChange= {handleChange}
                >
                  <option value='all'>all</option>
                  <option value= 'Biography'>Biography</option>
                  <option value = 'Fantasy'>Fantasy</option>
                  <option value = 'Novel'>Novel</option>
                </select>
            </div>
          </form>
        </section>
      </div>
              
   
      <div className="form-group">
        <label htmlFor="price">book price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max= "35"
            id="price"
            defaultValue = "35"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
      </div>

      <div className="form-group">
        <label htmlFor="average_rating">Book Rating</label>
          <select
            name="average_rating"
            id="average_rating"
            value={average_rating}
            onChange={handleChange}
            className="form-control"
            size = "sm"
            >
              <option value='5'>5 Stars</option>
              <option value= '4'>4 Stars</option>
              <option value = '3'>3 Stars</option>
              <option value = '2'>2 Stars</option>
              <option value = '1'>1 Stars</option>
          </select>
      </div>
        
      <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={isTopSeller}
              onChange={handleChange}
            />
              <label htmlFor="topsellers">Top Seller</label>
      </div>
     </React.Fragment>  

    );
};

export default BookFilter;