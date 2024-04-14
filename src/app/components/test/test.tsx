import React, { useEffect, useState } from 'react'

function Test() {

    const [num, setNum] = useState<number>(0);
    const [addValid, setAddValid] = useState<boolean>(true);
    const [subValid, setSubValid] = useState<boolean>(true);

    useEffect(() => {
        if (num <= 0) {
            setAddValid(true);
        } else {
            setAddValid(false);
        }
    },[num]);

    useEffect(() => {
        if (num >= 0) {
            setSubValid(true);
        } else {
            setSubValid(false);
        }
    },[num]);

    const add = () => {
        setNum(num + 1);
    }

    const sub = () => {
        setNum(num - 1);
    }


    return (
        <div className="flex flex-col">
            <div> {num}</div>
            {addValid && <button onClick={add}>add</button>}
            {subValid && <button onClick={sub}>sub</button>}
        </div>
    )
}

export default Test