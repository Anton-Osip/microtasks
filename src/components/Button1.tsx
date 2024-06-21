type ButtonType = {
    name: string
    callback:()=>void
}

export const Button1 = (props: ButtonType) => {

    const buttonHandler=()=>{
        props.callback()
    }
    return (
        <button onClick={buttonHandler}>{props.name}</button>
    )
}
