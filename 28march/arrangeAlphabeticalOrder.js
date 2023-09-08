const book=[
    {
        title:"Math-III",
       teacher:"Sushil Dubey",
       bookEdition:2014,
    },
    {
        title:"DSA",
        teacher:"Pratik Gupta",
        bookEdition:2010,
    },
    {
        title:"Oops",
        teacher:"D.K Jain",
        bookEdition:2018,
    },
    {
        title:"C++",
        teacher:"Khan Sir",
       bookEdition:2016,
    },
];
function logTitle(title){
    title.sort();
    console.log(...title);
}
function Titles(book,callback){
    const tilies= book.map((book)=> book.title);
    callback(tilies);
}
Titles(book,logTitle)