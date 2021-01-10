const express = require('express')

const app = express()
app.listen(5555,()=> {
    console.log("server started at 127.0.0.1:4444")
})

app.use(express.urlencoded({extended:true}))
//this is used for acessing body params

let tasks =[]

app.get("/", (req,res) => {
    let tasklist = tasks.map(t => `<li>${t}</li>`).join('\n')
    res.send(
        ` <html>
            <title>todo-list</title>
            <body>
                <form action="/" method ="post">
                    <input name="task"></input>
                    <button type="submit">ADD</button>
                </form>
                <ul>
                    ${tasklist}
                </ul>
            </body>
        </html> `
    )
})

app.post("/",(req,res)=> {
    tasks.push(req.body.task)
    res.redirect('/')//used to redirect when browser sees this it does a get request automatically
    res.send("new task added" + req.body.task)
})