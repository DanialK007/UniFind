const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const universitiesRouter = require('./routes/universities');
app.use('/api/universities', universitiesRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});