import {FilterType} from '../App'

type MoneyProps = {
    currentMoney: CurrentMoneyType[]
    onclickHandler: (nameButton: FilterType) => void
}

type CurrentMoneyType = { banknots: string, value: number, number: string }

export const Money = ({currentMoney, onclickHandler}: MoneyProps) => {


    return (
        <>
            <ul>{currentMoney.map((item, index) => {
                return (
                    <li key = {index}>
                        <span>{item.banknots}</span>
                        <span>{item.value}</span>
                        <span>{item.number}</span>
                    </li>)
            })}</ul>
            <button onClick = {() => {
                onclickHandler('All')
            }
            }>All
            </button>
            <button onClick = {() => {
                onclickHandler('Dollars')
            }
            }>Dollars
            </button>
            <button onClick = {() => {
                onclickHandler('RUBLS')
            }
            }>RUBLS
            </button>

        </>)
}

