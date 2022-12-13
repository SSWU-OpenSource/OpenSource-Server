import express from 'express';

const app = express();

app.use(express.json());
app.use('/api', require('./router'));

app.get('/', (req, res, next) => {
    res.send('express server');
});

app.listen(8000, () => {
    console.log(`
          #############################################
              Server listening on port: 8000
          #############################################
      `);
});