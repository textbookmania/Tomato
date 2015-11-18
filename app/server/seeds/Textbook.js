/**
 * A list of Textbook to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay Horstmann", isbn: "0470509473"},
  {title: "Discrete Mathematics and Its Applications Seventh Edition", author: "Kenneth Rosen", isbn: "0073383090"},
  {title: "Data Structures: Abstraction and Design Using Java", author: "Koffman & Wolfgang", isbn: "0470128704"},
  {title: "The C Programming Language", author: " Brian W. Kernighan & Dennis M. Ritchie", isbn: "0131103628"}

];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(textbook) {
    Textbook.insert(textbook);
  });
}
