import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Wishlists = () => {
    const [wishlists, setWishlists] = useState([])
    const [shownListId, setShownListId] = useState()
    const [wishlistContents, setWishlistContents] = useState([])

    useEffect(() => {
        // FIXME
        console.clear()

        axios
            .get('http://localhost:5000/wishlists')
            .then(res => {
                setWishlists(res.data)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <div>
            {!!wishlists.length && <h1>Our Wishlists</h1>}

            {wishlists.map(wishlist => (
                <div key={wishlist._id}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={e => {
                            if (wishlist._id === shownListId) {
                                setShownListId(null)
                            } else {
                                setShownListId(wishlist._id)
                            }

                            axios
                                .get(`http://localhost:5000/wishlists/${wishlist._id}`)
                                .then(async res => {
                                    const { bookIds } = res.data

                                    console.log(111, bookIds)

                                    const books = await bookIds.map(async bookId => {
                                        const bookData = await axios
                                            .get(`http://localhost:5000/books2/${bookId}`)
                                            .then(res => res.data)
                                            .catch(e => console.error(e))
                                        return bookData
                                    })

                                    Promise.all(books).then(values => {
                                        console.log(222, values)
                                        setWishlistContents(values) // [ {}, {} ]
                                    })
                                })
                                .catch(e => console.error(e))
                        }}
                    >
                        {wishlist.title}
                    </button>

                    {wishlist._id === shownListId && !!wishlistContents.length && (
                        <ul>
                            {wishlistContents.map(book => (
                                <li key={book._id}>
                                    {book.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Wishlists