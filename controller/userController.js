const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//register route setup and export
exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, 'BATMAN', {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (err) {
    res.status(400).json({msg: 'Something went wrong'});
  }
};

//login route setup and export
exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).json({msg: 'User doesnot exist'})
       }
       const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
       if(!isPasswordCorrect){
        return res.status(400).json({msg:'Invalid Credentials'});
       }

       const token = jwt.sign({email:existingUser.email, id:existingUser._id}, 'BATMAN',{expiresIn:'1h'});
       res.status(200).json({result:existingUser, token});
    } catch (err) {
        res.status(500).json({msg:'Something went wrong'});
    }
};