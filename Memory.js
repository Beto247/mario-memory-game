import { useState } from "react";
import { Board } from "./Board";


export function Memory(){
    const [result, setResult] = useState(0)

    
    console.log(result)
    return(
        <>
        {result === 18 && <h3>'Congratulations! You found them all!'</h3>}
        <h3>Score:<span id="result">{result}</span></h3>
        <div className="d-flex justify-content-center align-items-center">        
        <div className="border flex col-3 row justify-content-center align-items-center">
            <Board setResult={setResult} result={result}/>
        </div>
        </div>
        </>
    )
}