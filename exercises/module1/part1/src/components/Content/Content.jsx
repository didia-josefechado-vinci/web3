import Part from '../Part/Part'

const Content = (props) => {
  return (
    <div>
      <Part part={props.table[0]}/>
      <Part part={props.table[1]}/>
      <Part part={props.table[2]}/>
    </div>
  )
}

export default Content