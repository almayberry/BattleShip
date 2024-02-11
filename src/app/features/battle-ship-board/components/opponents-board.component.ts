import {Component, Input} from "@angular/core";
import {PlayerBoard} from "../../../models/player-board";


@Component({
  selector: 'opponents-board',
  templateUrl: './opponents-board.component.html'
})
export class OpponentsBoardComponent {

  @Input() board: PlayerBoard | undefined;
  title = 'BattleShip';

  constructor() {

  }


}
