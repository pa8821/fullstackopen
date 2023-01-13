import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedBack = (type) => {
    if(type === "good") {
      return () => setGood(good+1)
    }
    else if(type === "bad"){
      return () => setBad(bad+1)
    }
    else if(type === "neutral"){
      return () => setNeutral(neutral+1)
    }
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={feedBack("good")} text = "good" />
      <Button onClick={feedBack("bad")} text = "bad " />
      <Button onClick={feedBack("neutral")} text = "good" />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

const Statistics = ({good,bad,neutral}) => {

  if(good+bad+neutral === 0){
    return(<p>No Feedback Gathered</p>)
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <thead>
          <th>Type</th>
          <th>Total</th>
        </thead>
        <tbody>
          <StatisticsLine text = "good" value = {good} />
          <StatisticsLine text = "neutral" value = {neutral} />
          <StatisticsLine text = "bad" value = {bad} />
          <StatisticsLine text = "total" value = {bad+good+neutral} />
          <StatisticsLine text = "average" value = {(good-bad)/3} />
          <StatisticsLine text = "positive" value = {good/(good+neutral+bad)} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

export default App
