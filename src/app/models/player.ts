import {PlayerBoard} from "./player-board";

export class Player {
  isPlayerOne: boolean;
  playerBoard: PlayerBoard;
  opponentBoard: PlayerBoard;

  // would be connected to a user that would have profile info, email address, username, etc...

  constructor(isPlayerOne: boolean, playerBoard: PlayerBoard, opponentBoard: PlayerBoard) {
    this.isPlayerOne = isPlayerOne;
    this.playerBoard = playerBoard;
    this.opponentBoard = opponentBoard;
  }

}
