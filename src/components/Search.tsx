import { KeyboardEvent, useState } from "react";
import "../styles/components/search.scss";

type SearchProps = {
  findUser: (username: string) => Promise<void>;
};

const Search = ({ findUser }: SearchProps) => {
  const [username, setUserName] = useState("");

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      findUser(username);
    }
  };

  return (
    <div className="search-body">
      <h3>Busque por um usuário:</h3>
      <div className="input-wrapper">
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyboardEvent}
        />
        <button onClick={() => findUser(username)}>O</button>
      </div>
    </div>
  );
};

export default Search;
