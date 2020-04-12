import React, { PureComponent } from 'react'
import { useContext } from 'react'
import { BookContext } from '../../context'

//get unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

const BookFilter = ({books}) => {
    const context = useContext(BookContext);
    const{
        handleChange,
        loading ,
        title,
        genre,
        price, 
        minPrice,
        maxPrice,
        publication_date, 
        average_rating,
        maxRating
    } = context;
/*
    // get unique genres
    let genres = getUnique(books, 'genre');

    //add all 
    genres = ['all',...genres];

    //map to jsx
    genres = genres.map((item,index) => {
        return <option value = {item} key={index}>{item}</option>
    })*/

    return ( 
       
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
            >
            <option value='5'>5 Stars</option>
            <option value= '4'>4 Stars</option>
            <option value = '3'>3 Stars</option>
            <option value = '2'>2 Stars</option>
            <option value = '1'>1 Stars</option>
            </select>
        </div>

        <label htmlFor="sortByDate">Sort by Date</label>
        <select
            name="sortByDate"
            id="sortByDate"
            defaultValue ="Newest"
            value={publication_date}
            onChange={handleChange}
            className="form-control"
        >
        <option value='Newest'>Newest</option>
        <option value= 'Oldest'>Oldest</option>
        </select>
        
        </section>
        </div>

    );
};

export default BookFilter;