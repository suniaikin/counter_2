type DisplayPropsType = {
    count: number;
    maxValue: number;
};

export const Display = ({ count, maxValue }: DisplayPropsType) => {
    const displayClass = count === maxValue ? "display red" : "display";

    return <div className={displayClass}>{count}</div>;
};
