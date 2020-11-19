const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")

//middleware
app.use(cors())
app.use(express.json())

//Routes

//create a todo

app.post("/todos", (req, res) => {
  try {
    const { description } = req.body
  } catch (err) {
    console.error(err.message);
  }
})

//get all todos

//get a todo

//update a todo

app.listen(5000, () => {
  console.log("server has started on port 5000");
})

