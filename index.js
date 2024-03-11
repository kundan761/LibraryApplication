const express = require('express');
const { connection } = require('mongoose');
const userRoute = require('./routes/userRoutes')
const bookRoute = require('./routes/bookRoutes')
const reviewRoute = require('./routes/reviewRoutes')
const favouriteRoute = require('./routes/favouriteRoutes')


const app = express();
app.use(express.json());
app.use('/library/users', userRoute);
app.use('/library/books', bookRoute)
app.use('/library/reviews', reviewRoute)
app.use('/library/favourites', favouriteRoute)

app.get('/', (req, res) => {
    res.status(200).json({msg:'This is the home route of our library'})
})
app.listen(8080, async () => {
  try {
    await connection;
    console.log('connected to the DB');
    console.log('server is running on port 8080');
  } catch (err) {
    console.log(err);
  }
});
