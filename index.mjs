import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
//for Express to get values using the POST method
app.use(express.urlencoded({extended:true}));
//setting up database connection pool, replace values in red
const pool = mysql.createPool({
    host: "wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "b6o7z5vvduupgf9s",
    password: "c58r0zliq73gnrlx",
    database: "rmkcz1fwwlvd1tcp",
    connectionLimit: 10,
    waitForConnections: true
});
//routes
app.get('/', async(req, res) => {
    let sqlAuthors = `SELECT authorId, firstName, lastName
                      FROM authors
                      ORDER BY lastName`;
    let sqlCategories = `SELECT DISTINCT(category)
                         FROM quotes
                         ORDER BY category`;
    const [authors] = await pool.query(sqlAuthors);
    const [categories] = await pool.query(sqlCategories);
    res.render("home.ejs", { authors, categories });
});
app.get("/dbTest", async(req, res) => {
   try {
        const [rows] = await pool.query("SELECT CURDATE()");
        res.send(rows);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});//dbTest

app.get("/searchByKeyword", async(req, res) => {
   try {
        let keyword = req.query.keyword;
        let sql = `SELECT quote , firstName, lastName
                    FROM quotes 
                    NATURAL JOIN authors
                    WHERE quote LIKE ? `;
        let sqlParams = [`%${keyword}%`];

        console.log(req);
        const [rows] = await pool.query(sql,sqlParams);
        res.render("quotes.ejs", {rows});
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});

app.get("/searchByAuthor", async(req, res) => {
   try {
        let authorId = req.query.authorId;
        let sql = `SELECT quote, firstName, lastName
                   FROM quotes
                   NATURAL JOIN authors
                   WHERE authorId = ?`;
        let sqlParams = [authorId];
        const [rows] = await pool.query(sql, sqlParams);
        res.render("quotes.ejs", { rows });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});

app.get("/searchByCategory", async (req, res) => {
    try {
        let category = req.query.category;
        let sql = `SELECT quote, firstName, lastName
                   FROM quotes
                   NATURAL JOIN authors
                   WHERE category = ?`;
        let sqlParams = [category];
        const [rows] = await pool.query(sql, sqlParams);
        res.render("quotes.ejs", { rows });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});

app.get("/searchByLikes", async (req, res) => {
    try {
        let minLikes = req.query.minLikes;
        let maxLikes = req.query.maxLikes;
        let sql = `SELECT quote, firstName, lastName, likes
                   FROM quotes
                   NATURAL JOIN authors
                   WHERE likes >= ? AND likes <= ?
                   ORDER BY likes DESC`;
        let sqlParams = [minLikes, maxLikes];
        const [rows] = await pool.query(sql, sqlParams);
        res.render("likes.ejs", { rows });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});

app.listen(3000, ()=>{
    console.log("Express server running")
})
