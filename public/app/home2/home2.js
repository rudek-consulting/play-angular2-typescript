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
var Home2 = (function () {
    function Home2() {
    }
    Home2 = __decorate([
        angular2_1.Component({
            selector: 'home2'
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            templateUrl: "assets/app/home2/home2.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Home2);
    return Home2;
})();
exports.Home2 = Home2;
//# sourceMappingURL=home2.js.map