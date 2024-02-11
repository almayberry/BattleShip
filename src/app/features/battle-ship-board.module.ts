import {NgModule} from "@angular/core";
import {OpponentsBoardComponent} from "./battle-ship-board/components/opponents-board.component";
import {PlayersBoardComponent} from "./battle-ship-board/components/players-board.component";
import {TwoPegShipComponent} from "./ships/two-peg-ship.component";
import {NgStyle} from "@angular/common";

@NgModule({
    exports: [
        OpponentsBoardComponent,
        PlayersBoardComponent
    ],
    imports: [
        NgStyle
    ],
    declarations: [
        OpponentsBoardComponent,
        PlayersBoardComponent
    ]
})

export class BattleShipBoardModule {}
