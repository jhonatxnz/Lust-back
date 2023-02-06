const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



app.listen(3002, () => {
    console.log('Servidor rodando na porta 3002')
})

app.get('/', (req, res) =>{
    return res.json({
        message:"Hello world"
    })
});