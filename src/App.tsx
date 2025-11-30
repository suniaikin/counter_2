import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Settings } from "./components/Settings";


function App() {
    const [count, setCount] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [isValid, setIsValid] = useState(true);
    const [isConfigured, setIsConfigured] = useState(false);

    const incrementHandler = () => {
        setCount(count + 1);
    };
    const resetHandler = () => {
        setCount(startValue);
    };
    const startValueHandler = (newValue: number) => {
        setStartValue(newValue);
    };
    const maxValueHandler = (newValue: number) => {
        setMaxValue(newValue);
    };
    const validationHandler = (isValidNow: boolean) => {
        setIsValid(isValidNow);
    };
    const configuredHandler = () => {
        setIsConfigured(true);
    };

    return (
        <div className="App">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                onSetMaxValue={maxValueHandler}
                onSetStartValue={startValueHandler}
                onValidation={validationHandler}
                onSet={configuredHandler}
            />
            {!isValid ? (
                <div>Incorrect value!</div>
            ) : !isConfigured ? (
                <div>enter values and press 'set'</div>
            ) : (
                <Counter
                    count={count}
                    maxValue={maxValue}
                    onIncrement={incrementHandler}
                    onReset={resetHandler}
                />
            )}
        </div>
    );
}

export default App;
