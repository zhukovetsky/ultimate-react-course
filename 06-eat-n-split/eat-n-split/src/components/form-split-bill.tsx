import { useState } from "react";
import { Friend } from "../models/friend";
import { Button } from "./button";

type OnNotifySplit = (n: number) => void;

interface FormSplitBillProps {
    friend: Friend;
    notifySplit: OnNotifySplit;
}

export function FormSplitBill({friend, notifySplit}: FormSplitBillProps) {
    const [billValue, setBillValue] = useState(0);
    const [myExpense, setMyExpense] = useState(0);
    const [friendExpense, setFriendExpense] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const handleSplitBill = function(e: any) {
        e.preventDefault();

        if (!billValue) {
            return;
        }

        if (whoIsPaying === "user") {
            notifySplit(friendExpense);
        } else {
            notifySplit(-myExpense);
        }
    }

    return <>
        <form className="form-split-bill">
            <h2>Split the bill with {friend.name}</h2>

            <label>💰 Bill value</label>
            <input type="number" value={billValue} onChange={(e) => {
                setBillValue(+e.target.value);
                if (whoIsPaying === "user") {
                    setFriendExpense(+e.target.value - myExpense);
                } else {
                    setMyExpense(+e.target.value - friendExpense);
                }
            }}/>

            <label>🤑 Your expense</label>
            <input type="number" disabled={whoIsPaying !== "user"} value={myExpense} onChange={(e) => {
                setMyExpense(+e.target.value);
                setFriendExpense(billValue - +e.target.value)
            }}/>

            <label>💸 {friend.name}'s expense</label>
            <input type="number" disabled={whoIsPaying === "user"} value={friendExpense} onChange={(e) => {
                setFriendExpense(+e.target.value);
                setMyExpense(billValue - +e.target.value)
            }}/>
            
            <label>🤷‍♂️ Who payed the bill</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>

            <Button onClick={handleSplitBill}>Submit</Button>
        </form>
    </>;
}