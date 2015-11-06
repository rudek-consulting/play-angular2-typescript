import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { Router } from 'angular2/router';

//let template = require('./home.html');

@Component({
    selector: 'home'
})
@View({
    directives: [CORE_DIRECTIVES],
    templateUrl: "assets/app/home/home.html"

    //templateUrl: './home.html'
})
export class Home {

}