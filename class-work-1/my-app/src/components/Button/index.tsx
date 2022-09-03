// import style from "./style.css"

import style from "./style.module.css"

interface Props {
    text : string ;
}

export function Button(props:Props) {
    return  <button className={style.button}>{props.text}</button>;  
};




// export const Button1 () => {};

// export const Button2 = function () {};