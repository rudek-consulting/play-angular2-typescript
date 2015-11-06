import { View, Component, CORE_DIRECTIVES } from 'angular2/angular2';
import { Location, RouteConfig, RouterLink, Router, RouterOutlet } from 'angular2/router';

//declare function require(name: string): any;
//let template = require('./app.html');

//import { LoggedInRouterOutlet } from './LoggedInOutlet';
import { Home } from './home/home';
import { Home2 } from './home2/home2';

@Component({
    selector: 'auth-app'
})
@View({
    templateUrl: "assets/app/app.html",
    //template: template,
    directives: [RouterOutlet, RouterLink]
    //,
    //directives: [ CORE_DIRECTIVES ]
})
@RouteConfig([
    //{ path: '/', component: Home }
    { path: '/',    redirectTo: '/home' },
    { path: '/home',    as: 'Home',     component: Home},
    { path: '/home2',    as: 'Home2',     component: Home2}
    //,
    //{ path: '/home',    as: 'Home',     component: Home}
])
export class App {
    constructor(public router: Router) {
    }
}

