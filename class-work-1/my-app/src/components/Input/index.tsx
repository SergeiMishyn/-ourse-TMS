
import style from "./style.module.css"

interface Props {
    placeholder: string;
}

export const Input = (props: Props) =>{
    return  <input className={style.input} placeholder={props.placeholder}></input>;  
};