import {useState} from "react";
import {FoolInput} from "./components/FoolInput";
import {Input} from "./components/Input";
import {Button1} from "./components/Button1";

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

export function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState<string>('');


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([...message, newMessage])
    }

    const callbackButtonHandler=()=>{
        addMessage(title)
        setTitle('')
    }

    return (
        <div className = "App">
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FoolInput addMessage = {addMessage}/>*/}
            <div>
                <Input value = {title} setTitle = {setTitle}/>
                <Button1 name={'+'} callback={callbackButtonHandler}/>
            </div>
            {message.map((el, index
            ) => {
                return (
                    <div key = {index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;