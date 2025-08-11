const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrls');
const app = express();

mongoose.connect(process.env.MONGO_URI);

const seedDatabase = async () => {
  try {
    const count = await ShortUrl.countDocuments();
    if (count === 0) {
      await ShortUrl.create({
        full: 'https://youtu.be/dQw4w9WgXcQ?si=5D4wGw_psazNtcZn'
      });
      console.log('Database seeded with default URL.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
  seedDatabase();
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
});

module.exports = app;