const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.part} {props.part.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.table[0]}/>
      <Part part={props.table[1]}/>
      <Part part={props.table[2]}/>
    </div>
  )
}


const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part= [{part: part1, exercises: exercises1}, {part: part2, exercises: exercises2}, {part: part3, exercises: exercises3}]

  return (
    <div>
      <Header course={course} />
      <Content table={part}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App