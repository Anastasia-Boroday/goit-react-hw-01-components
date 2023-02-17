import Profile from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { ContainerApp } from "./App.styled";
import user from "./JsonDocument/user.json";
import data from "./JsonDocument/data.json";
import friends from "./JsonDocument/friends.json";
import transactions from "./JsonDocument/transactions.json";

export default function App() {
  return (
    <ContainerApp>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
  </ContainerApp>)
}

