import { Button } from "./Button";

type CountPropsType = {
    count: number;
    maxValue: number;
    startValue: number;
    isValid: boolean;
    isConfigured: boolean;
    onIncrement: () => void;
    onReset: () => void;
};

export const Counter = ({
    count,
    maxValue,
    startValue,
    isValid,
    isConfigured,
    onIncrement,
    onReset,
}: CountPropsType) => {
    const getDisplayClass = () => {
        if (!isValid || !isConfigured) return "display";
        return count === maxValue ? "display red" : "display";
    };

    const getDisplayContent = () => {
        if (!isValid) return "Incorrect value!";
        if (!isConfigured) return "press 'set' button";
        return count;
    };

    return (
        <div className="counter">
            <div className={getDisplayClass()}>{getDisplayContent()}</div>
            <div className="buttons">
                <Button
                    title="inc"
                    onClick={onIncrement}
                    disabled={!isConfigured || !isValid || count === maxValue}
                />
                <Button
                    title="reset"
                    onClick={onReset}
                    disabled={!isConfigured || !isValid || count === startValue}
                />
            </div>
        </div>
    );
};
