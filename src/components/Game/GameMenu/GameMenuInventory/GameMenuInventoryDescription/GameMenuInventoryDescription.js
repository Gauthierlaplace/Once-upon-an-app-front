import { useDispatch, useSelector } from 'react-redux';
import './GameMenuInventoryDescription.scss';
import api from '../../../../../api/api';
import { setLoading, setPlayerAfterBattle } from '../../../../../actions/game';

function GameMenuInventoryDescription({ item }) {
  const dispatch = useDispatch();
  const path = `${process.env.REACT_APP_ASSETS_BASE}`;
  const handleClickOnUsable = (itemId) => {
    api.get(`/usable/${itemId}`)
      .then((response) => {
        dispatch(setLoading(true));

        const playerAPI = response.data.player;
        dispatch(setPlayerAfterBattle(
          playerAPI.health,
          playerAPI.maxHealth,
          playerAPI.defense,
          playerAPI.dexterity,
          playerAPI.intelligence,
          playerAPI.karma,
          playerAPI.strength,
          playerAPI.items
        ));
        console.log(playerAPI);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <div className="GameMenuInventoryDescription">
      <h2 className="GameMenuInventoryDescription-title">{item.name}</h2>
      <div className="GameMenuInventoryDescription-container">
        <img src={`${path}${item.picture.path}`} alt={item.name} className="GameMenuInventoryDescription-itemImage" />
        <ul className="GameMenuInventoryDescription-list">
          {item.defense !== null && (
            <li>
              Défense : {item.defense}
            </li>
          )}
          {item.strength !== null && (
            <li>
              Force : {item.strength}
            </li>
          )}
          {item.dexterity !== null && (
            <li>
              Dexterité : {item.dexterity}
            </li>
          )}
          {item.intelligence !== null && (
            <li>
              Intelligence : {item.intelligence}
            </li>
          )}
          {item.karma !== null && (
            <li>
              Karma : {item.karma}
            </li>
          )}
          {item.health !== null && (
            <li>
              Point de vie : {item.health}
            </li>
          )}
          {item.usable === true && (
            <button
              type="button"
              className="GameMenuInventoryDescription-useButton"
              onClick={() => {
                handleClickOnUsable(item.id);
              }}
            >
              Utiliser
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default GameMenuInventoryDescription;
