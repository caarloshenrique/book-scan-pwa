import { Router } from "express";

import books from "./app/controllers/BooksController";

const routes = new Router();

// Books
routes.get("/books/", books.index);
routes.get("/books/:isbn", books.show);
routes.post("/books", books.create);
routes.put("/books/:isbn", books.update);
routes.delete("/books/:isbn", books.destroy);

export default routes;
