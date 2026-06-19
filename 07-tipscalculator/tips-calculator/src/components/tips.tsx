type NumberChange = (num: number) => void;

interface TipsComboboxProps {
    onTipsChange: NumberChange;
}

export function TipsCombobox({onTipsChange}: TipsComboboxProps) {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onTipsChange(parseInt(value));
    }
    return <><input onChange={onInputChange} />
    <datalist>
        <option value="0">Bad (0%)</option>
        <option value="5">Ok (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Excellent! (20%)</option>
    </datalist>
    </>
}