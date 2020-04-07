import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Wishlists = ({ user }) => {
    const [wishlists, setWishlists] = useState([])
    const [shownListId, setShownListId] = useState()
    const [wishlistContents, setWishlistContents] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [newWishlistTitle, setNewWishlistTitle] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

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
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
        
            <button type="button" className="btn btn-primary" onClick={() => setShowCreateForm(true)}>
                Create Wishlist
            </button>
            
            {showCreateForm && (
                <form onSubmit={async e => {
                    e.preventDefault()

                    setIsSubmitting(true)

                    await axios
                        .post('http://localhost:5000/wishlists', {
                            title: newWishlistTitle,
                            userId: user._id
                        })
                        .then(async () => {
                            setIsSubmitting(false)
                            setNewWishlistTitle('')
                            await axios
                                .get('http://localhost:5000/wishlists')
                                .then(res => {
                                    setWishlists(res.data)
                                })
                                .catch(e => console.error(e))
                        })
                        .catch(e => {
                            if (e.message === 'Request failed with status code 400') {
                                setError(`Couldn't create wishlist. You can only have 3.`)
                            } else {
                                setError(`Couldn't create wishlist. Not sure what went wrong! Sorry!`)
                            }

                            setIsSubmitting(false)
                        })
                }}>
                    <label>
                        <b>Title</b>
                        <input value={newWishlistTitle} onChange={e => setNewWishlistTitle(e.target.value)} />
                    </label>
                    <button type="submit" disabled={isSubmitting || newWishlistTitle.trim() === ''}>Create!</button>
                </form>
            )}
            
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

                            setWishlistContents([])

                            axios
                                .get(`http://localhost:5000/wishlists/${wishlist._id}`)
                                .then(async res => {
                                    const { bookIds } = res.data

                                    const books = await bookIds.map(async bookId => {
                                        const bookData = await axios
                                            .get(`http://localhost:5000/books2/${bookId}`)
                                            .then(res => res.data)
                                            .catch(e => console.error(e))
                                        return bookData
                                    })

                                    Promise.all(books).then(values => setWishlistContents(values))
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