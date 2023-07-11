const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
const db = new sqlite3.Database('medecin.db');

// Create the 'medecin' table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS medecin (
    numMed INTEGER PRIMARY KEY AUTOINCREMENT,
    nomPrenoms TEXT,
    nbrJour INTEGER,
    tauxJournalier REAL
  )`);

  // Insert sample data
  const sampleData = [
    [1, 'John Doe', 5, 100],
    [2, 'Jane Smith', 3, 80],
    [3, 'David Johnson', 4, 90],
    [4, 'Sarah Williams', 6, 110],
    [5, 'Michael Brown', 7, 120],
  ];

  const insertQuery = 'INSERT INTO medecin (numMed, nomPrenoms, nbrJour, tauxJournalier) VALUES (?, ?, ?, ?)';

  sampleData.forEach(data => {
    db.run(insertQuery, data, err => {
      if (err) {
        console.error(err.message);
      }
    });
  });
});

// Close the database connection
db.close();
