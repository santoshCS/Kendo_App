const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

app.post('/data', (req, res) => {
  const data = {
    students: [
      {
        name: 'Alice',
        age: 20,
        hobbies: ['reading', 'swimming', 'coding'],
        id: 1,
      },
      {
        name: 'Bob',
        age: 22,
        hobbies: ['painting', 'dancing', 'singing'],
        id: 2,
      },
    ],
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
