interface TotalProps {
    bill: number;
    tips: number;
}

export function Total({bill, tips}: TotalProps) {
    const tipsAmount = Math.ceil(bill * tips * 1.0 / 100);

    return <>
        <h1>Your total amount is ${bill + tipsAmount} (${bill} bill, ${tipsAmount} tips)</h1>
    </>;
}