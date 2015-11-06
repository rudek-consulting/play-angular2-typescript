import { View, Component, CORE_DIRECTIVES } from 'angular2/angular2';
import { Location, RouteConfig, RouterLink, Router, RouterOutlet } from 'angular2/router';

//import { LoggedInRouterOutlet } from './LoggedInOutlet';
import { Home } from '../home/home';

@Component({
    selector: 'auth-app'
})
@View({
    templateUrl: "assets/javascripts/app/app.html",
    //template: template,
    directives: [RouterOutlet]
    //,
    //directives: [ CORE_DIRECTIVES ]
})
@RouteConfig([
    { path: '/', component: Home }
    //{ path: '/',    redirectTo: '/home' },
    //{ path: '/home',    as: 'Home',     component: Home}
    //,
    //{ path: '/home',    as: 'Home',     component: Home}
])
export class App {
    constructor(public router: Router) {
    }
}

