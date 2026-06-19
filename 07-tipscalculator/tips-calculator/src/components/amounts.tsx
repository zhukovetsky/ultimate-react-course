import { useState } from "react";
import { TipsCombobox } from "./tips";

type NumberChange = (bill: number, tips: number) => void;

interface AmountsProps {
  onTotalChange: NumberChange;
}

export function Amounts({ onTotalChange }: AmountsProps) {
  const [bill, setBill] = useState(0);
  const [myEval, setMyEval] = useState(0);
  const [friendsEval, setFriendsEval] = useState(0);

  const setTotal = () => {
    const averageTips = (myEval + friendsEval) / 2;
    const tips = bill * (1 + averageTips / 100);
    onTotalChange(bill, tips);
  };

  const onBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(parseInt(e.target.value));
    setTotal();
  };

  return (
    <>
      <div>
        <label>How much was the bill?</label>
        <input type="number" value={bill} onChange={onBillChange} />
      </div>
      <div>
        <label>How do you evalueate the service?</label>
        <TipsCombobox
          onTipsChange={(e) => {
            setMyEval(e);
            setTotal();
          }}
        />
      </div>
      <div>
        <label>How does your friend evaluate the service?</label>
        <TipsCombobox
          onTipsChange={(e) => {
            setFriendsEval(e);
            setTotal();
          }}
        />
      </div>
    </>
  );
}
