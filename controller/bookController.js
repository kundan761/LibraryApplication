const Book = require("../model/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.updateBook = async (req, res) =>{
    const {bookId} = req.body;
    const payload = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate({_id:bookId}, payload)
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.deleteBook = async (req, res) =>{
    const {bookId} = req.body;
    try {
        const deletedBook = await Book.findByIdAndDelete({_id:bookId})
        res.status(200).json({msg:'Deleted Successfully'});
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
}