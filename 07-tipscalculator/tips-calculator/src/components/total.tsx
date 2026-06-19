interface TotalProps {
    bill: number;
    tips: number;
}

export function Total({bill, tips}: TotalProps) {
    return <>
        <h1>Your total amount is ${bill + tips} (${bill} bill, ${tips} tips)</h1>
    </>;
}