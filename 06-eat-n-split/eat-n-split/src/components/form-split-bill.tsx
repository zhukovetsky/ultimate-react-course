import { useState } from "react";
import { Friend } from "../models/friend";
import { Button } from "./button";

type OnNotifySplit = (n: number) => void;

interface FormSplitBillProps {
    friend: Friend;
    notifySplit: OnNotifySplit;
}

export function FormSplitBill({friend, notifySplit}: FormSplitBillProps) {
    const handleSplitBill = function(e: any) {
        e.preventDefault();

        notifySplit(-100);
    }

    const [billValue, setBillValue] = useState(0);
    const [myExpense, setMyExpense] = useState(0);
    const [friendExpense, setFriendExpense] = useState(0);

    return <>
        <form className="form-split-bill">
            <h2>Split the bill with {friend.name}</h2>
            <label>Bill value</label>
            <input type="number" value={billValue} onChange={(e) => {
                setBillValue(+e.target.value);
            }}/>
            <label>Your expense</label>
            <input type="number" value={myExpense} onChange={(e) => {
                setMyExpense(+e.target.value);
            }}/>
            <label>{friend.name}'s expense</label>
            <input type="number" disabled={true} value={friendExpense} onChange={(e) => {
                setFriendExpense(+e.target.value);
            }}/>
            <label>Who payed the bill</label>
            <select>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>

            <Button onClick={handleSplitBill}>Submit</Button>
        </form>
    </>;
}