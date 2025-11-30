import { useState, useEffect } from "react";

type SettingsPropsType = {
    startValue: number;
    maxValue: number;
    onSetMaxValue: (newValue: number) => void;
    onSetStartValue: (newValue: number) => void;
    onValidation: (isValid: boolean) => void;
    onSet: () => void;
};

export const Settings = ({
    startValue,
    maxValue,
    onSetMaxValue,
    onSetStartValue,
    onValidation,
    onSet,
}: SettingsPropsType) => {
    const [tempMaxValue, setTempMaxValue] = useState(maxValue);
    const [tempStartValue, setTempStartValue] = useState(startValue);

    useEffect(() => {
        if (tempStartValue < 0 || tempStartValue >= tempMaxValue) {
            onValidation(false);
        } else {
            onValidation(true);
        }
    }, [tempStartValue, tempMaxValue, onValidation]);

    const setHandler = () => {
        onSetMaxValue(tempMaxValue);
        onSetStartValue(tempStartValue);
        onSet();
    };

    return (
        <div className="settings">
            <div className="inputs">
                <input
                    type="number"
                    value={tempMaxValue}
                    onChange={(e) => setTempMaxValue(Number(e.target.value))}
                />
                <input
                    type="number"
                    value={tempStartValue}
                    onChange={(e) => setTempStartValue(Number(e.target.value))}
                />
            </div>

            <button onClick={setHandler}> set </button>
        </div>
    );
};
