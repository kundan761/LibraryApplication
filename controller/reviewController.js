const Review = require("../model/Review");

exports.createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};

exports.updateReview = async (req, res) =>{
    const {reviewId} = req.body;
    const payload = req.body;
    try {
        const updatedReview= await Review.findByIdAndUpdate({_id:reviewId}, payload)
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.deleteBook = async (req, res) =>{
    const {reviewId} = req.body;
    try {
        const deletedReview = await Review.findByIdAndDelete({_id:reviewId})
        res.status(200).json({msg:'Deleted Successfully'});
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
}