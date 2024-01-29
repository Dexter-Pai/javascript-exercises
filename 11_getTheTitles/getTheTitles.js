const getTheTitles = function(books) {
    let array = [];
    books.forEach(book => array.push(book.title));
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
