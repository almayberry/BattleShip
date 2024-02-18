import {NgModule} from "@angular/core";
import {GameService} from "./game.service";
import {UserService} from "./userService";

@NgModule({
  providers: [
    GameService,
    UserService
  ]
})

export class FeaturesModule {}
