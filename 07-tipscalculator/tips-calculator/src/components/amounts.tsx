import { type Dispatch, type SetStateAction } from "react";
import { TipsCombobox } from "./tips";

interface AmountsProps {
  bill: number;
  setBill: Dispatch<SetStateAction<number>>;
  myEval: number;
  setMyEval: Dispatch<SetStateAction<number>>;
  friendsEval: number;
  setFriendsEval: Dispatch<SetStateAction<number>>;
}

export function Amounts({
  bill,
  setBill,
  myEval,
  setMyEval,
  friendsEval,
  setFriendsEval,
}: AmountsProps) {
  const onBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value ?? 0));
  };

  return (
    <>
      <div>
        <label>How much was the bill?</label>
        <input type="number" value={bill} onChange={onBillChange} />
      </div>
      <TipsCombobox
        percentage={myEval}
        onTipsChange={(e) => {
          setMyEval(e);
        }}
      >
        <label>How do you evaluate the service?</label>
      </TipsCombobox>
      <TipsCombobox
        percentage={friendsEval}
        onTipsChange={(e) => {
          setFriendsEval(e);
        }}
      >
        <label>How does your friend evaluate the service?</label>
      </TipsCombobox>
    </>
  );
}
