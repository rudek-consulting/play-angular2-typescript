import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { Router, RouterOutlet, RouterLink } from 'angular2/router';

@Component({
    selector: 'home2'
})
@View({
    directives: [RouterOutlet, RouterLink],
    templateUrl: "assets/app/home2/home2.html"
})
export class Home2 {

}