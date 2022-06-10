const sqlite3 = require("sqlite3").verbose();

// Skapar en ny instans av sqlite3-databasen.
const db = new sqlite3.Database("./db.sqlite", (error) => {
  if (error) {
    // Felmeddelande om det inte går att öppna databasen.
    console.error(error.message);
    throw error;
  }
  console.log("Du är ansluten till databasen.");

  // Använda sig av SQL för att skapa tabell för "books".
  // "books" ska ha ett 'id', 'titel', 'författare' och 'genre'.
  const booksStatement = `
    CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    genre TEXT)`;

  // Kör databasen med db.run().
  db.run(booksStatement),
    (error) => {
      if (error) {
        // Om tabellen redan finns får användaren ett felmeddelande.
        console.error(error.message);
      } else {
        // Använder insert för att få fram böcker. SQL statementet körs här.
        const insert = `INSERT INTO books (title, author, genre) VALUES (?, ?, ?)`;

        // Lägg till fasta böcker till databasen.
        db.run(insert, ["The Hobbit", "J. J. R. Tolkien", "Fantasy"]);
        db.run(insert, ["Abortlagarna i USA", "Ana Bortion", "Fakta"]);
        db.run(insert, ["I farans riktning", "Viveca Sten", "Deckare"]);
      }
      // Får ett meddelande om böckerna är skapade.
      console.log("Books table created.");
    };
});

// Exportera modulen.
module.exports = db;
