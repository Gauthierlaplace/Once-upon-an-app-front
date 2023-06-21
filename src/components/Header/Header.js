import './Header.scss';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../actions/user';

function Header() {
  const logged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);

  // La fonctionnalité logout (déconnexion) est accessible en header
  // Quand le joueur se déconnecte, ses données (token, nickname et id)
  // sont effacées à la fois dans le localStorage (instructions ci-dessous)
  // Et également dans le state (dispatch(logOut))
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('nickname', '');
    localStorage.setItem('id', '');
    dispatch(logOut());
  };

  return (
    // Todo retirer les NavLinks quand nous n'en aurons plus besoin
    <div className="Header">
      <NavLink className="Header-Accueil" to="/">
        Accueil
      </NavLink>

      <img className="Header-logo" src="https://image.noelshack.com/fichiers/2023/25/2/1687256285-testlogo3.png" alt="Logo de l'application web : Once upon an app" />

      <NavLink className="Header-Jeu" to="/game">
        Jeu
      </NavLink>

      {/* La div suivante ne s'affiche que quand logged vaut true */}
      {/* Le joueur peut cliquer pour se déconnecter (logged ==> false) */}

      {logged && (
        <div className="Header-Account">
          <nav>
            <ul>
              <li>
                Hello {nickname}
                <ul>
                  <li>
                    <NavLink to="/MyAccount">Mon Compte</NavLink>
                  </li>

                  <li onClick={() => handleLogOut()}>
                    Déconnexion
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )}

    </div>
  );
}

export default Header;
