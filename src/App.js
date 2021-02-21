import user from './user.json';
import Profile from './components/Profile';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics';

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
    </>
  );
}

export default App;
