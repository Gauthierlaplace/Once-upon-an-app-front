import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './GameLog.scss';

import {
  setVisibleNPC,
  setVisibleChoices,
  setTypewriting,
} from '../../../actions/game';

import GameLogChoices from './GameLogChoices/GameLogChoices';
import GameLogEventDescription from './GameLogEventDescription/GameLogEventDescription';
import GameLogNPC from './GameLogNPC/GameLogNPC';
import GameLogDialogue from './GameLogDialogue/GameLogDialogue';
import GameLogRestart from './GameLogRestart/GameLogRestart';

function GameLog({
  eventDescription,
  npcName,
  npcDescription,
}) {
  const hasNPC = useSelector((state) => state.game.hasNPC);
  const visibleNPC = useSelector((state) => state.game.visibleNPC);
  const visibleChoices = useSelector((state) => state.game.visibleChoices);
  const visibleLogDialogue = useSelector((state) => state.game.visibleLogDialogue);
  const answerAndDescriptionInLog = useSelector((state) => state.game.eventDialogueToDisplay);
  const eventProgressStatus = useSelector((state) => state.game.eventProgressStatus);
  const currentEventId = useSelector((state) => state.game.currentEvent.id);
  const isBattleMode = useSelector((state) => state.game.battleMode);
  const eventType = useSelector((state) => state.game.currentEvent.eventType);
  const progress = useSelector((state) => state.game.progress);
  const effectReadByPlayer = useSelector((state) => state.game.effectReadByPlayer);

  const typewriting = useSelector((state) => state.game.typewriting.eventDescription);
  const identifier = 'eventDescription';

  const [visibleButtonFollowToShowNPC, setVisibleButtonFollowToShowNPC] = useState(true);
  const [visibleButtonFollowToShowChoices, setVisibleButtonFollowToShowChoices] = useState(true);
  const [visibleButtonFollowToShowDialogue, setVisibleButtonFollowToShowDialogue] = useState(true);

  const dispatch = useDispatch();

  return (
    <div className="GameLog">
      <div className="GameLog-Scroll">
        {/* La description est toujours affichée, quoi qu'il arrive */}
        <GameLogEventDescription description={eventDescription} />

        {typewriting && (
          <button
            type="button"
            className="skipButton"
            onClick={() => dispatch(setTypewriting(identifier, false))}
          >
            Accélérer
          </button>
        )}

        {/* Le 1er bouton "Suite" s'affiche uniquement s'il y a un NPC dans la scène */}
        {(hasNPC && visibleButtonFollowToShowNPC && !visibleChoices && !typewriting) && (
          <button
            type="button"
            className="GameLog-next-step-npc-button"
            onClick={() => {
              dispatch(setVisibleNPC(true));
              setVisibleButtonFollowToShowNPC(false);
            }}
          >
            Suite
          </button>
        )}

        {/* Le NPC s'affiche s'il y a un NPC et s'il est visible (clic sur le bouton précédent) */}
        {(hasNPC && visibleNPC && !typewriting && (eventProgressStatus !== 'gameEnd')) && (
          <GameLogNPC
            npcName={npcName}
            npcDescription={npcDescription}
            visibleButtonFollowToShowDialogue={visibleButtonFollowToShowDialogue}
            setVisibleButtonFollowToShowDialogue={setVisibleButtonFollowToShowDialogue}
          />
        )}


        {(hasNPC && visibleLogDialogue) && (
          <GameLogDialogue
            sentence={answerAndDescriptionInLog.sentence}
            answer={answerAndDescriptionInLog.answer}
            effectDescription={answerAndDescriptionInLog.effectDescription}
          />
        )}

        {/* Le bouton "Suite-choix" ne s'affiche pas pareil avec ou sans NPC  */}
        {/* Dans le cas où il n'y a pas de NPC, on veut qu'il s'affiche dès le début */}
        {/* S'il y a un NPC, on veut qu'il s'affiche quand on a intéragi avec le NPC */}

        {(!hasNPC
          && visibleButtonFollowToShowChoices
          && (typewriting === false)
          && (progress !== 11)
          && (eventProgressStatus !== 'death')
        ) && (
          <button
            type="button"
            className="GameLog-next-step-button"
            onClick={() => {
              dispatch(setVisibleChoices(true));
              setVisibleButtonFollowToShowChoices(false);
            }}
          >
            Suite
          </button>
        )}

        {/* Conditions pour afficher les choix de fin d'évènements */}
        {((visibleChoices && !isBattleMode && effectReadByPlayer) || (visibleChoices && eventType === 'Départ') || (visibleChoices && eventType === 'Rencontre') || (visibleChoices && eventType === 'Fin de Biome') || (visibleChoices && eventType === 'Repos') || (visibleChoices && eventType === 'Endgame') || (visibleChoices && eventType === 'Death') || (visibleChoices && eventType === 'combat')) && (
          <GameLogChoices
            setVisibleButtonFollowToShowNPC={setVisibleButtonFollowToShowNPC}
            setVisibleButtonFollowToShowDialogue={setVisibleButtonFollowToShowDialogue}
            setVisibleButtonFollowToShowChoices={setVisibleButtonFollowToShowChoices}
          />
        )}

        {/* <div ref={endOfScrollableZoneRef} className="end-of-scrollable-zone" /> */}

      </div>

      {!typewriting && (eventType === 'Endgame' || eventType === 'Death') && (
        <GameLogRestart />
      )}

    </div>
  );
}

export default GameLog;
