// Express
const express = require("express");
// Hämta App med express.
const app = express();
const port = 5000;

app.use(express.json());
// books Router
const booksRouter = require("./routers/books.router");

app.use(booksRouter);
// Vet inte om jag behöver denna: app.use(booksController);

app.listen(port, () => {
  console.log(`Server körs på serverport $(port)`);
});
