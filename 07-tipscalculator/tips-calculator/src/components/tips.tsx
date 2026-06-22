import type { ReactNode } from "react";

type NumberChange = (num: number) => void;

interface TipsComboboxProps {
  percentage: number;
  onTipsChange: NumberChange;
  children: ReactNode | ReactNode[] | undefined;
}

export function TipsCombobox({ percentage, onTipsChange, children }: TipsComboboxProps) {
  const onInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value ?? 0);
    onTipsChange(value);
  };

  return (
    <div>
      {children}
      <select value={percentage} onChange={onInputChange}>
        <option value="0">Bad (0%)</option>
        <option value="5">Ok (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Excellent! (20%)</option>
      </select>
    </div>
  );
}
