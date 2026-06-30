import { useState } from "react";
import { Friend } from "../models/friend";
import { Button } from "./button";

type NotifyFriendAddedFunc = (f: Friend) => void;

interface FormAddFriendProps {
    notifyFriendAdded: NotifyFriendAddedFunc;
}

export function FormAddFriend({notifyFriendAdded}: FormAddFriendProps) {
    const submitForm = function(e: any) {
        e.preventDefault();

        const id = Math.floor(Math.random() * (10000));
        const f: Friend = {
            id:  id,
            name: name,
            image: `${photo}?u=${id}`,
            balance: 0
        }

        notifyFriendAdded(f)
    }

    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("https://i.pravatar.cc/48");
    return <>
        <form className="form-add-friend">
            <label>🤳 Friend's name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>🏞️ Photo URL</label>
            <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)}/>
            
            <Button onClick={submitForm}>Add friend</Button>
        </form>
    </>
}