import React,{useState} from 'react'
import "./style.css"

const App = ()=>{

    let [score, setScore] = useState(0)


    return(
        <div>
            <h1 style={{textAlign : "center"}}> Hey!! This is my Counter Application </h1>
            <h3>The Value of score is {score} </h3>
            <button onClick={()=>{(score ===25) ? setScore(25) :setScore(score+1)}}> Increment </button>
            <button onClick={()=>(score>0)? setScore(score-1) : "" }> Decrement </button>
            <button onClick={()=>{setScore(0)}}> Reset </button>
        </div>
    )
}

export default App 



