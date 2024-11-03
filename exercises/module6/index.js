require('dotenv').config()
const express = require('express')
const Number = require('./models/mongo')

const app = express()

app.use(express.json())

app.get('/api', (request, response,next) => {
    Number.find({}).then(numbers => {
        if (numbers.length !== 0) {
            response.json(numbers)
        }else{
            response.status(404).send({error: 'No numbers found'})
        }
    })
    .catch(error => next(error))
})

app.post('/api', (request, response,next) => {

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
    .catch(error => next(error))
})

app.delete('/api/:id', (request, response,next) => {
    Number.findByIdAndDelete(request.params.id)
    .then(result => {
        if(result){
            response.status(204).end()
        }else{
            response.status(404).send({error: 'No number found'})
        }
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)