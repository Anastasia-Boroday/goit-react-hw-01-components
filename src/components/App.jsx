import Profile from "./Profile/Profile";
import user from "./JsonDocument/user.json";
import { ContainerApp } from "./App.styled";

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
  </ContainerApp>)
}

