
import { Button } from "../../Button";
import styles from "./style.module.css";


export const SuccessForm = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Success</h1>
                <div >
                    <p>Email confirmed. </p>
                    <p>Your registration is now completed </p>
                </div>
            </div>
            <Button  text="Login" onClick={() => { } } type={"secondary"} ></Button>
        </>
    );
};