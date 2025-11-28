import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
	
    const MAX_VALUE = 5;
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    };

    const resetHandler = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <Counter
                count={count}
                maxValue={MAX_VALUE}
                onIncrement={incrementHandler}
                onReset={resetHandler}
            />
        </div>
    );
}

export default App;
