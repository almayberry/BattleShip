import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BattleShipBoardModule} from "./features/battle-ship-board.module";
import {Player} from "./models/player";
import {ColLetters, PlayerBoard} from "./models/player-board";
import {TwoPegShipComponent} from "./features/ships/two-peg-ship.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BattleShipBoardModule, TwoPegShipComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BattleShip';
  playerOneBoard: PlayerBoard = new PlayerBoard();
  playerTwoBoard: PlayerBoard = new PlayerBoard();
  playerOne: Player = new Player(true, this.playerOneBoard, this.playerTwoBoard)
  playerTwo: Player = new Player(true, this.playerTwoBoard, this.playerOneBoard)

  @ViewChild("playersBoard") playersBoard: any;

  constructor() {

  }

  randomlyPlaceAllShips() {
    this.playerOneBoard.startingBoard();
    // ship sizes 5, 4, 4, 3, 2
    this.randomShipPlacement(5, "red")
    this.randomShipPlacement(4, "blue")
    this.randomShipPlacement(4, "green")
    this.randomShipPlacement(3, "yellow")
    this.randomShipPlacement(2, "orange")

    this.playersBoard.detectChanges()
  }

  randomShipPlacement(size: number, color: string) {
    let shipPlaced = false;
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
      if (this.isShipPlacementValid(isHorizontal, randomCol, randomRow, size)) {
        shipPlaced = true;
        this.placeShip(isHorizontal, randomCol, randomRow, size, color)
      }
    }

  }

  private isShipPlacementValid(isHorizontal: boolean, randomCol: number, randomRow: number, size: number): boolean {
    let isValid = true;
    let newBoard = this.playerOneBoard // issue is here its still changing playerOneBoard
    if (isHorizontal) {
      for (let i = 0; i < size; i++) {
        let testing = newBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())!!.hasShip
     //   newBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())!!.setShip(true)
     //   newBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())!!.setBackgroundColor(color)
        isValid = !testing
        console.log("*************** " + isValid)
        if (!isValid) {
          return isValid
        }
      }
    } else {
      for (let i = 0; i < size; i++) {
        let test = newBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())!!.hasShip
       // newBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())!!.setShip(true)
       // newBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())!!.setBackgroundColor(color)
        isValid = !test
        console.log("*************** " + isValid)
        if (!isValid) {
          return isValid
        }
      }
    }
    this.playerOneBoard = newBoard
    return isValid
  }

  private placeShip(isHorizontal: boolean, randomCol: number, randomRow: number, size: number, color: string) {
    if (isHorizontal) {
      for (let i = 0; i < size; i++) {
        this.playerOneBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())!!.setShip(true)
        this.playerOneBoard.getboardSpot(ColLetters[randomCol + i] + randomRow.toString())!!.setBackgroundColor(color)
      }
    } else {
      for (let i = 0; i < size; i++) {
        this.playerOneBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())!!.setShip(true)
        this.playerOneBoard.getboardSpot(ColLetters[randomCol] + (randomRow + i).toString())!!.setBackgroundColor(color)

      }
    }
  }

}
