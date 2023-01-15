const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <b>Number of exercises {sum}</b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => <Part part = {part} key={part.id} />)}
    </div>
  )
}

const Course = ({course}) => {
    const total = course.parts.reduce(
      (s, p) => {
        return s + p.exercises
      }, 0)
  
    return(
      <div>
        <Header course = {course.name} />
        <Content parts = {course.parts} />
        <Total sum = {total} />
      </div>
    )
  }

export default Course