import { useState } from "react";

function Test(){
    let [counter,updateCounter]=useState(1000);
    return Test(
        <div>
    <h2>intially counter value is: {counter}</h2>
    <button onClick={()=>update counter(++counter)}>click me</button>
        </div>
    )
}
export default Test;