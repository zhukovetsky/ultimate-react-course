import './index.css'
import { Friend } from './models/friend';
import { FriendsList } from './components/friends-list';
import { useState } from 'react';
import { FormAddFriend } from './components/form-add-friend';
import { Button } from './components/button';
import { FormSplitBill } from './components/form-split-bill';

const initialFriends: Friend[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


function App() {
  const addFriend = (e: any) => {
    setAddFriendVisisble(v => !v);
  }

  const onSelectFriend = (e: any) => {
    setSelectedFriend(e);
  }

  const [friends, setFriends] = useState(initialFriends);
  const [addFriendsVisible, setAddFriendVisisble] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const onFriendAdd = function(f: Friend) {
    setFriends(friends => [...friends, f]);
    setAddFriendVisisble(false);
  }

  const onNotifySplit = function (n: number) {
    if (!selectedFriend) { return; }

    // selectedFriend.balance += Number;
    setSelectedFriend(null);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} onSelectFriend={onSelectFriend}/>
        { addFriendsVisible && <FormAddFriend notifyFriendAdded={onFriendAdd}/>}
        { !addFriendsVisible && <Button onClick={addFriend}>Add friend</Button> }
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} notifySplit={onNotifySplit} />}
    </div>
  )
}

export default App
