import Profile from './ Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem';
import TransactionHistory from './TransactionHistory';
import Container from './Container';
import userInfo from '../../user.json';
import statisticalData from '../../statistical-data.json';
import friends from '../..//friends.json';
import transactions from '../../transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={userInfo.name}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
