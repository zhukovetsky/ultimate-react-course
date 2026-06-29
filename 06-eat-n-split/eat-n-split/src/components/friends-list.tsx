import { Friend } from "../models/friend";
import { FriendComponent } from "./friend";

export type OnSelectFriendHandler = (f: Friend) => void;

interface FriendsListProps {
  friends: Friend[];
  onSelectFriend: OnSelectFriendHandler;
}
export function FriendsList({ friends, onSelectFriend }: FriendsListProps) {
  return (
    <>
      <ul>
        {friends.map((f) => (
          <li>
            <FriendComponent friend={f} key={f.id} onSelect={onSelectFriend} />
          </li>
        ))}
      </ul>
    </>
  );
}
