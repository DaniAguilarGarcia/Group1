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
            .post(`${process.env.REACT_APP_API_URL}/wishlists/list`, {
                userId: user._id
            })
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

            {wishlists.length < 3 && (
                <button type="button" className="btn btn-success" onClick={() => setShowCreateForm(true)} style={{ marginBottom: 5 }}>
                    Create Wishlist
                </button>
            )}

            {showCreateForm && wishlists.length < 3 && (
                <form
                    style={{ marginBottom: 10 }}
                    onSubmit={async e => {
                        e.preventDefault()

                        setIsSubmitting(true)

                        await axios
                            .post(`${process.env.REACT_APP_API_URL}/wishlists`, {
                                title: newWishlistTitle,
                                userId: user._id
                            })
                            .then(async () => {
                                setIsSubmitting(false)
                                setNewWishlistTitle('')
                                await axios
                                    .post(`${process.env.REACT_APP_API_URL}/wishlists/list`, {
                                        userId: user._id
                                    })
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
                    <div className="form-group">
                        <label for="wishlistTitle">Title</label>
                        <input value={newWishlistTitle} onChange={e => setNewWishlistTitle(e.target.value)} type="text" className="form-control" id="wishlistTitle" />
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting || newWishlistTitle.trim() === ''}>Create!</button>
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
                                .get(`${process.env.REACT_APP_API_URL}/wishlists/${wishlist._id}`)
                                .then(async res => {
                                    const { bookIds } = res.data

                                    const books = await bookIds.map(async bookId => {
                                        const bookData = await axios
                                            .get(`${process.env.REACT_APP_API_URL}/books2/${bookId}`)
                                            .then(res => res.data)
                                            .catch(e => console.error(e))
                                        return bookData
                                    })

                                    Promise.all(books).then(values => setWishlistContents(values))
                                })
                                .catch(e => console.error(e))
                        }}
                        style={{ width: '50%', marginBottom: 5 }}
                    >
                        {wishlist.title}
                    </button>

                    {wishlist._id === shownListId && !wishlistContents.length && <p>No books in wishlist</p>}

                    {wishlist._id === shownListId && !!wishlistContents.length && (
                        <ul className="list-group" style={{ marginBottom: 10 }}>
                            {wishlistContents.map(book => (
                                <li key={book._id} className="list-group-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <b style={{ marginRight: 'auto' }}>{book.title}</b>

                                    <div style={{ display: 'flex' }}>
                                        {/* Move to Wishlist Dropdown */}
                                        <div className="dropdown" style={{ marginRight: 20 }}>
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Move to Wishlist
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {wishlists.map(wishlist2 => (
                                                    <button key={wishlist2._id} className="dropdown-item" style={{
                                                        background: wishlist2.bookIds.includes(book._id) && '#eee'
                                                    }} onClick={async () => {
                                                        await axios
                                                            .put(`${process.env.REACT_APP_API_URL}/wishlists/${wishlist._id}`, {
                                                                bookId: book._id
                                                            })

                                                        await axios
                                                            .put(`${process.env.REACT_APP_API_URL}/wishlists/${wishlist2._id}`, {
                                                                bookId: book._id
                                                            })

                                                        setWishlistContents(wishlistContents.filter(item => item._id !== book._id))
                                                    }}
                                                    disabled={wishlist2.bookIds.includes(book._id)}
                                                    >{wishlist2.title}</button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button className="btn btn-danger" onClick={e => {
                                            axios
                                                .put(`${process.env.REACT_APP_API_URL}/wishlists/${wishlist._id}`, {
                                                    bookId: book._id
                                                })
                                                .then(() => {
                                                    setWishlistContents(wishlistContents.filter(item => item._id !== book._id))
                                                })
                                                .catch(e => {
                                                    console.error(e)
                                                    window.alert(`Sorry! Couldn't remove the book from that wishlist`)
                                                })
                                        }}>Remove</button>
                                    </div>
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