const express = require('express')
const root = express()
root.get("/",(req,res)=>{
    res.send("Hello")
})

root.listen(3000)

const book = express()
book.get("/books",(req,res)=>{
    res.send({
      "books":[{
            "name" : "Indian History",
            "pages" : 320,
            "Author": "Rama Krisnan",
            "categories" : "History"

        },
        {
            "name" : "Indian Politics",
            "pages" : 320,
            "Author": "Netaji Subhas Chandra bos",
            "categories" : "Politics"

        },
        {
            "name" : "Indian Economy",
            "pages" : 320,
            "Author": "lal bahadur Sastri",
            "categories" : "Economy"

        },
        {
            "name" : "Physics",
            "pages" : 320,
            "Author": "Abdual Kalam",
            "categories" : "Science"

        },
     ]
    })
})
book.listen(3001)