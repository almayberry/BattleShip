import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeaturesModule} from "./features/features.module";
import {GameService} from "./service/game.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeaturesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'BattleShip';

  ngOnInit() {
    new GameService()
  }

}
