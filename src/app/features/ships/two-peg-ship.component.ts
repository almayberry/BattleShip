import {Component} from "@angular/core";
import {CdkDrag} from "@angular/cdk/drag-drop";



@Component({
  selector: 'two-peg-ship',
  templateUrl: './two-peg-ship.component.html',
  standalone: true,
  imports: [CdkDrag]
})
export class TwoPegShipComponent {

  constructor() {

  }



}
