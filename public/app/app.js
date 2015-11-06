var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
//declare function require(name: string): any;
//let template = require('./app.html');
//import { LoggedInRouterOutlet } from './LoggedInOutlet';
var home_1 = require('./home/home');
var home2_1 = require('./home2/home2');
var App = (function () {
    function App(router) {
        this.router = router;
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'auth-app'
        }),
        angular2_1.View({
            templateUrl: "assets/app/app.html",
            //template: template,
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            //{ path: '/', component: Home }
            { path: '/', redirectTo: '/home' },
            { path: '/home', as: 'Home', component: home_1.Home },
            { path: '/home2', as: 'Home2', component: home2_1.Home2 }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map