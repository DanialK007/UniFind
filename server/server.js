const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Universities Route 
const universitiesRouter = require('./routes/universities');
app.use('/api/universities', universitiesRouter);

// Blogs Route
const blogsRouter = require('./routes/blogs');
app.use('/api/blogs', blogsRouter);

// News Route
const newsRouter = require('./routes/news');
app.use('/api/news', newsRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});