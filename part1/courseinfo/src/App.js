const App = () => {
  const course = 'Half Stack application development'
  const parts = 
  [
      {name: 'Fundamentals of React', 
       number: 10},
      {name: 'Using props to pass data',
       number: 7},
      {name: 'State of a component', 
       number: 14}
  ]

  return (
    <div>
      <Header title = {course}/>
      <Content parts = {parts}/>
      <Total total = {parts[0].number + parts[1].number + parts[2].number}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.number}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.total}</p>
  )
}

export default App