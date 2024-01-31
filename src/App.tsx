import { useState } from "react";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import "./styles/pages/app.scss";
import { UserProps } from "./types/User";
import URL_API from "./constants/URL_API";

const App = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const findUser = async (username: string) => {
    setUser(null);
    setError(false);

    const response = await fetch(`${URL_API}/${username}`);

    const data = await response.json();

    if (response.status == 404) {
      setError(true);
      return;
    }

    const {
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
      html_url,
    } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
      html_url,
    };

    setUser(userData);
  };

  return (
    <div className="container">
      <h1>GitHub Finder</h1>
      <Search findUser={findUser} />
      {/* {!error ? <UserInfo /> : <p>Usuário não encontrado</p>} */}
      {user && <UserInfo {...user} />}
      {error && <p>Usuário não encontrado</p>}
    </div>
  );
};

export default App;
