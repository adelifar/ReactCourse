import { useState } from "react";

const Hello=()=>{
    const [changed,setChanged]=useState(false);
    const changeHandler=()=>{
        setChanged(true);
    }
    return <div>
        <h1>Hello tosinso!</h1>
        {!changed && <p>This is react course !</p>}
        {changed && <p>changed</p>}
        <button onClick={changeHandler}>change content</button>
    </div>
}
export default Hello;