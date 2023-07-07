const router = require("express").Router();
const connexion = require("./config/conexion");

// *** --- Rutas --- ***
//      *** GET ***
// GET books
router.get("/books", (req, res) => {
  let sql = "select * from Book";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books by id
router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const isbnPattern = '^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\\d-]+$';
  if(!id.match(isbnPattern)){
    res.status(400).json({err: "El formato del isbn no es válido"});
  }
  let sql = "select * from Book where isbn = ?";
  connexion.query(sql, [id], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books ordered alphabetical
router.get("/books/order/asc", (req, res) => {
  let sql = "select * from Book order by titulo";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books ordered alphabetical descending
router.get("/books/order/desc", (req, res) => {
  let sql = "select * from Book order by titulo DESC";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books ordered category
router.get("/books/category/:category", (req, res) => {
  const { category } = req.params;
  let sql = "select * from Book where categoria = ?";
  connexion.query(sql, [category], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books ordered category ordered alphabetical
router.get("/books/category/:category/order/asc", (req, res) => {
  const { category } = req.params;
  let sql = "select * from Book where categoria = ? order by titulo";
  connexion.query(sql, [category], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books ordered category ordered alphabetical
router.get("/books/category/:category/order/desc", (req, res) => {
  const { category } = req.params;
  let sql = "select * from Book where categoria = ? order by titulo DESC";
  connexion.query(sql, [category], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET books ordered by name
router.get("/books/name/:name", (req, res) => {
  const { name } = req.params;
  let sql = "SELECT * FROM Book where titulo LIKE ?";
  const value = `%${name}%`;
  connexion.query(sql, [value], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET users
router.get("/users", (req, res) => {
  let sql = "select * from User";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET user by id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from User where uID = ?";
  connexion.query(sql, [id], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET errors
router.get("/errors", (req, res) => {
  let sql = "select * from Error";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET error by id
router.get("/errors/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from Error where id = ?";
  connexion.query(sql, [id], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET events
router.get("/events", (req, res) => {
  let sql = "select * from Event";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET event by id
router.get("/events/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from Event where id = ?";
  connexion.query(sql, [id], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET reservas
router.get("/reservas", (req, res) => {
  let sql = "select * from Reserva";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET reservas by isbn
router.get("/reservas/:isbn", (req, res) => {
  const { isbn } = req.params;
  let sql = "select * from Reserva where isbn = ?";
  connexion.query(sql, [isbn], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET reservas by id
router.get("/reservasID/:userID", (req, res) => {
  const { userID } = req.params;
  let sql = "select * from Reserva where lectorId = ?";
  connexion.query(sql, [userID], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET disponibilidades
router.get("/disponibilidades", (req, res) => {
  let sql = "select * from Disponibilidad";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET disponibilidades by isbn
router.get("/disponibilidades/:isbn", (req, res) => {
  const { isbn } = req.params;
  let sql = "select * from Disponibilidad where isbn = ?";
  connexion.query(sql, [isbn], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET cola reservas
router.get("/colareservas", (req, res) => {
  let sql = "select * from ColaReservas";
  connexion.query(sql, (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// GET cola reservas by isbn
router.get("/colareservas/:isbn", (req, res) => {
  const { isbn } = req.params;
  let sql = "select * from ColaReservas where isbn = ?";
  connexion.query(sql, [isbn], (err, rows) => {
    if (err) throw err;
    else {
      res.status(200).json(rows);
    }
  });
});

// POST new book
router.post("/books", (req, res) => {
  const {
    isbn,
    autor,
    categoria,
    disponible,
    editorial,
    id,
    idioma,
    paginas,
    portadaImgPath,
    tipo,
    titulo,
  } = req.body;
  if (!isbn) {
    res.status(400).json({ message: "isbn is required" });
  } else {
    const sql =
      "INSERT INTO Book (isbn, autor, categoria, disponible, editorial, id, idioma, paginas, portadaImgPath, tipo, titulo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      isbn,
      autor,
      categoria,
      disponible,
      editorial,
      id,
      idioma,
      paginas,
      portadaImgPath,
      tipo,
      titulo,
    ];

    connexion.query(sql, values, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(201).json({ message: "Book created", id: result.insertId });
      }
    });
  }
});

// POST new event
router.post("/events", (req, res) => {
  const { fecha, descripcion, id, nombre, portadaImgPath } = req.body;
  if (!id) {
    res.status(400).json({ message: "event id is required" });
  } else {
    const sql =
      "INSERT INTO Event (fecha, descripcion, id, nombre, portadaImgPath) VALUES (?, ?, ?, ?, ?)";
    const values = [fecha, descripcion, id, nombre, portadaImgPath];

    connexion.query(sql, values, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(201).json({ message: "Event created", id: result.insertId });
      }
    });
  }
});

// POST new error
router.post("/errors", (req, res) => {
  const { id, msg } = req.body;
  if (!id) {
    res.status(400).json({ message: "error id is required" });
  } else {
    const sql =
      "INSERT INTO Error (id, msg) VALUES (?, ?)";
    const values = [id, msg];

    connexion.query(sql, values, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(201).json({ message: "Error created", id: result.insertId });
      }
    });
  }
});

// POST new disponibilidad
router.post("/disponibilidades", (req, res) => {
  const { estado, isbn, localizacion } = req.body;
  if (!isbn) {
    res.status(400).json({ message: "error isbn is required" });
  } else {
    const sql =
      "INSERT INTO Disponibilidad (estado, isbn, localizacion) VALUES (?, ?, ?)";
    const values = [estado, isbn, localizacion];

    connexion.query(sql, values, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(201).json({ message: "disponibilidad created", id: result.insertId });
      }
    });
  }
});

// POST new reserva
router.post("/reservas", (req, res) => {
  const { id, isbn, fechaIni, fechaFin, lectorId } = req.body;
  if (!isbn) {
    res.status(400).json({ message: "error isbn is required" });
  } else {
    const sql =
      "INSERT INTO Reserva (id, isbn, fechaIni, fechaFin, lectorId) VALUES (?, ?, ?, ?, ?)";
    const values = [id, isbn, fechaIni, fechaFin, lectorId];

    connexion.query(sql, values, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(201).json({ message: "reserva created", id: result.insertId });
      }
    });
  }
});

// POST new cola reservas
router.post("/colareservas", (req, res) => {
  const { idUser, isbn } = req.body;
  if (!isbn) {
    res.status(400).json({ message: "error isbn is required" });
  } else {
    const sql =
      "INSERT INTO ColaReservas (idUser, isbn) VALUES (?, ?)";
    const values = [idUser, isbn];

    connexion.query(sql, values, (err, result) => {
      if (err) console.log(err);
      else {
        res.status(201).json({ message: "cola reservas created", id: result.insertId });
      }
    });
  }
});

// DELETE posted book
router.delete("/books/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM Book WHERE isbn = ?";
  const values = [id];

  connexion.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting book" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json({ message: "Book deleted" });
    }
  });
});

// DELETE posted event
router.delete("/events/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM Event WHERE id = ?";
  const values = [id];

  connexion.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting event" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Event not found" });
    } else {
      res.status(200).json({ message: "Event deleted" });
    }
  });
});

// DELETE posted error
router.delete("/errors/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM Error WHERE id = ?";
  const values = [id];

  connexion.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting error" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Error not found" });
    } else {
      res.status(200).json({ message: "Error deleted" });
    }
  });
});

// DELETE posted reserva
router.delete("/reservas/:isbn", (req, res) => {
  const { isbn } = req.params;

  const sql = "DELETE FROM Reserva WHERE isbn = ?";
  const values = [isbn];

  connexion.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting reserva" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Reserva not found" });
    } else {
      res.status(200).json({ message: "Reserva deleted" });
    }
  });
});

// DELETE posted reserva
router.delete("/colareservas/:isbn", (req, res) => {
  const { isbn } = req.params;

  const sql = "DELETE FROM ColaReservas WHERE isbn = ?";
  const values = [isbn];

  connexion.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Error deleting reserva in colareservas" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Colareservas not found" });
    } else {
      res.status(200).json({ message: "Reserva in colareservas deleted" });
    }
  });
});

// PUT change disponible value
router.put('/books/:isbn', (req, res) => {
  const { disponible, isbn } = req.body;

  const sql = 'UPDATE Book SET disponible = ? WHERE isbn = ?';
  const values = [disponible, isbn];

  // Execute the SQL query to update the book record
  connexion.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Failed to update book' });
    } else {
      res.status(200).json({ message: 'Book updated successfully' });
    }
  });
});

// PUT change disponible value
router.put('/disponibilidades/:isbn', (req, res) => {
  const { estado, isbn } = req.body;

  const sql = 'UPDATE Disponibilidad SET estado = ? WHERE isbn = ?';
  const values = [estado, isbn];

  // Execute the SQL query to update the book record
  connexion.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Failed to update disponibilidad' });
    } else {
      res.status(200).json({ message: 'Disponibilidad updated successfully' });
    }
  });
});


// --------------

module.exports = router;
