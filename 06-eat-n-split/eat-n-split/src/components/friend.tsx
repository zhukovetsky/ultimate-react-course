import { Friend } from "../models/friend";
import { Button } from "./button";
import { OnSelectFriendHandler } from "./friends-list";

interface FriendComponentProps {
  friend: Friend;
  onSelect: OnSelectFriendHandler;
}

export function FriendComponent({ friend, onSelect }: FriendComponentProps) {
  const onSelectClick = (e: any) => onSelect(friend);
  
  return (
    <>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${-friend.balance}
        </p>
      )}
      {friend.balance == 0 && <p>You with {friend.name} are even</p>}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      <Button onClick={onSelectClick}>Select</Button>
    </>
  );
}
