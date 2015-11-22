/**
 * A list of Textbook to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {title: "Python Programming: An Introduction to Computer Science", author: "John Zelle", isbn: "1887902996", condition: "Excellent"},
  {title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay Horstmann", isbn: "0470509473", condition: "Good"},
  {title: "Discrete Mathematics and Its Applications Seventh Edition", author: "Kenneth Rosen", isbn: "0073383090", condition: "Fair"},
  {title: "Data Structures: Abstraction and Design Using Java", author: "Koffman & Wolfgang", isbn: "0470128704", condition: "Poor"},
  {title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn: "0131103628", condition: "Excellent"},
  {title: "C++ Primer Plus (6th Edition) (Developer's Library)", author: "Stephen Prata", isbn: "0321776402", condition: "Good"},
  {title: "Introduction to Algorithms, 3rd Edition", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, & Clifford Stein", isbn: "0262033844", condition: "Fair"},
  {title: "Programming Language Pragmatics, Third Edition", author: "Michael L. Scott", isbn: "0123745144", condition: "Poor"},
  {title: "Land of Lisp: Learn to Program in Lisp, One Game at a Time!", author: "Conrad Barski", isbn: "1593272812", condition: "Excellent"},
  {title: "Database Systems: The Complete Book (2nd Edition)", author: "Hector Garcia-Molina, Jeffrey D. Ullman, & Jennifer Widom", isbn: "0131873253", condition: "Good"},
  {title: "Digital Logic Design: A Rigorous Approach", author: "Guy Even & Moti Medina", isbn: "1107027535", condition: "Fair"},
  {title: "Operating System Concepts", author: "Abraham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "1118063333", condition: "Poor"},
  {title: "Operating System Concepts Binder Ready Edition", author: "Abraham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "1118129385", condition: "Excellent"},
  {title: "Ethics for the Information Age (5th Edition)", author: "Michael J. Quinn", isbn: "0132855534", condition: "Good"},
  {title: "Emotional Design: Why We Love (or Hate) Everyday Things", author: "Don Norman", isbn: "0465051367", condition: "Fair"},
  {title: "The Design of Everyday Things", author: "Don Norman", isbn: "0465067107", condition: "Poor"},
  {title: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition", author: "Jerry Weissman", isbn: "0137144172", condition: "Excellent"},
  {title: "Artificial Intelligence for Games", author: "Ian Millington & John Funge", isbn: "0123747317", condition: "Good"},
];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(textbook) {
    Textbook.insert(textbook);
  });
}
