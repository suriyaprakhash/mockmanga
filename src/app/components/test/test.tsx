import React, { useEffect, useState } from 'react'
import Input from '../shared/input'

function Test() {

    // let a = 0;
    const [a, setA] = useState(0);
    const [str, setStr] = useState('init');

    // useEffect(() => {

    // }
    // ,[str])

    const callback = (inputData: string) => {
        console.log(inputData)
        setStr(inputData)
    }

    const buttonClick = (event: any) => {
        setA(a + 1);
        setStr(str +' '+ a)
    }


    return (
        <div className="flex flex-col">
            
            <Input initialValue={str} placeholder='test' type='string' inputParentCallback={callback}/>
            {str}
            <button onClick={buttonClick}>add</button>
        </div>
    )
}

export default Test