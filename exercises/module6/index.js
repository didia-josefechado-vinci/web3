require('dotenv').config()
const express = require('express')
const Number = require('./models/mongo')

const app = express()

app.use(express.json())

app.get('/api', (request, response) => {
    Number.find({}).then(numbers => {
        if (numbers.length !== 0) {
            response.json(numbers)
        }else{
            response.status(404).send({error: 'No numbers found'})
        }
    })
    .catch(error => {
      console.log(error)
      response.status(500).end()
    })
})

app.post('/api', (request, response) => {

    const body = request.body
    console.log(body);
    

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({ error: 'name or number is missing' })
    }

    const number = new Number({
        name: body.name,
        number: body.number,
    })

    number.save().then(savedNumber => {
        response.json(savedNumber)
    })
})

app.delete('/api/:id', (request, response) => {
    Number.findByIdAndDelete(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => {
        console.log(error)
        response.status(400).send({error: 'malformatted id'})
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})