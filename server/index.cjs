// server/index.cjs
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

app.use(cors());
app.use(express.json());

// Define your API routes
app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/events', async (req, res) => {
  const { event_name, title, body, link, img_src, start_datetime, end_datetime } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (event_name, title, body, link, img_src, start_datetime, end_datetime) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [event_name, title, body, link, img_src, start_datetime, end_datetime]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
