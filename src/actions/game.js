export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT';
export const SET_CURRENT_NPC = 'SET_CURRENT_NPC';
export const SET_CHOICES = 'SET_CHOICES';
export const SET_LAST_EVENT_ENDING = 'SET_LAST_EVENT_ENDING';
export const SET_HAS_NPC = 'SET_HAS_NPC';
export const SET_DIALOGUE_AND_EFFECTS = 'SET_DIALOGUE_AND_EFFECTS';
export const SET_EFFECT = 'SET_EFFECT';
export const SET_VISIBLE_NPC = 'SET_VISIBLE_NPC';
export const SET_VISIBLE_CHOICES = 'SET_VISIBLE_CHOICES';
export const SET_PROGRESS = 'SET_PROGRESS';
export const RESET_PROGRESS = 'RESET_PROGRESS';
export const SET_EVENT_PROGRESS_STATUS = 'SET_EVENT_PROGRESS_STATUS';
export const SET_HERO_STATUS = 'SET_HERO_STATUS';
export const SET_NPC_STATUS = 'SET_NPC_STATUS';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_PLAYER_AFTER_BATTLE = 'SET_PLAYER_AFTER_BATTLE';
export const SET_ANSWER_AND_DESCRIPTION_IN_LOG = 'SET_ANSWER_AND_DESCRIPTION_IN_LOG';
export const SET_VISIBLE_LOG_DIALOGUE = 'SET_VISIBLE_LOG_DIALOGUE';
export const SET_EFFECT_READ_BY_PLAYER = 'SET_EFFECT_READ_BY_PLAYER';
export const SET_LOADING = 'SET_LOADING';
export const SET_BATTLEMODE = 'SET_BATTLEMODE';
export const SET_ATTACKER = 'SET_ATTACKER';
export const SET_FIGHT_ID = 'SET_FIGHT_ID';
export const SET_LOOT = 'SET_LOOT';
export const SET_LOOT_NAME = 'SET_LOOT_NAME';
export const SET_INVENTORY = 'SET_INVENTORY';
export const SET_BATTLE_TURN = 'SET_BATTLE_TURN';
export const SET_TYPEWRITING = 'SET_TYPEWRITING';

// Pour afficher l'événement actuel, on a déjà besoin d'avoir ses infos (id, titre, image, etc)
export const setCurrentEvent = (currentEvent) => ({
  type: SET_CURRENT_EVENT,
  payload: currentEvent,
});

export const setCurrentNPC = (idNPC, nameNPC, descriptionNPC, pictureNPC, boolean) => ({
  type: SET_CURRENT_NPC,
  payload: {
    id: idNPC,
    name: nameNPC,
    description: descriptionNPC,
    picture: pictureNPC,
    isHostile: boolean
  },
});

export const setDialogueAndEffects = (
  dialogueSentence,
  [firstAnswer, secondAnswer]
) => ({
  type: SET_DIALOGUE_AND_EFFECTS,
  payload: {
    sentence: dialogueSentence,
    answers: [firstAnswer, secondAnswer]
  },
});

export const setChoices = (choicesArray) => ({
  type: SET_CHOICES,
  payload: {
    choices: choicesArray,
  },
});

export const setLastEventEnding = (ending) => ({
  type: SET_LAST_EVENT_ENDING,
  payload: ending,
});

export const setHasNPC = (boolean) => ({
  type: SET_HAS_NPC,
  payload: boolean,
});

export const setVisibleNPC = (boolean) => ({
  type: SET_VISIBLE_NPC,
  payload: boolean,
});

export const setVisibleChoices = (boolean) => ({
  type: SET_VISIBLE_CHOICES,
  payload: boolean,
});

export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  payload: progress,
});

export const resetProgress = () => ({
  type: RESET_PROGRESS,
});

export const setEventProgressStatus = (newStatus) => ({
  type: SET_EVENT_PROGRESS_STATUS,
  payload: newStatus,
});

export const setHeroStatus = (newhealth) => ({
  type: SET_HERO_STATUS,
  payload:
  {
    health: newhealth,
  },
});

export const setNPCStatus = (health, maxHealth) => ({
  type: SET_NPC_STATUS,
  payload:
  {
    health: health,
    maxHealth: maxHealth,
  },
});

export const setPlayer = (
  id,
  name,
  picture,
  health,
  maxHealth,
  defense,
  dexterity,
  intelligence,
  karma,
  strength,
  item,
  progress,
) => ({
  type: SET_PLAYER,
  payload:
  {
    id: id,
    name: name,
    picture: picture,
    health: health,
    maxHealth: maxHealth,
    defense: defense,
    dexterity: dexterity,
    intelligence: intelligence,
    karma: karma,
    strength: strength,
    item: item,
    progress: progress,
  },
});

export const setPlayerAfterBattle = (
  health,
  maxHealth,
  defense,
  dexterity,
  intelligence,
  karma,
  strength,
  item
) => ({
  type: SET_PLAYER_AFTER_BATTLE,
  payload:
  {
    health: health,
    maxHealth: maxHealth,
    defense: defense,
    dexterity: dexterity,
    intelligence: intelligence,
    karma: karma,
    strength: strength,
    item: item,
  },
});

export const setAnswerAndDescriptionInLog = (sentence, answer, effectDescription) => ({
  type: SET_ANSWER_AND_DESCRIPTION_IN_LOG,
  payload:
  {
    sentence: sentence,
    answer: answer,
    effectDescription: effectDescription
  },
});

export const setVisibleLogDialogue = (boolean) => ({
  type: SET_VISIBLE_LOG_DIALOGUE,
  payload: boolean,
});

export const setEffectReadByPlayer = (boolean) => ({
  type: SET_EFFECT_READ_BY_PLAYER,
  payload: boolean,
});

export const setLoading = (boolean) => ({
  type: SET_LOADING,
  payload: boolean,
});

export const setBattleMode = (boolean) => ({
  type: SET_BATTLEMODE,
  payload: boolean,
});

export const setAttacker = (attacker) => ({
  type: SET_ATTACKER,
  payload: attacker,
});

export const setFightID = (fightID) => ({
  type: SET_FIGHT_ID,
  payload: fightID,
});

export const setLoot = (lootID) => ({
  type: SET_LOOT,
  payload: lootID,
});

export const setLootName = (lootName) => ({
  type: SET_LOOT_NAME,
  payload: lootName,
});

export const setInventory = (items) => ({
  type: SET_INVENTORY,
  payload: { items },
});

export const setBattleTurn = (hit, damage, damageDice1, damageDice2) => ({
  type: SET_BATTLE_TURN,
  payload:
  {
    hit: hit,
    damage: damage,
    damageDice1: damageDice1,
    damageDice2: damageDice2
  },
});

export const setTypewriting = (identifier, bool) => ({
  type: SET_TYPEWRITING,
  payload: {
    identifier: identifier,
    bool: bool,
  },
});
