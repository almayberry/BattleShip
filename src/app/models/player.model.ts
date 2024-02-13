import {PlayerBoardModel} from "./player-board.model";

export class PlayerModel {
  userId: string;
  isPlayerOne: boolean;
  playerBoard: PlayerBoardModel;
  gameId : string;

  // would be connected to a user that would have profile info, email address, username, etc...

  constructor(userId: string, isPlayerOne: boolean, playerBoard: PlayerBoardModel, gameId: string) {
    this.userId = userId
    this.isPlayerOne = isPlayerOne;
    this.playerBoard = playerBoard;
    this.gameId = gameId;
  }

}
