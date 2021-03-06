const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'CEN4010';

const storeBooks = [
    {
        id: "978-6282077464",
        title: "The Hobbit, or There Back Again",
        publication_date: "1991-01-01",
        author_name: "J.R.R.",
        publisher: "HarperCollins",
        genre: "Novel",
        img: "https://images.gr-assets.com/books/1372847500m/5907.jpg",
        info: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
        quantity: 88,
        average_rating: 4.34,
        price: 13.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0,
    },

    {
        id: "978-6652710997",
        title: "The Three Musketeers",
        publication_date: "2014-12-05",
        author_name: "Alexandre Dumas",
        publisher: "CreateSpace Independent Publishing Platform",
        img: "https://images-na.ssl-images-amazon.com/images/I/81eHy22tzML._AC_SY445_.jpg",
        info: "17th century France: Young DArtagnan leaves his home and travels to Paris with dreams of joining The Musketeers of Guardthe glamourous and gallant group of men who guard Louis XIII, the King of France. There he meets Athos, Porthos, and Aramis, the three best musketeers and inseparable friends who believe with all their heart in the words all for one, one for all. DArtagnan rents an apartment above the shop of one Monsieur Bonacieux, hoping to settle into Parisian life and become a proper musketeer quickly. What the young and gallant DArtagnan does not realise is that he has, inadvertently, landed himself in the very centre of one of the foulest conspiracies in monarchist France. There are love affairs and intrigues, ambushes and wild rides, duels and murders. And as the famous American author_name and editor Clifton Fadiman says, it is all impossible and it is all magnificient",
        genre: "Novel",
        quantity: 150,
        average_rating: 4.84,
        price: 14.99,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-930996540-9",
        title: "Steve Jobs",
        publication_date: "2015-09-15",
        author_name: "Walter Isaacson",
        publisher: "Simon & Schuster",
        img: "https://images-na.ssl-images-amazon.com/images/I/418XttEFsaL._SX329_BO1,204,203,200_.jpg",
        info: "Walter Isaacson’s “enthralling” (The New Yorker) worldwide bestselling biography of Apple co-founder Steve Jobs—the inspiration for the movie Steve Jobs starring Michael Fassbender, Kate Winslet, Seth Rogen, and Jeff Daniels, directed by Danny Boyle with a screenplay by Aaron Sorkin.",
        genre: "Biography",
        quantity: 20,
        average_rating: 3.98,
        price: 12.99,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-7947426940",
        title: "Edison",
        publication_date: "2019-08-22",
        author_name: "Edmund Morris",
        publisher: "Random House",
        img: "https://images-na.ssl-images-amazon.com/images/I/91MZFIl4MAL.jpg",
        info: "NEW YORK TIMES BESTSELLER • From Pulitzer Prize-winning author_name Edmund Morris comes a revelatory new biography of Thomas Alva Edison, the most prolific genius in American history.",
        genre: "Biography",
        quantity: 23,
        average_rating: 3.50,
        price: 34.20,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {

        id: "978-5879768350",
        title: "V for Vendetta",
        publication_date: "2008-10-24",
        author_name: "Alan Moore",
        publisher: "Vertigo",
        img: "https://images-na.ssl-images-amazon.com/images/I/71f7i5dHDSL.jpg",
        info: "Set in a futurist totalitarian England, a country without freedom or faith, a mysterious man in a white porcelain mask strikes back against the oppressive overlords on behalf of the voiceless. Armed with only knives and his wits, V, as he’s called, aims to bring about change in this horrific new world",
        genre: "Novel",
        quantity: 41,
        average_rating: 4.14,
        price: 12.89,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0439023481",
        title: "The Hunger Games (The Hunger Games, #1)",
        publication_date: "September 14, 2008",
        author_name: "Suzanne Collins",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
        info: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. But Katniss has been close to dead before - and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
        genre: "Novel",
        quantity: 15,
        average_rating: 4.34,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },


    {
        id: "978-0590353403",
        title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
        publication_date: "October 14, 1998",
        author_name: "J.K. Rowling, Mary GrandPr",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1474154022m/3.jpg",
        info: "Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
        genre: "Fantasy",
        quantity: 25,
        average_rating: 4.44,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0316015844",
        title: "Twilight (Twilight, #1)",
        publication_date: "September 6, 2006",
        author_name: "Stephenie Meyer",
        publisher: "Little, Brown Books for Young Readers",
        img: "https://images.gr-assets.com/books/1361039443m/41865.jpg",
        info: "Isabella Swan's move to Forks, a small, perpetually rainy town in Washington, could have been the most boring move she ever made. But once she meets the mysterious and alluring Edward Cullen, Isabella's life takes a thrilling and terrifying turn. Up until now, Edward has managed to keep his vampire identity a secret in the small community he lives in, but now nobody is safe, especially Isabella, the person Edward holds most dear. The lovers find themselves balanced precariously on the point of a knife-between desire and danger. Deeply romantic and extraordinarily suspenseful, Twilightcaptures the struggle between defying our instincts and satisfying our desires. This is a love story with bite.",
        genre: "Novel",
        quantity: 30,
        average_rating: 4.57,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },


    {
        id: "978-0446310789",
        title: "To Kill a Mockingbird",
        publication_date: "October 11, 1988",
        author_name: "Harper Lee",
        publisher: "Grand Central Publishing",
        img: "https://images.gr-assets.com/books/1361975680m/2657.jpg",
        info: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.25,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0743273565",
        title: "The Great Gatsby",
        publication_date: "September 30, 2004",
        author_name: "F. Scott Fitzgerald",
        publisher: "Scribner",
        img: "https://images.gr-assets.com/books/1490528560m/4671.jpg",
        info: "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
        genre: "Novel",
        quantity: 25,
        average_rating: 3.89,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0525478812",
        title: "The Fault in Our Stars",
        publication_date: "September 30, 2012",
        author_name: "John Green",
        publisher: "Dutton Books",
        img: "https://images.gr-assets.com/books/1360206420m/11870085.jpg",
        info: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning-author_name John Green’s most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.26,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-7543321724",
        title: "The Catcher in the Rye",
        publication_date: "May 1, 1991",
        author_name: "J.D. Salinger",
        publisher: "Little, Brown and Company",
        img: "https://images.gr-assets.com/books/1398034300m/5107.jpg",
        info: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
        genre: "Novel",
        quantity: 25,
        average_rating: 3.79,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-1416524793",
        title: "Angels & Demons (Robert Langdon, #1)",
        publication_date: "April 1, 2006",
        author_name: "Dan Brown",
        publisher: "Pocket Books",
        img: "https://images.gr-assets.com/books/1303390735m/960.jpg",
        info: "Angels & Demons careens from enlightening epiphanies to dark truths as the battle between science and religion turns to war. This is the book that started it all: we meet Robert Langdon for the first time, caught up in a race against time to find an apocalyptic time-bomb, planted by an ancient secret society that has surfaced to carry out its ultimate threat: to destroy the Vatican.",
        genre: "Novel",
        quantity: 25,
        average_rating: 3.85,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },


    {
        id: "978-1503290563",
        title: "Pride and Prejudice",
        publication_date: "November 6, 2018",
        author_name: "Jane Austen",
        publisher: "CreateSpace",
        img: "https://images.gr-assets.com/books/1320399351m/1885.jpg",
        info: "The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency. Elizabeth is the second of five daughters of a country gentleman living near the fictional town of Meryton in Hertfordshire, near London.Page 2 of a letter from Jane Austen to her sister Cassandra (11 June 1799) in which she first mentions Pride and Prejudice, using its working title First Impressions.Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood. While Bingley takes an immediate liking to the eldest Bennet daughter, Jane, Darcy has difficulty adapting to local society and repeatedly clashes with the second-eldest Bennet daughter, Elizabeth.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.24,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-1594631931",
        title: "The Kite Runner",
        publication_date: "March 5, 2013",
        author_name: "Khaled Hosseini",
        publisher: "Riverhead Books",
        img: "https://images.gr-assets.com/books/1484565687m/77203.jpg",
        info: "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, caught in the tragic sweep of history, The Kite Runner transports readers to Afghanistan at a tense and crucial moment of change and destruction. A powerful story of friendship, it is also about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.26,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0062024039",
        title: "Divergent (Divergent, #1)",
        publication_date: "March 5, 2012",
        author_name: "Veronica Roth",
        publisher: "Harper Collins",
        img: "https://images.gr-assets.com/books/1328559506m/13335037.jpg",
        info: "In Beatrice Prior’s dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is—she can’t have both. So she makes a choice that surprises everyone, including herself. During the highly competitive initiation that follows, Beatrice renames herself Tris and struggles alongside her fellow initiates to live out the choice they have made. Together they must undergo extreme physical tests of endurance and intense psychological simulations, some with devastating consequences. As initiation transforms them all, Tris must determine who her friends really are—and where, exactly, a romance with a sometimes fascinating, sometimes exasperating boy fits into the life she's chosen. But Tris also has a secret, one she's kept hidden from everyone because she's been warned it can mean death. And as she discovers unrest and growing conflict that threaten to unravel her seemingly perfect society, she also learns that her secret might help her save those she loves . . . or it might destroy her. Debut author_name Veronica Roth bursts onto the YA scene with the first book in the Divergent series—dystopian thrillers filled with electrifying decisions, heartbreaking betrayals, stunning consequences, and unexpected romance.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.24,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0922498253",
        title: "1984",
        publication_date: "November 1, 2008",
        author_name: "George Orwell, Erich Fromm, Cel√¢l √úster",
        publisher: "Flickback Media",
        img: "https://images.gr-assets.com/books/1348990566m/5470.jpg",
        info: "1949 What A Year What A Year 1949 Was. Orson Welles was a critical hit in the noir film, The Third Man, and audiences split their sides when Abbott and Costello Met Frankenstein. New to the scene as partners, anyway are Dean Martin and Jerry Lewis, though more sophisticated tastes may prefer the team of Spencer Tracy and Katherine Hepburn as the bickering married lawyers of Adams Rib. Dragnet hit the radio for the first time while television handed out the first ever Emmy Awards. The first science fiction TV series, Captain Video and His Video Rangers, launched on the DuMont Television Network. Fats Domino recorded The Fat Man, which some consider the first true Rock n Roll recording. Bing Crosby, Doris Day and Nat King Cole were chart toppers. Harry S Truman was sworn in as the 33rd U.S. President as the Berlin Airlift brought food relief to war torn Europe. The Atom Bomb threat became real. The first Polaroid Land Camera produced a photograph in 60 seconds. In the scandal sheets, actor Robert Mitchum was sentenced to 60 days in prison for possession of marijuana, while glamorous movie star Rita Hayworth married Prince Aly Khan on the French Riviera. The nation was riveted by the fate of a 3 year old trapped in an abandoned well. Top names in French fashion traveled to New York. Boxer Joe Louis came out of retirement, and the New York Yankees defeated the Brooklyn Dodgers to win their 12th World Series championship. Nostalgic, informative and sometimes tongue in cheek, WHAT A YEAR IT WAS is a fascinating look back at the headline events of 1949. Our big, classic hardbound yearbook is filled to bursting with stories, photos, and artwork detailing the movies, music, shows, sports, fashion, news, people, places, and events that made 1949 unique and memorable",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.14,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0451526342",
        title: "Animal Farm",
        publication_date: "August 17, 1945",
        author_name: "George Orwell",
        publisher: "Signet",
        img: "https://images.gr-assets.com/books/1424037542m/7613.jpg",
        info: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible. When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.",
        genre: "Novel",
        quantity: 25,
        average_rating: 3.87,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0553296983",
        title: "The Diary of a Young Girl",
        publication_date: "June 1, 1993",
        author_name: "Anne Frank, Eleanor Roosevelt, B.M. Mooyaart-Doubleday",
        publisher: "Bantam",
        img: "https://images.gr-assets.com/books/1358276407m/48855.jpg",
        info: "In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.",
        genre: "Biography",
        quantity: 25,
        average_rating: 4.1,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0307949486",
        title: "The Girl with the Dragon Tattoo",
        publication_date: "November 22, 2011",
        author_name: "Stieg Larsson",
        publisher: "Vintage Crime",
        img: "https://images.gr-assets.com/books/1327868566m/2429135.jpg",
        info: "Harriet Vanger, a scion of one of Sweden's wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.11,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0545586177",
        title: "Catching Fire (The Hunger Games, #2)",
        publication_date: "June 4, 2013",
        author_name: "Suzanne Collins",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1358273780m/6148028.jpg",
        info: "Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules. Katniss and Peeta should be happy. After all, they have just won for themselves and their families a life of safety and plenty. But there are rumors of rebellion among the subjects, and Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.3,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0545582933",
        title: "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)",
        publication_date: "August 27, 2013",
        author_name: "J.K. Rowling, Mary GrandPr√©, Rufus Beck",
        publisher: "Scholastic Inc",
        img: "https://images.gr-assets.com/books/1499277281m/5.jpg",
        info: "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter’s defeat of You-Know-Who was Black’s downfall as well. And the Azkaban guards heard Black muttering in his sleep, “He’s at Hogwarts… he’s at Hogwarts.” Harry Potter isn’t safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may be a traitor in their midst.",
        genre: "Fantasy",
        quantity: 25,
        average_rating: 4.53,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0547928210",
        title: "The Fellowship of the Ring (The Lord of the Rings, #1)",
        publication_date: "September 18, 2012",
        author_name: "J.R.R. Tolkien",
        publisher: "Mariner Books",
        img: "https://images.gr-assets.com/books/1298411339m/34.jpg",
        info: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them. In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
        genre: "Fantasy",
        quantity: 25,
        average_rating: 4.34,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0545663267",
        title: "Mockingjay (The Hunger Games, #3)",
        author_name: "Suzanne Collins",
        publication_date: "February 25, 2014",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1358275419m/7260188.jpg",
        info: "My name is Katniss Everdeen. Why am I not dead? I should be dead. Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders. A revolution is unfolding. District 13 has come out of the shadows and is plotting to overthrow the Capitol. Though she's long been a part of the revolution, Katniss hasn't known it. Now it seems that everyone has had a hand in the carefully laid plans but her. The success of the rebellion hinges on Katniss's willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels' Mockingjay - no matter what the cost.",
        genre: "Novel",
        quantity: 25,
        average_rating: 4.03,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0545663267",
        author_name: "J.K. Rowling, Mary GrandPr√©",
        publication_date: "February 25, 2014",
        title: "Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1387141547m/2.jpg",
        average_rating: 4.46,
        price: 15.00,
        genre: "Fantasy",
        quantity: 25,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0316044936",
        author_name: "Alice Sebold",
        publication_date: "September 30, 2009",
        title: "The Lovely Bones",
        publisher: "Back Bay Books",
        img: "https://images.gr-assets.com/books/1457810586m/12232938.jpg",
        info: "So begins the story of Susie Salmon, who is adjusting to her new home in heaven, a place that is not at all what she expected, even as she is watching life on earth continue without her -- her friends trading rumors about her disappearance, her killer trying to cover his tracks, her grief-stricken family unraveling. Out of unspeakable tragedy and loss, The Lovely Bones succeeds, miraculously, in building a tale filled with hope, humor, suspense, even joy.",
        genre: "Novel",
        quantity: 25,
        average_rating: 3.77,
        price: 20.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0

    },

    {
        id: "978-0439064866",
        author_name: "J.K. Rowling",
        publication_date: "November 20, 2015",
        title: "Harry Potter and the Chamber of Secrets (Harry Potter, #2)",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1474169725m/15881.jpg",
        info: "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
        genre: "Fantasy",
        quantity: 25,
        average_rating: 4.37,
        price: 10.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0

    },

    {
        id: "978-0439139601",
        author_name: "J.K. Rowling",
        publication_date: "September 1, 2002",
        title: "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
        publisher: "Scholastic Press",
        img: "https://images.gr-assets.com/books/1361482611m/6.jpg",
        info: "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup. He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in his case, different can be deadly.",
        genre: "Fantasy",
        average_rating: 4.53,
        quantity: 25,
        price: 15.00,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0307474278",
        author_name: "Dan Brown",
        publication_date: "March 31, 2009",
        title: "The Da Vinci Code (Robert Langdon, #2)",
        publisher: "Anchor",
        img: "https://images.gr-assets.com/books/1303252999m/968.jpg",
        info: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
        genre: "Novel",
        price: 10.00,
        average_rating: 3.79,
        quantity: 25,
        inCart: false,
        inWishList: false,
        count: 0,
        total: 0
    },

    {
        id: "978-0812416114",
        author_name: "William Golding",
        publication_date: "July 1, 1959",
        title: "Lord of the Flies",
        publisher: "Putnam",
        average_rating: 3.64,
        genre: "Novel",
        img: "https://images.gr-assets.com/books/1327869409m/7624.jpg",
        info: "When Lord of the Flies appeared in 1954 it received unprecedented reviews for a first novel. Critics used such phrases as beautifully writeen, tragic and provocative... vivid and enthralling... this beautiful and desperate book... completely convincing and often very frightening... its progress is magnificient... like a fragment of nightmare... a dizzy climax of terror... the terrible spell of this book...E.M. Forster chose it as the Outstanding Novel of the Year. Time and Tide touched upon perhaps the most important facet of this book when it said, It is not only a first-rate adventure but a parable of our times, and articles on this and subsequent Golding novels have stressed these twin aspects of Golding: a consummate control of the novel form, and a superb all-encompassing vision of reality which communicates itself with a power reminiscent of Conrad.",
        inCart: false,
        inWishList: false,
        price: 20.00,
        quantity: 25,
        count: 0,
        total: 0
    },

    {
        id: "978-1497438095",
        author_name: "William Shakespeare",
        publication_date: "May 5, 2016",
        Publisher: "CreateSpace",
        title: "Romeo and Juliet",
        genre: "Novel",
        average_rating: 3.73,
        price: 10.00,
        img: "https://images.gr-assets.com/books/1327872146m/18135.jpg",
        info: "One of Shakespeare's most popular and accessible plays, Romeo and Juliet tells the story of two star-crossed lovers and the unhappy fate that befell them as a result of a long and bitter feud between their families. The play contains some of Shakespeare's most beautiful and lyrical love poetry and is perhaps the finest celebration of the joys of young love ever written. This inexpensive edition includes the complete, unabridged text with explanatory footnotes. Ideal for classroom use, it is a wonderful addition to the home library of anyone wanting to savor one of literature's most sublime paeans to love.",
        quantity: 25,
        count: 0,
        total: 0,
        inCart: false,
        inWishList: false,
    }
];

// Use connect method to connect to the server
MongoClient.connect(url, {
    useUnifiedTopology: true
}, async function(err, client) {
  if (err) console.error(err)

  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  await db
    .collection('books')
    .insertMany(storeBooks)
    // .updateMany({}, {
    //     $rename: { id: "isbn" }
    // })
    .then(x => console.log(x))
    .catch(err => console.error(err))

  client.close();
});


