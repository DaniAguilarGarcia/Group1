export const storeBooks = [
  {
    id: "978-62-82077-46-4",
    title: "The Hobbit, or There Back Again",
    publication_date: "1991-01-01",
    edition: 1,
    author: "J.R.R.", 
    publisher: "HarperCollins",
    img: "img/product-1.png",
    info: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
    quantity: 88,
    price: 13.00, 
    inCart: false,
    count: 0,
    total: 0
  },

  {
    id: "978-66-52710-99-7",
    title: "The Three Musketeers",
    publication_date : "2014-12-05",
    edition: 1,
    author: "Alexandre Dumas", 
    publisher: "CreateSpace Independent Publishing Platform",
    img: "img/product-2.png",
    info: "17th century France: Young DArtagnan leaves his home and travels to Paris with dreams of joining The Musketeers of Guardthe glamourous and gallant group of men who guard Louis XIII, the King of France. There he meets Athos, Porthos, and Aramis, the three best musketeers and inseparable friends who believe with all their heart in the words all for one, one for all. DArtagnan rents an apartment above the shop of one Monsieur Bonacieux, hoping to settle into Parisian life and become a proper musketeer quickly. What the young and gallant DArtagnan does not realise is that he has, inadvertently, landed himself in the very centre of one of the foulest conspiracies in monarchist France. There are love affairs and intrigues, ambushes and wild rides, duels and murders. And as the famous American author and editor Clifton Fadiman says, it is all impossible and it is all magnificient",
    quantity: 150,
    price: 14.99, 
    inCart: false,
    count: 0,
    total: 0
  },

  {
    id: "978-93-09965-40-9",
    title: "Steve Jobs",
    publication_date : "2015-09-15",
    edition: 2,
    author: "Walter Isaacson", 
    publisher: "Simon & Schuster",
    img: "img/product-3.png",
    info: "Walter Isaacson’s “enthralling” (The New Yorker) worldwide bestselling biography of Apple co-founder Steve Jobs—the inspiration for the movie Steve Jobs starring Michael Fassbender, Kate Winslet, Seth Rogen, and Jeff Daniels, directed by Danny Boyle with a screenplay by Aaron Sorkin.",
    quantity: 20,
    price: 12.99, 
    inCart: false,
    count: 0,
    total: 0
  },

  {
    id: "978-79-47426-94-0",
    title: "Edison",
    publication_date : "2019-08-22",
    edition: 1,
    author: "Edmund Morris", 
    publisher: "Random House",
    img: "img/product-4.png",
    info:"NEW YORK TIMES BESTSELLER • From Pulitzer Prize-winning author Edmund Morris comes a revelatory new biography of Thomas Alva Edison, the most prolific genius in American history.",
    quantity: 23,
    price: 34.20, 
    inCart: false,
    count: 0,
    total: 0
  },

  {

    id: "978-58-79768-35-0",
    title: "V for Vendetta",
    publication_date : "2008-10-24",
    edition: 1,
    author: "Alan Moore", 
    publisher: "Vertigo",
    img: "img/product-5.png",
    info:"Set in a futurist totalitarian England, a country without freedom or faith, a mysterious man in a white porcelain mask strikes back against the oppressive overlords on behalf of the voiceless. Armed with only knives and his wits, V, as he’s called, aims to bring about change in this horrific new world",
    quantity: 41,
    price: 12.89, 
    inCart: false,
    count: 0,
    total: 0
  },
];

export const detailBook = {
  id: "978-62-82077-46-4",
  title: "The Hobbit, or There Back Again",
  publication_date: "1991-01-01",
  edition: 1,
  author: "J.R.R.", 
  publisher: "HarperCollins",
  img: "img/product-1.png",
  info: "test",
  quantity: 88,
  price: 13.00, 
  inCart: false,
  count: 0,
  total: 0
};







/*
export const bookData =[
    {
      "id": 1,
      "authors": "Suzanne Collins",
      "original_publication_year": 2008,
      "title": "The Hunger Games (The Hunger Games, #1)",
      "average_rating": 4.34,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1447303603s/2767052.jpg",
      "inCart": false
    },
    {
      "id": 2,
      "authors": "J.K. Rowling, Mary GrandPr",
      "original_publication_year": 1997,
      "title": "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
      "average_rating": 4.44,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1474154022s/3.jpg",
      "inCart": true
    },
    {
      "id": 3,
      "authors": "Stephenie Meyer",
      "original_publication_year": 2005,
      "title": "Twilight (Twilight, #1)",
      "average_rating": 3.57,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1361039443m/41865.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1361039443s/41865.jpg",
      "inCart": false
    },
    {
      "id": 4,
      "authors": "Harper Lee",
      "original_publication_year": 1960,
      "title": "To Kill a Mockingbird",
      "average_rating": 4.25,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1361975680m/2657.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1361975680s/2657.jpg",
      "inCart": false
    },
    {
      "id": 5,
      "authors": "F. Scott Fitzgerald",
      "original_publication_year": 1925,
      "title": "The Great Gatsby",
      "average_rating": 3.89,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1490528560m/4671.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1490528560s/4671.jpg",
      "inCart": "FALSE"
    },
    {
      "id": 6,
      "authors": "John Green",
      "original_publication_year": 2012,
      "title": "The Fault in Our Stars",
      "average_rating": 4.26,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1360206420m/11870085.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1360206420s/11870085.jpg",
      "inCart": false
    },
    {
      "id": 7,
      "authors": "J.R.R. Tolkien",
      "original_publication_year": 1937,
      "title": "The Hobbit",
      "average_rating": 4.25,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1372847500m/5907.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1372847500s/5907.jpg",
      "inCart": false
    },
    {
      "id": 8,
      "authors": "J.D. Salinger",
      "original_publication_year": 1951,
      "title": "The Catcher in the Rye",
      "average_rating": 3.79,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1398034300m/5107.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1398034300s/5107.jpg",
      "inCart": false
    },
    {
      "id": 9,
      "authors": "Dan Brown",
      "original_publication_year": 2000,
      "title": "Angels & Demons  (Robert Langdon, #1)",
      "average_rating": 3.85,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1303390735m/960.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1303390735s/960.jpg",
      "inCart": false
    },
    {
      "id": 10,
      "authors": "Jane Austen",
      "original_publication_year": 1813,
      "title": "Pride and Prejudice",
      "average_rating": 4.24,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1320399351m/1885.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1320399351s/1885.jpg",
      "inCart": false
    },
    {
      "id": 11,
      "authors": "Khaled Hosseini",
      "original_publication_year": 2003,
      "title": "The Kite Runner",
      "average_rating": 4.26,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1484565687m/77203.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1484565687s/77203.jpg",
      "inCart":false
    },
    {
      "id": 12,
      "authors": "Veronica Roth",
      "original_publication_year": 2011,
      "title": "Divergent (Divergent, #1)",
      "average_rating": 4.24,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1328559506m/13335037.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1328559506s/13335037.jpg",
      "inCart": false
    },
    {
      "id": 13,
      "authors": "George Orwell, Erich Fromm, Cel√¢l √úster",
      "original_publication_year": 1949,
      "title": 1984,
      "average_rating": 4.14,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1348990566m/5470.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1348990566s/5470.jpg",
      "inCart": false
    },
    {
      "id": 14,
      "authors": "George Orwell",
      "original_publication_year": 1945,
      "title": "Animal Farm",
      "average_rating": 3.87,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1424037542m/7613.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1424037542s/7613.jpg",
      "inCart": "FALSE"
    },
    {
      "id": 15,
      "authors": "Anne Frank, Eleanor Roosevelt, B.M. Mooyaart-Doubleday",
      "original_publication_year": 1947,
      "title": "The Diary of a Young Girl",
      "average_rating": 4.1,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1358276407m/48855.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1358276407s/48855.jpg",
      "inCart": false
    },
    {
      "id": 16,
      "authors": "Stieg Larsson, Reg Keeland",
      "original_publication_year": 2005,
      "title": "The Girl with the Dragon Tattoo (Millennium, #1)",
      "average_rating": 4.11,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1327868566m/2429135.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1327868566s/2429135.jpg",
      "inCart": false
    },
    {
      "id": 17,
      "authors": "Suzanne Collins",
      "original_publication_year": 2009,
      "title": "Catching Fire (The Hunger Games, #2)",
      "average_rating": 4.3,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1358273780m/6148028.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1358273780s/6148028.jpg",
      "inCart": false
    },
    {
      "id": 18,
      "authors": "J.K. Rowling, Mary GrandPr√©, Rufus Beck",
      "original_publication_year": 1999,
      "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)",
      "average_rating": 4.53,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1499277281m/5.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1499277281s/5.jpg",
      "inCart": false
    },
    {
      "id": 19,
      "authors": "J.R.R. Tolkien",
      "original_publication_year": 1954,
      "title": "The Fellowship of the Ring (The Lord of the Rings, #1)",
      "average_rating": 4.34,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1298411339m/34.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1298411339s/34.jpg",
      "inCart": false
    },
    {
      "id": 20,
      "authors": "Suzanne Collins",
      "original_publication_year": 2010,
      "title": "Mockingjay (The Hunger Games, #3)",
      "average_rating": 4.03,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1358275419m/7260188.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1358275419s/7260188.jpg",
      "inCart": false
    },
    {
      "id": 21,
      "authors": "J.K. Rowling, Mary GrandPr√©",
      "original_publication_year": 2003,
      "title": "Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
      "average_rating": 4.46,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1387141547m/2.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1387141547s/2.jpg",
      "inCart": false
    },
    {
      "id": 22,
      "authors": "Alice Sebold",
      "original_publication_year": 2002,
      "title": "The Lovely Bones",
      "average_rating": 3.77,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1457810586m/12232938.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1457810586s/12232938.jpg",
      "inCart": false
    },
    {
      "id": 23,
      "authors": "J.K. Rowling, Mary GrandPr√©",
      "original_publication_year": 1998,
      "title": "Harry Potter and the Chamber of Secrets (Harry Potter, #2)",
      "average_rating": 4.37,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1474169725m/15881.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1474169725s/15881.jpg",
      "inCart": false
    },
    {
      "id": 24,
      "authors": "J.K. Rowling, Mary GrandPr√©",
      "original_publication_year": 2000,
      "title": "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
      "average_rating": 4.53,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1361482611m/6.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1361482611s/6.jpg",
      "inCart": false
    },
    {
      "id": 25,
      "authors": "J.K. Rowling, Mary GrandPr√©",
      "original_publication_year": 2007,
      "title": "Harry Potter and the Deathly Hallows (Harry Potter, #7)",
      "average_rating": 4.61,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1474171184m/136251.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1474171184s/136251.jpg",
      "inCart": false
    },
    {
      "id": 26,
      "authors": "Dan Brown",
      "original_publication_year": 2003,
      "title": "The Da Vinci Code (Robert Langdon, #2)",
      "average_rating": 3.79,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1303252999m/968.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1303252999s/968.jpg",
      "inCart": false
    },
    {
      "id": 27,
      "authors": "J.K. Rowling, Mary GrandPr√©",
      "original_publication_year": 2005,
      "title": "Harry Potter and the Half-Blood Prince (Harry Potter, #6)",
      "average_rating": 4.54,
      "price": "$15.00",
      "image_url": "https://images.gr-assets.com/books/1361039191m/1.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1361039191s/1.jpg",
      "inCart": false
    },
    {
      "id": 28,
      "authors": "William Golding",
      "original_publication_year": 1954,
      "title": "Lord of the Flies",
      "average_rating": 3.64,
      "price": "$20.00",
      "image_url": "https://images.gr-assets.com/books/1327869409m/7624.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1327869409s/7624.jpg",
      "inCart": false
    },
    {
      "id": 29,
      "authors": "William Shakespeare, Robert Jackson",
      "original_publication_year": 1595,
      "title": "Romeo and Juliet",
      "average_rating": 3.73,
      "price": "$10.00",
      "image_url": "https://images.gr-assets.com/books/1327872146m/18135.jpg",
      "small_image_url": "https://images.gr-assets.com/books/1327872146s/18135.jpg",
      "inCart": false
    }
  ];

export const detailBook=[{
    id: 1,
    title: 'The Hunger Games (The Hunger Games, #1)',
    authors: 'Suzanne Collins',
    year: 2008,
    rating: 4.34,
    price: 25.00,
    image_url: "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
    small_image_url: "https://images.gr-assets.com/books/1447303603s/2767052.jpg",
    inCart: false
}];
//module.exports = bookData;

/*arr.sort(function (a,b)){
  if(a.lastName.toLowerCase () <
  b.lastName.toLowerCase()) return -1;
  if (a.lastName.toLowerCase() >
  b.lastName.toLowerCase()) return 1;
  return 0;
  )
});*/


