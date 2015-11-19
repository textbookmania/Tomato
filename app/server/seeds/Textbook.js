/**
 * A list of Textbook to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {title: "Python Programming: An Introduction to Computer Science", author: "John Zelle", isbn: "1887902996"},
  {title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay Horstmann", isbn: "0470509473"},
  {title: "Discrete Mathematics and Its Applications Seventh Edition", author: "Kenneth Rosen", isbn: "0073383090"},
  {title: "Data Structures: Abstraction and Design Using Java", author: "Koffman & Wolfgang", isbn: "0470128704"},
  {title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn: "0131103628"},
  {title: "C++ Primer Plus (6th Edition) (Developer's Library)", author: "Stephen Prata", isbn: "0321776402"},
  {title: "Introduction to Algorithms, 3rd Edition", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, & Clifford Stein", isbn: "0262033844"},
  {title: "Programming Language Pragmatics, Third Edition", author: "Michael L. Scott", isbn: "0123745144"},
  {title: "Land of Lisp: Learn to Program in Lisp, One Game at a Time!", author: "Conrad Barski", isbn: "1593272812"},
  {title: "Database Systems: The Complete Book (2nd Edition)", author: "Hector Garcia-Molina, Jeffrey D. Ullman, & Jennifer Widom", isbn: "0131873253"},
  {title: "Digital Logic Design: A Rigorous Approach", author: "Guy Even & Moti Medina", isbn: "1107027535"},
  {title: "Operating System Concepts", author: "Abraham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "1118063333"},
  {title: "Operating System Concepts Binder Ready Edition", author: "Abraham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "1118129385"},
  {title: "Ethics for the Information Age (5th Edition)", author: "Michael J. Quinn", isbn: "0132855534"},
  {title: "Emotional Design: Why We Love (or Hate) Everyday Things", author: "Don Norman", isbn: "0465051367"},
  {title: "The Design of Everyday Things", author: "Don Norman", isbn: "0465067107"},
  {title: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition", author: "Jerry Weissman", isbn: "0137144172"},
  {title: "Artificial Intelligence for Games", author: "Ian Millington & John Funge", isbn: "0123747317"},
];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(textbook) {
    Textbook.insert(textbook);
  });
}
