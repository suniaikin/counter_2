import { useState, useEffect } from "react";
import { Button } from "./Button";


type SettingsPropsType = {
    startValue: number;
    maxValue: number;
    onSet: (startValue: number, maxValue: number) => void;
    onValidation: (isValid: boolean) => void;
    isValid: boolean;
};

export const Settings = ({
    startValue,
    maxValue,
    onSet,
    onValidation,
    isValid,
}: SettingsPropsType) => {
    const [tempMaxValue, setTempMaxValue] = useState(maxValue);
    const [tempStartValue, setTempStartValue] = useState(startValue);

    useEffect(() => {
        setTempMaxValue(maxValue);
        setTempStartValue(startValue);
    }, [maxValue, startValue]);

    useEffect(() => {
        const isCurrentlyValid =
            tempStartValue >= 0 && tempStartValue < tempMaxValue;
        onValidation(isCurrentlyValid);
    }, [tempStartValue, tempMaxValue, onValidation]);

    const maxValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempMaxValue(Number(e.target.value));
    };

    const startValueChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTempStartValue(Number(e.target.value));
    };

    const setHandler = () => {
        onSet(tempStartValue, tempMaxValue);
    };

    const isChanged =
        tempStartValue !== startValue || tempMaxValue !== maxValue;

    const isSetButtonDisabled = !isValid || !isChanged;

    return (
        <div className="settings">
            <div className="inputs">
                <div className="input-row">
                    <label>max value:</label>
                    <input
                        type="number"
                        value={tempMaxValue}
                        onChange={maxValueChangeHandler}
                        className={!isValid ? "error" : ""}
                    />
                </div>
                <div className="input-row">
                    <label>start value:</label>
                    <input
                        type="number"
                        value={tempStartValue}
                        onChange={startValueChangeHandler}
                        className={!isValid ? "error" : ""}
                    />
                </div>
            </div>
            <div className="buttons">
                <Button
                    title="set"
                    onClick={setHandler}
                    disabled={isSetButtonDisabled}
                />
            </div>
        </div>
    );
};
