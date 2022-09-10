import style from "./style.module.css";



export const onClickLogin = () => {
  alert("Login");
};

export const onClickSignUp = () => {
  alert("SignUp");
};

export const onClickLogout = () => {
  alert("Logout");
};





interface Props {
    text?: string;
    onClick: () => void;
    disabled?: boolean;
    type: ButtonColorType;
}
type ButtonColorType = "primary" | "secondary";

const getButtonStyle = (type: ButtonColorType) => {
    if (type === "primary") {
      return style.primary;
    }
  
    if (type === "secondary") {
      return style.secondary;
    }
  
    
  };

export const Button = (props: Props) => {
    return (
        <button className={`${style.button} ${getButtonStyle(props.type)}`} onClick={props.onClick}> {props.text}
        </button>
    );
};