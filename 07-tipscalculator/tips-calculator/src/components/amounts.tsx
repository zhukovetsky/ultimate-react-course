import type { Dispatch, SetStateAction } from "react";
import { TipsCombobox } from "./tips";

interface Evaluator {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
}

interface AmountsProps {
  bill: number;
  setBill: Dispatch<SetStateAction<number>>;
  me: Evaluator;
  friend: Evaluator;
}

export function Amounts({ bill, setBill, me, friend }: AmountsProps) {
  const onBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setBill(raw === "" ? 0 : Number(raw));
  };

  return (
    <>
      <div>
        <label>How much was the bill?</label>
        <input
          type="number"
          value={bill === 0 ? "" : bill}
          onChange={onBillChange}
        />
      </div>
      <TipsCombobox percentage={me.value} onTipsChange={me.onChange}>
        <label>How do you evaluate the service?</label>
      </TipsCombobox>
      <TipsCombobox percentage={friend.value} onTipsChange={friend.onChange}>
        <label>How does your friend evaluate the service?</label>
      </TipsCombobox>
    </>
  );
}
