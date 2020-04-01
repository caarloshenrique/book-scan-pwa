import Book from "../models/Book";

class BooksController {
  async index(req, res) {
    try {
      const books = await Book.find();

      return res.json(books);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async show(req, res) {
    try {
      const { isbn } = req.params;
      const book = await Book.findOne({ isbn });

      if (!book) {
        return res.status(404).json();
      }

      return res.json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async create(req, res) {
    try {
      const book = await Book.create(req.body);

      return res.status(201).json(book);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async update(req, res) {
    try {
      const { isbn } = req.params;
      const book = await Book.findOne({ isbn });

      if (!book) {
        return res.status(404).json();
      }

      await book.updateOne(req.body);

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async destroy(req, res) {
    try {
      const { isbn } = req.params;
      const book = await Book.findOne({ isbn });

      if (!book) {
        return res.status(404).json();
      }

      await book.deleteOne();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new BooksController();
