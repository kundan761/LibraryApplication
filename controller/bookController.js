const Book = require("../model/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, title, author } = req.query;
    const query = {};
    if (status) {
      query.status = status;
    }
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (author) {
      query.author = { $regex: author, $options: "i" };
    }
    const books = await Book.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec()
    const count = await Book.countDocuments(query);
    res.status(200).json({
      books,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
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
