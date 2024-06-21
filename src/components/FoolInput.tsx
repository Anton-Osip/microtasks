import {ChangeEvent, useState} from "react";

type FoolInputProps = {
    addMessage: (title: string) => void
}

export const FoolInput = (props: FoolInputProps) => {
    let [title, setTitle] = useState<string>('');

    const OnChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value = {title} onChange = {OnChangeInputHandler}/>
            <button onClick = {onClickButtonHandler}>+
            </button>
        </div>
    )
}
