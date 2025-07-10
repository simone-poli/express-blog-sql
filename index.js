const express = require("express")
const app = express()
const port = 3001
const postRouter = require("./routes/posts")


app.use(express.json())
app.use('/api/posts', postRouter)


app.listen (port, ()=>{
    console.log(`The server is start and listening in http://localhost:${port}`)
})