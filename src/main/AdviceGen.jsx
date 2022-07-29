import React, { useEffect, useState } from "react";
import './AdviceGen.css'
import Button from '../components/Button'
import AdviceText from "../components/AdviceText";


function RollAdvice() {
    const [list, setList] = useState(
        { id: 0, advice: 'Loading...' }
    )

    const [check, setCheck] = useState(false)

    useEffect(() => {
        async function fetchData() {
            document.getElementById('button').setAttribute('disabled', '')
            document.getElementById('button').style.backgroundColor = 'gray'
            document.getElementById('button').style.cursor = 'progress';
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            setList({ id: 0, advice: 'Fetching...' })
            setTimeout(() => {
                setList({ id: data.slip.id, advice: data.slip.advice })
                document.getElementById('button').removeAttribute('disabled');
                document.getElementById('button').removeAttribute('style');
            }, 2000)
        }
        fetchData()
    }, [check])

    return (
        <div className="main" role="main">
            <AdviceText label={list.advice} num={list.id} />
            <Button onClick={() => setCheck(!check)} />
            {/* <Button onClick={test} /> */}
        </div>
    );
}
export default RollAdvice