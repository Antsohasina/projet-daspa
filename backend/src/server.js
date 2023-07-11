const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

const db = new sqlite3.Database('medecin.db'); // In-memory SQLite database for testing purposes

app.use(express.json());

// Get all medecin
app.get('/medecin', (req, res) => {
  db.all('SELECT * FROM medecin', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(rows);
    }
  });
});

// Get a specific medecin by numMed
app.get('/medecin/:numMed', (req, res) => {
  const { numMed } = req.params;
  db.get('SELECT * FROM medecin WHERE numMed = ?', [numMed], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (!row) {
      res.status(404).json({ error: 'Medecin not found' });
    } else {
      res.json(row);
    }
  });
});

// Create a new medecin
app.post('/medecin', (req, res) => {
    const { nomPrenoms, nbrJour, tauxJournalier } = req.body;
  
    if (!nomPrenoms || !nbrJour || !tauxJournalier) {
      res.status(400).json({ error: 'Missing required fields' });
    } else {
      db.get('SELECT MAX(numMed) as lastNumMed FROM medecin', (err, row) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        let newNumMed = 1; // Default starting value
  
        if (row && row.lastNumMed) {
          newNumMed = row.lastNumMed + 1;
        }
  
        db.run(
          'INSERT INTO medecin (numMed, nomPrenoms, nbrJour, tauxJournalier) VALUES (?, ?, ?, ?)',
          [newNumMed, nomPrenoms, nbrJour, tauxJournalier],
          function (err) {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Internal server error' });
            } else {
              res.status(201).json({ numMed: newNumMed, nomPrenoms, nbrJour, tauxJournalier });
            }
          }
        );
      });
    }
  });
  

// Update an existing medecin
app.put('/medecin/:numMed', (req, res) => {
  const { numMed } = req.params;
  const { nomPrenoms, nbrJour, tauxJournalier } = req.body;

  db.run(
    'UPDATE medecin SET nomPrenoms = ?, nbrJour = ?, tauxJournalier = ? WHERE numMed = ?',
    [nomPrenoms, nbrJour, tauxJournalier, numMed],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Medecin not found' });
      } else {
        res.json({ numMed, nomPrenoms, nbrJour, tauxJournalier });
      }
    }
  );
});

// Delete a medecin
app.delete('/medecin/:numMed', (req, res) => {
  const { numMed } = req.params;

  db.run('DELETE FROM medecin WHERE numMed = ?', [numMed], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Medecin not found' });
    } else {
      res.json({ numMed });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
