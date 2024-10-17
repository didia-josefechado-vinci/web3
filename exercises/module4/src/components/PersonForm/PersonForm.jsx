import '../../App.css'
import personService from '../../services/persons'

const PersonForm = ({ newName, newNumber, setPersons,setNewName, setNewNumber, persons }) => {

    const addPerson = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      alert('Both name and number must be filled in');
      return;
    }
    const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
    }

    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    }
  }

const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input onChange={handleNameChange} />
            </div>
            <div>
                number: <input onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm