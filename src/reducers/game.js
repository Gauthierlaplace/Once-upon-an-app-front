// import heroData from './../datas/HeroData';

import {
  SET_CURRENT_EVENT,
  SET_CHOICES,
  SET_LAST_EVENT_ENDING,
  SET_HAS_NPC,
  SET_VISIBLE_NPC,
  SET_DIALOGUE_AND_EFFECTS,
  SET_VISIBLE_CHOICES,
  SET_CURRENT_NPC,
  SET_PROGRESS,
  RESET_PROGRESS,
  SET_EVENT_PROGRESS_STATUS,
  SET_PLAYER,
  SET_PLAYER_AFTER_BATTLE,
  SET_HERO_STATUS,
  SET_NPC_STATUS,
  SET_ANSWER_AND_DESCRIPTION_IN_LOG,
  SET_VISIBLE_LOG_DIALOGUE,
  SET_EFFECT_READ_BY_PLAYER,
  SET_LOADING,
  SET_BATTLEMODE,
  SET_ATTACKER,
  SET_FIGHT_ID,
  SET_LOOT,
  SET_LOOT_NAME,
  SET_INVENTORY,
  SET_BATTLE_TURN,
  SET_TYPEWRITING,
} from '../actions/game';

export const initialState = {
  player:
  {
    id: 0,
    name: '',
    picture: '',
    health: 0,
    maxHealth: 0,
    defense: 0,
    dexterity: 0,
    intelligence: 0,
    karma: 0,
    strength: 0,
    item: [],
    progress: 0,
  },

  progress: 0,
  maxProgress: 10,

  // Peut prendre les valeurs 'normal', 'beforeLast',
  // 'beforeBoss', 'beforeBiomeEnd', 'beforeGameEnd'
  // 'gameEnd"
  eventProgressStatus: 'normal',

  currentEvent:
  {
    id: '',
    title: '',
    description: '',
    picture: '',
    event_type_code: '',
  },

  lastEventEnding: '',

  currentNPC:
  {
    id: 0,
    name: '',
    description: '',
    picture: '',
    isHostile: false,
    npcHealth: 0,
    npcMaxHealth: 0,
  },

  dialogue:
  {
    sentence: '',
    answers: ['Answer 0', 'Answer 1'],
  },

  eventDialogueToDisplay:
  {
    sentence: '',
    answer: '',
    effectDescription: ''
  },

  choices:
  ['Choix 0', 'Choix 1'],

  hasNPC: false,
  visibleNPC: false,
  visibleChoices: false,
  visibleLogDialogue: false,
  effectReadByPlayer: false,

  loading: false,
  battleMode: false,
  attacker: '',
  fightID: 0,
  loot: null,
  lootName: null,

  battle:
  {
    hit: null,
    damage: 0,
    damageDice1: 0,
    damageDice2: 0
  },

  typewriting:
  {
    eventDescription: false,
    npcDescription: false,
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CURRENT_EVENT:
    return {
      ...state,
      currentEvent: action.payload,
    };

  case SET_CURRENT_NPC:
    return {
      ...state,
      currentNPC: {
        ...state.currentNPC,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        picture: action.payload.picture,
        isHostile: action.payload.isHostile,
      }
    };

  case SET_CHOICES:
    return {
      ...state,
      choices: action.payload.choices
    };

  case SET_LAST_EVENT_ENDING:
    return {
      ...state,
      lastEventEnding: action.payload
    };

  case SET_HAS_NPC:
    return {
      ...state,
      hasNPC: action.payload,
    };

  case SET_VISIBLE_NPC:
    return {
      ...state,
      visibleNPC: action.payload,
    };

  case SET_VISIBLE_CHOICES:
    return {
      ...state,
      visibleChoices: action.payload,
    };

  case SET_PROGRESS:
    return {
      ...state,
      progress: action.payload,
    };

  case RESET_PROGRESS:
    return {
      ...state,
      progress: 0,
    };

  case SET_EVENT_PROGRESS_STATUS:
    return {
      ...state,
      eventProgressStatus: action.payload,
    };

  case SET_DIALOGUE_AND_EFFECTS:
    return {
      ...state,
      dialogue: {
        ...state.dialogue,
        sentence: action.payload.sentence,
        answers: action.payload.answers
      }
    };

  case SET_HERO_STATUS:
    return {
      ...state,
      player: {
        ...state.player,
        health: action.payload.health,
      }
    };

  case SET_NPC_STATUS:
    return {
      ...state,
      currentNPC: {
        ...state.currentNPC,
        npcHealth: action.payload.health,
        npcMaxHealth: action.payload.maxHealth,
      }
    };

  case SET_PLAYER:
    return {
      ...state,
      player: {
        ...state.player,
        id: action.payload.id,
        name: action.payload.name,
        picture: action.payload.picture,
        health: action.payload.health,
        maxHealth: action.payload.maxHealth,
        defense: action.payload.defense,
        dexterity: action.payload.dexterity,
        intelligence: action.payload.intelligence,
        karma: action.payload.karma,
        strength: action.payload.strength,
        item: action.payload.item,
        progress: action.payload.progress
      }
    };

  case SET_PLAYER_AFTER_BATTLE:
    return {
      ...state,
      player: {
        ...state.player,
        health: action.payload.health,
        maxHealth: action.payload.maxHealth,
        defense: action.payload.defense,
        dexterity: action.payload.dexterity,
        intelligence: action.payload.intelligence,
        karma: action.payload.karma,
        strength: action.payload.strength,
        item: action.payload.item,
      }
    };

  case SET_ANSWER_AND_DESCRIPTION_IN_LOG:
    return {
      ...state,
      eventDialogueToDisplay: {
        ...state.eventDialogueToDisplay,
        sentence: action.payload.sentence,
        answer: action.payload.answer,
        effectDescription: action.payload.effectDescription
      }
    };

  case SET_VISIBLE_LOG_DIALOGUE:
    return {
      ...state,
      visibleLogDialogue: action.payload,
    };

  case SET_EFFECT_READ_BY_PLAYER:
    return {
      ...state,
      effectReadByPlayer: action.payload,
    };

  case SET_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  case SET_BATTLEMODE:
    return {
      ...state,
      battleMode: action.payload,
    };

  case SET_ATTACKER:
    return {
      ...state,
      attacker: action.payload,
    };

  case SET_FIGHT_ID:
    return {
      ...state,
      fightID: action.payload,
    };

  case SET_LOOT:
    return {
      ...state,
      loot: action.payload,
    };

  case SET_LOOT_NAME:
    return {
      ...state,
      lootName: action.payload,
    };

  case SET_INVENTORY:
    return {
      ...state,
      player: {
        ...state,
        item: action.payload.item,
      }
    };

  case SET_BATTLE_TURN:
    return {
      ...state,
      battle: {
        ...state.battle,
        hit: action.payload.hit,
        damage: action.payload.damage,
        damageDice1: action.payload.damageDice1,
        damageDice2: action.payload.damageDice2,
      }
    };

  case SET_TYPEWRITING:
    return {
      ...state,
      typewriting: {
        ...state.typewriting,
        [action.payload.identifier]: action.payload.bool,
      }
    };

  default:
    return state;
  }
};

export default reducer;
