import './App.css'
import {useState} from "react";

function App() {

    let [a, setA] = useState(1)
    const onclickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onclickHandler1 = () => {
        setA(0);
        console.log(a)
    }
    return (
        <div className = "App">
            <h1>{a}</h1>
            <button onClick = {onclickHandler}>number</button>
            <button onClick = {onclickHandler1}>0</button>
        </div>)
}

export default App;
