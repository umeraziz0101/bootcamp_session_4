import React, { useState } from "react";
import { Message } from "./message";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [isDay, setIsDay] = useState(true);

    return (
        <div className={`box ${isDay ? "yellow" : ""}`}>
            <h1>Day time = {isDay ? "Morning" : "Night"}</h1>
            <Message counter={count} />
            <br />
            <button onClick={() => setCount(count + 1)}>Update counter</button>
            <button onClick={() => setIsDay(!isDay)}>Update Day</button>
        </div>
    );
}

export default App;
