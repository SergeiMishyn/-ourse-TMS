import { useState } from "react";
import { Button } from "../Button"

export const Clicker = () => {
    let [clickCount, setClickCount] = useState(0);

    const onClickPlus = () => {
        setClickCount(clickCount + 1);
    };
    const onClickMinus = () => {
        setClickCount(clickCount - 1);
    };

    return (
        <div>
            {clickCount >= 10 && (
                <div>
                    <h2>it's too many clicks</h2>
                    <Button onClick={onClickMinus} text={"-"} type={'secondary'}/>
                </div>
            )}
            {clickCount <= 0 && (
                <div>
                    <h2>Let's go</h2>
                    <Button text={"+"} onClick={onClickPlus} type={'secondary'}
                    />
                </div>
            )}
            {clickCount > 0 && clickCount < 10 && (
                <div>
                    <h2>{clickCount}</h2>
                    
                    <Button text={"-"} onClick={onClickMinus} type={'secondary'}/>
                    <Button text={"+"} onClick={onClickPlus} type={'secondary'}/>
                </div>
            )}
        </div>
    );
};