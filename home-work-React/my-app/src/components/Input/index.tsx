import { ChangeEventHandler, useContext } from "react";
import { Context } from "../../App";
import styles from "./style.module.css";


type InputColorType = "login";
interface Input {
  type?: any;
  value: string;
  placeholder?: string;
  refObj?: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
}


const getInputStyle = (type: InputColorType) => {

  if (type === "login") {
    return styles.login;
  }

};
export const Input = (props: Input) => {
  const { isDark } = useContext(Context);
  
  return (
    <input
      className={`${styles.input} ${isDark ? styles.darkInput : ""}`}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
};