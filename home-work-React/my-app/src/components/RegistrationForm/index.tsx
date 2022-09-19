import { ChangeEventHandler, useState } from "react"
import { Button } from "../Button";
import { Input } from "../Input";
import style from "./style.module.css";

export const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");


    const handleName: ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event?.target.value);
    };
    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event?.target.value);
    };

    const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event?.target.value);
    };

    const handleConfirm: ChangeEventHandler<HTMLInputElement> = (event) => {
        setconfirmPassword(event?.target.value);
    };

    const submit = () => {
        alert(name + " " + email + " " + password + " " + confirmPassword);
    }

    return (

        <div className={style.registrationForm}>
            <div>
              <Input type="login" value={name} onChange={handleName} placeholder="Name"/>
            </div>
            <div>
              <Input type="login" value={email} onChange={handleEmail} placeholder="Email"/>
            </div>
            <div>
              <Input type="login" value={password} onChange={handlePassword} placeholder="Password"/>
            </div>
            <div>
              <Input type="login" value={confirmPassword} onChange={handleConfirm} placeholder="Confirm Password"/>
            </div>
            <div>
              <Button onClick={submit} text={"Login"} type={'secondary'}/>
            </div>
            <p>If you have account, you can <a href="/Login">login</a></p>
        </div >
    );
}