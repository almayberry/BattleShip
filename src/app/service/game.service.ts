import {Injectable} from "@angular/core";
import {ColLetters, ShipType} from "../models/player-board.model";
import {GameStateModel} from "../models/game-state.model";

@Injectable()
export class GameService {

  public gameState: GameStateModel

  constructor() {
    this.gameState = new GameStateModel("userOne")
  }

  placeCurrentShip(col: number, row: number) {
    let size = this.getShipSize(this.gameState.currentShip)

    if (this.isShipPlacementValid(this.gameState.isHorizontal, col, row, this.gameState.currentShip, size)) {
      this.gameState.activePlayer.playerBoard.removeAllByValue(this.gameState.currentShip)
      this.placeShip(this.gameState.isHorizontal, col, row, this.gameState.currentShip, size)
    } else {
      // Display error (ship does not fit here)
    }
  }

  randomlyPlaceAllShips() {
    this.gameState.activePlayer.playerBoard.startingBoard();
    // ship sizes 5, 4, 4, 3, 2
    this.randomShipPlacement(ShipType.AIRCRAFT_CARRIER)
    this.randomShipPlacement(ShipType.BATTLESHIP)
    this.randomShipPlacement(ShipType.DESTROYER)
    this.randomShipPlacement(ShipType.SUBMARINE)
    this.randomShipPlacement(ShipType.CRUISER)
  }

  randomShipPlacement(shipType: ShipType) {
    let shipPlaced = false;
    let size = this.getShipSize(shipType)
    while (!shipPlaced) {
      let isHorizontal = Math.floor(Math.random() * 2) == 1 ? true : false
      let randomCol: number;
      let randomRow: number;

      if (isHorizontal) {
        randomCol = Math.floor(Math.random() * (10 - size + 1))
        randomRow = Math.floor(Math.random() * 10)
      } else {
        randomCol = Math.floor(Math.random() * 10)
        randomRow = Math.floor(Math.random() * (10 - size + 1))
      }
      if (this.isShipPlacementValid(isHorizontal, randomCol, randomRow, shipType, size)) {
        shipPlaced = true;
        this.placeShip(isHorizontal, randomCol, randomRow, shipType, size)
      }
    }

  }

  private isShipPlacementValid(isHorizontal: boolean, randomCol: number, randomRow: number, shipType: ShipType, size: number): boolean {
    let isValid = true;
    if (isHorizontal) {
      for (let i = 0; i < size; i++) {
        let spot = this.gameState.activePlayer.playerBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())
        isValid = spot!!.shipType == ShipType.NONE || spot!!.shipType == shipType
        if (!isValid) {
          return isValid
        }
      }
    } else {
      for (let i = 0; i < size; i++) {
        let spot = this.gameState.activePlayer.playerBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())
        isValid = (spot!!.shipType == ShipType.NONE || spot!!.shipType == shipType)
        if (!isValid) {
          return isValid
        }
      }
    }
    return isValid
  }

  private placeShip(isHorizontal: boolean, randomCol: number, randomRow: number, shipType: ShipType, size: number) {
    if (isHorizontal) {
      for (let i = 0; i < size; i++) {
        this.gameState.activePlayer.playerBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())!!.setShip(shipType)
      }
    } else {
      for (let i = 0; i < size; i++) {
        this.gameState.activePlayer.playerBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())!!.setShip(shipType)
      }
    }
  }

  private getShipSize(shipType: ShipType): number {
    switch (shipType) {
      case ShipType.AIRCRAFT_CARRIER: {
        return 5
      }
      case ShipType.BATTLESHIP: {
        return 4
      }
      case ShipType.DESTROYER: {
        return 4
      }
      case ShipType.SUBMARINE: {
        return 3
      }
      case ShipType.CRUISER: {
        return 2
      }
      case ShipType.NONE:
      default: {
        return 0
      }
    }
  }

}
