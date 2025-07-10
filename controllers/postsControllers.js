const posts = require("../data/posts")
const connection = require("../db/connection")


function index (req, res){
  const sql = "SELECT * FROM posts"

  connection.query(sql, (err,results) =>{
    if(err)
      return res.status(500).json({
    err: true,
    message : "Not found"
  })
  console.log(results)
  res.json(results)
  })
}

function show (req, res){
  const id = Number(req.params.id)
  const sql ="SELECT * FROM posts WHERE id =?;"

  connection.query(sql, [id], (err,results) =>{
    if(err)
      return res.status(500).json({
      err: true,
      message:err.message
    })
    if(results.length === 0) return res.status(404).json({
      err: true,
      message: "Not found"
    })
    console.log(results),
    res.json(results)
  })
}

function store (req, res){
    const newPost = {
        title :req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)

    console.log(posts)

    res.status(201)
    res.json(newPost)
}

function update (req,res){
    const id = Number(req.params.id)

    const post = posts.find(post => post.id === id)

    if(!post){
        res.status(404)
        return res.json({
            message: "post not found"
        })
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts)

    res.json(post)
}

function modify (req,res){
    const id = Number(req.params.id)

    const post = posts.find(post => post.id === id)

    if(!post){
        res.status(404)
        return res.json({
            message: "post not found"
        })
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts)

    res.json(post)
}

function destroy (req, res){
  const id = Number(req.params.id)
  const post = posts.find(posts => posts.id === id);
  if(!post){
    res.status(404)

    return res.json({
      
      message:"Post non trovato"

    })
  }
  posts.splice(posts.indexOf(post),1)

  console.log(posts)

  res.sendStatus(204)
  
}


module.exports = {index, show, store, update, modify, destroy}