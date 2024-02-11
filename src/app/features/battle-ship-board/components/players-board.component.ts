import {Component, Input} from "@angular/core";
import {PlayerBoard} from "../../../models/player-board";
import {Position} from "../../../models/position";


@Component({
  selector: 'opponents-board',
  templateUrl: './opponents-board.component.html'
})
export class OpponentsBoardComponent {

  @Input() board: PlayerBoard | undefined;
  title = 'BattleShip';

  constructor() {

  }

  displayValue(col: String, row: String): boolean {
    return <boolean>this.board?.getPosition(new Position(col, row))?.beenTargeted
  }


}
