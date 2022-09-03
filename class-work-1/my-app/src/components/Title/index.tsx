import style from './style.module.css'

interface Props {
    text: string;
}

export function Title(props: Props)  {
    return ( 
        <h1 className={style.title}>{props.text}</h1>
        )
}