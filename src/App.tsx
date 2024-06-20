import './App.css'
import {Button} from "./components/Button";

function App() {

    // const onClickHandler = (name: string) => {
    //     console.log(`Hello! I am ${name}`)
    // }
    // const foo1 = () => {
    //     console.log('foo1')
    // }
    // const foo2 = (number: number) => {
    //     console.log(number)
    // }

    const button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    return (


        <div className = "App">
            <Button
                name = {'My youtube chanel-1'}
                callback = {
                    () => {
                        button1Foo('I am Anton')
                    }
                }/>
            <Button
                name = {'My youtube chanel-2'}
                callback = {
                    () => {
                        button2Foo('I am Yana')
                    }
                }
            />
        </div>
    )
}

export default App;
