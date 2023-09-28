const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2012 },
    { title: "Book 4", author: "author 4", year: 2008 },
    { title: "Book 5", author: "author 5", year: 2018 },
  ];
 
  const filteredBooks = books
    .filter((book) => book.year >= 2010)
    .map((book) => ({
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year,
    }));
  
  console.log(filteredBooks);
  