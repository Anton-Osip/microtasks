type FooterProps = { titleForFooter: string }

export const Footer = (props: FooterProps) => {
    return (<footer>{props.titleForFooter}</footer>)
}