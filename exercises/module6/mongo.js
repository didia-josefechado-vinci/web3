const mongoose = require('mongoose')

const 

if (process.argv.length < 3) {
    console.log('There is no password provided')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://didiajosefechado:${password}@cluster0.xbwfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Number = mongoose.model('Number', phoneBookSchema)

if (process.argv.length === 3) {
    Number.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(number => {
            console.log(number.name, number.number)
        })
        mongoose.connection.close()
    })
} else {
    const number = new Number({
        name: process.argv[3],
        number: process.argv[4],
    })

    number.save().then(result => {
        console.log('added', result.name, 'number', result.number, 'to phonebook')
        mongoose.connection.close()
    })
}

