const User = require("../model/User");

exports.addToFavourite = async (req, res) => {
    const {userId} = req.body;
  try {
    const user = await User.findById({_id:userId});
    if(!user.favourites.includes(req.body.bookId)){
        user.favourites.push(req.body.bookId);
        await user.save();
    }
    res.status(200).json({msg: 'Book added to favourite successfully'});
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};



exports.removeFromFavourite = async (req, res) =>{
    const {userId} = req.body;
    try {
        const user = await User.findById({_id:userId});
        const index = user.favourites.indexOf({_id:userId});
        if(index> -1){
            user.favourites.splice(index, 1);
            await user.save();
            res.status(200).json({msg: 'Book removed from favourite successfully'});
        }
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
    }
}