import express from 'express'
import mysql from 'mysql'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const port = 3001

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jamiema1",
    database: "boulder-tracker"
})

app.use(cors()) 
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// db.connect(err => {
//     if (err) throw err
//     console.log("Successfully connected to the database")
// })

app.get("/", (req, res) => {
    res.json("This is the backend")
})

app.post("/api/insert", (req, res) => {

    const rating = req.body.rating
    const colour = req.body.colour
    const type = req.body.type
    const description = req.body.description
    
    const values = [rating, colour, type, description]

    const q = "INSERT INTO boulders (rating, colour, type) VALUES (?,?,?,?);"
    
    db.query(q, values, (err, data) => {
        if (err) return res.json("Error" + err)
    })
})


app.get("/api/get", (req, res) => {

    const q = "SELECT * FROM boulders;"
    
    db.query(q, (err, data) => {
        if (err) return res.json("Error" + err)
        res.send(data)
    })
})



// app.get("/boulders", (req, res) => {
//     const q = "SELECT * FROM boulders"
//     db.query(q, (err, data) => {
//         if (err) return res.json("Error" + err)
//         return res.json(data)
//     }) 
// })

app.get("/boulders", (req, res) => {
    const q = "INSERT INTO boulders (rating, colour, type) VALUES (0, 'blue', 'easy');"
    db.query(q, (err, data) => {
        if (err) return res.json("Error" + err)
        return res.json(data)
    })
})

app.listen(port, () => {
    console.log('Connected to backend')
})