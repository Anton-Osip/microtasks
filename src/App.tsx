import './App.css'
import {useState} from "react";
import {Money} from "./components/Money";

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameButton, setNameButton] = useState<FilterType>('All');

    let currentMoney = money
    if (nameButton === 'Dollars') {
        currentMoney = money.filter((m) => m.banknots === 'Dollars')
    }
    if (nameButton === 'RUBLS') {
        currentMoney = money.filter((m) => m.banknots === 'RUBLS')
    }

    const onclickHandler = (nameButton: FilterType) => {
        setNameButton(nameButton)
    }
    return (
        <div className = "App">
            <Money currentMoney={currentMoney} onclickHandler={onclickHandler}/>
        </div>)
}

export default App;
