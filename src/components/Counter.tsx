import { Button } from "./Button";
import { Display } from "./Display";

type CountPropsType = {
    count: number;
    maxValue: number;
    onIncrement: () => void;
    onReset: () => void;
};

export const Counter = ({
    count,
    maxValue,
    onIncrement,
    onReset,
}: CountPropsType) => {
    return (
        <div className="counter">
            <Display count={count} maxValue={maxValue} />
            <div className="buttons">
                <Button
                    title="inc"
                    onClick={onIncrement}
                    disabled={count === maxValue}
                />
                <Button
                    title="reset"
                    onClick={onReset}
                    disabled={count === 0}
                />
            </div>
        </div>
    );
};
