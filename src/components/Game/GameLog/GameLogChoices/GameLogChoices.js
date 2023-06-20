/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux';
import './GameLogChoices.scss';
import axios from 'axios';

import {
  setCurrentEvent,
  setChoices,
} from '../../../../actions/game';

function GameLogChoices() {
  const token = useSelector((state) => state.user.token);
  const choices = useSelector((state) => state.game.choices);

  // Je vais chercher la base de l'API dans le fichier .env
  const REACT_APP_API_BASE = `${process.env.REACT_APP_API_BASE}`;

  const dispatch = useDispatch();

  // Le clic sur un des deux choix proposés renvoie vers l'événement suivant
  // (route api/event/roll/id-du-prochain-event)
  const handleClickOnNextEvent = (nextEventId) => {
    axios.get(`${REACT_APP_API_BASE}event/roll/${nextEventId}`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then((response) => {
        const eventAPI = response.data.currentEvent;
        dispatch(setCurrentEvent(
          eventAPI.id,
          eventAPI.title,
          eventAPI.description,
          eventAPI.picture,
        ));

        // La concaténation du current-ending + next-opening est gérée ici :
        const firstChoice = {
          nextEventId: response.data.choices[0].nextEventId,
          content: `${response.data.choices[0].ending} ${response.data.choices[0].nextEventOpening}`,
        };
        const secondChoice = {
          nextEventId: response.data.choices[1].nextEventId,
          content: `${response.data.choices[1].ending} ${response.data.choices[1].nextEventOpening}`,
        };

        dispatch(setChoices(firstChoice, secondChoice));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="GameLogChoices">
      <h2 className="GameLogChoices-content">A vous de jouer :</h2>
      <div>
        {choices.map((choice) => (
          <button
            type="button"
            className="GameLogChoices-button"
            key={choice.nextEventId}
            onClick={() => handleClickOnNextEvent(choice.nextEventId)}
          >
            <p>
              {choice.content}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameLogChoices;
