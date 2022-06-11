// Express
const express = require("express");
// Hämta App med express.
const app = express();
const port = 5000;

// Använder sig av app.use(express.json()) för att kunna använda json.
app.use(express.json());

// Skapar en variabel för booksRouter där jag hämtar böckerna.
const booksRouter = require("./routers/books.router");
// Hämtar böcker från booksRouter.
app.use(booksRouter);

app.listen(port, () => {
  console.log(`Server körs på serverport ${port}`);
});
