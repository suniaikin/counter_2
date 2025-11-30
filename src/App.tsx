import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";

function App() {
    const [count, setCount] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [isValid, setIsValid] = useState(true);
    const [isConfigured, setIsConfigured] = useState(true);

    const incrementHandler = () => {
        setCount(count + 1);
    };

    const resetHandler = () => {
        setCount(startValue);
    };

    const setHandler = (newStartValue: number, newMaxValue: number) => {
        setStartValue(newStartValue);
        setMaxValue(newMaxValue);
        setCount(newStartValue);
        setIsConfigured(true);
    };

    const validationHandler = (isValidNow: boolean) => {
        setIsValid(isValidNow);
        if (!isValidNow) {
            setIsConfigured(false);
        }
    };

    return (
        <div className="App">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                onSet={setHandler}
                onValidation={validationHandler}
                isValid={isValid}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                startValue={startValue}
                isValid={isValid}
                isConfigured={isConfigured}
                onIncrement={incrementHandler}
                onReset={resetHandler}
            />
        </div>
    );
}

export default App;