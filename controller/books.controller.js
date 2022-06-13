// Hämtar models
const model = require("../models/books.model");

// Hämtar alla böcker.
async function getAll(req, res) {
  const result = await model.getAll();
  res.json(result);
}

// Hämta en bok.
async function getBook(req, res) {
  const pickBook = req.params.id;
  const foundBook = await model.getBook(pickBook);
  res.json(foundBook);
}

// Följ instruktioner. P.

// Lägg till en bok.
async function postBook(req, res) {
  // Lägger till titel, författare och genre.
  const { title, author, genre } = req.body;

  // Felmeddelande om titel, författare eller genre saknas.
  if (!title || !author || !genre) {
    return res.status(400).send("Titel, författare eller genre saknas.");
  }
  // Sätter in värden för titel, författare och genre i databasen.
  const newBook = {
    title,
    author,
    genre,
  };
  await model.addBook(newBook);
  res.json(newBook);
}
// Ändrar hela värdena på en bok.
async function putBook(req, res) {
  const { title, author, genre } = req.body;
  const pickBook = req.params.id;
  const putBook = {
    title,
    author,
    genre,
  };
  await model.putBook(pickBook, putBook);
  res.json(putBook);
}
// Ändra ett värde på en bok.
async function patchBook(req, res) {
  const { title, author, genre } = req.body;
  const pickBook = req.params.id;
  const patchBook = await model.patchBook(pickBook, title, author, genre);
  res.json(patchBook);
}

// Ta bort en bok.
async function deleteBook(req, res) {
  const pickBook = req.params.id;
  const deleteBook = await model.deleteBook(pickBook);
  res.json(deleteBook);
}
// exportera moduler.
module.exports = {
  getAll,
  getBook,
  postBook,
  putBook,
  patchBook,
  deleteBook,
};
