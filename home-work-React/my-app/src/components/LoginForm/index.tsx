import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./style.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const submit = () => {
    alert(email + " " + password);
  };

  return (
    <>
      <div className={styles.loginForm}>
        <Input value={email} onChange={handleEmail} placeholder="email"/>
        <Input value={password} onChange={handlePassword} placeholder="password"/>
        <Button type={'secondary'} onClick={submit} text={"Login"} />
      </div>
    </>
  );
};