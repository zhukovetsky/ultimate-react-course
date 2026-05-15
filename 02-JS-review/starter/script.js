const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
books;

const b = getBook(3);
const t = b.author;

const { title, author, genres } = b;

const [primaryGenre, secondaryGenre, ...others] = b.genres;

const newGenres = [...b.genres, "and another beautiful one"]

primaryGenre;
secondaryGenre;
others;
newGenres;

const extendedBook = { ...b, translator: "Not fucking needed" };

extendedBook;

const summary = `${b.title} is a book, it's evident like 2 + 2 = ${2 + 2}`;
summary;

const big = b.pages > 100 ? 'very big' : 'rather small';
big;

function getYear(str) {
  return str.split('-')[0]
}

const y = getYear(b.publicationDate);
y;

const getYearNew = (str) => str.split('-')[0];

const year = getYearNew(b.publicationDate);
year;

const x = books.map(b => ({
  author: b.author,
  title: b.title,
  reviewsCount: b.reviews?.goodreads?.reviewsCount + b.reviews?.librarything?.reviewsCount
}));
x;

const inSpanish = books.filter(b => b.translations.spanish);
inSpanish;

const byGenre = books.filter(b => b.genres.includes('novel') && b.genres.includes('fantasy fiction'));
byGenre;

const totalPages = books.reduce((acc, curr, idx, all) => acc + curr.pages, 0);
totalPages;

const biggest = books.sort((a, b) => a.pages - b.pages);
biggest;

const biggest1 = [1, 2, 4, 7, 10, 15, 2, 1, 1].sort((a, b) => a * 3 - b);
biggest1;

const newBook = {
    id: 6,
    title: "Dick",
    publicationDate: "1954-07-29",
    author: "Zalupa",
    genres: [
      "fantasy",
    ],
    hasMovieAdaptation: true,
    pages: 69,
    translations: {
      spanish: "El señor de los anillos",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  };

const newBooks = [...books, newBook];
newBooks;
books;

const newerBooks = newBooks.filter(b => b.id % 2 == 0);
newerBooks;