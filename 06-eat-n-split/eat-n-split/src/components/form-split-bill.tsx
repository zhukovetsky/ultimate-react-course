export function FormSplitBill({friend}: any) {
    return <>
        <form className="form-split-bill">
            <h2>Split the bill with {friend.name}</h2>
            <label>Bill value</label>
            <input type="number" />
            <label>Your expense</label>
            <input type="number" />
            <label>{friend.name}'s expense</label>
            <input type="number" disabled={true} />
            <label>Who payed the bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>
        </form>
    </>;
}