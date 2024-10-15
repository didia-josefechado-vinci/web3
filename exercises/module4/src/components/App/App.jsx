import { useState } from 'react'
import '../../App.css'
import Filter from '../Filter/Filter'
import Person from 'components/Persons/Persons'
import PersonForm from 'components/PersonForm/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} persons={persons} />
      <h2>Numbers</h2>
      <Person personsToShow={personsToShow} />
    </div>
  )
}

export default App
