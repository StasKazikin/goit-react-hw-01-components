import user from './data/user.json';
import Profile from './components/Profile';
import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistics';
import friends from './data/friends.json';
import FriendList from './components/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
