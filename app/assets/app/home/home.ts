import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
//import { ROUTER_DIRECTIVES, Router, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';

import { Location, RouteConfig, RouterLink, Router, RouterOutlet } from 'angular2/router';


//let template = require('./home.html');

@Component({
    selector: 'home'
})
@View({
    directives: [RouterOutlet, RouterLink],
    templateUrl: "assets/app/home/home.html"

    //templateUrl: './home.html'
})
export class Home {
    constructor(public router: Router) {

    }
    goToHome2() {
        this.router.parent.navigateByUrl('/home2');
    }

}