import {ChangeEvent} from "react";

type InputProps = {
    value: string,
    setTitle: (title:string) => void
}

export const Input = (props: InputProps) => {

    const OnChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.target.value)
    }

    return (
        <input value = {props.value} onChange = {OnChangeInputHandler}/>
    )
}
