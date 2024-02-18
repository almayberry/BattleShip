import {Component} from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent, MatDialogActions, MatDialogRef,
} from '@angular/material/dialog';
import {GameSetupComponent} from "../game-setup/game-setup.component";

@Component({
  selector: 'ship-placement-error-modal',
  templateUrl: 'ship-placement-error-modal.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions],
})
export class ShipPlacementErrorModalComponent {

  constructor(
    public dialogRef: MatDialogRef<GameSetupComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
