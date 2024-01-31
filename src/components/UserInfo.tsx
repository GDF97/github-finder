import "../styles/components/userinfo.scss";
import { UserProps } from "../types/User";

const UserInfo = ({
  avatar_url,
  login,
  location,
  followers,
  following,
  public_repos,
  html_url,
}: UserProps) => {
  return (
    <div className="user">
      <img src={avatar_url} alt="" className="user-image" />
      <h2 className="user-name">{login}</h2>
      {location && <p className="user-location">{location}</p>}
      <div className="user-stats">
        <div>
          <p>Seguidores</p>
          <div className="numbers">{followers}</div>
        </div>
        <div>
          <p>Seguindo</p>
          <div className="numbers">{following}</div>
        </div>
        <div>
          <p>Repositórios</p>
          <div className="numbers">{public_repos}</div>
        </div>
        <div>
          <p>link</p>
          <a href={html_url} target="_blank">
            {login}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
