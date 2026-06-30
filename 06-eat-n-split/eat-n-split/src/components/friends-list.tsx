import { Friend } from "../models/friend";
import { FriendComponent } from "./friend";

export type OnSelectFriendHandler = (f: Friend) => void;

interface FriendsListProps {
  friends: Friend[];
  selectedFriend: Friend | null;
  onSelectFriend: OnSelectFriendHandler;
}
export function FriendsList({ friends, selectedFriend, onSelectFriend }: FriendsListProps) {
  return (
    <>
      <ul>
        {friends.map((f) => (
          <li key={f.id} className={selectedFriend && selectedFriend.id === f.id ? "selected" : ""}>
            <FriendComponent selected={selectedFriend && selectedFriend.id === f.id} friend={f} key={f.id} onSelect={onSelectFriend} />
          </li>
        ))}
      </ul>
    </>
  );
}
