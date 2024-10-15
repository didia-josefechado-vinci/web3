import '../../App.css'

const Filter = ({ filter, setFilter }) => {

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }
    
    return (
        <div>
        <div>filter shown with <input value={filter} onChange={handleFilterChange} /></div>
        </div>
    )
}

export default Filter