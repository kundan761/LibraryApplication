const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, 'BATMAN');

    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
