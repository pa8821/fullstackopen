const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        number: 10
      },
      {
        name: 'Using props to pass data',
        number: 7
      },
      {
        name: 'State of a component',
        number: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
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
    <p>Number of excercises {props.parts[0].number + props.parts[1].number + props.parts[2].number}</p>
  )
}

export default App