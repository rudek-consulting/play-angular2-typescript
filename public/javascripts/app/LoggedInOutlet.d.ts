import { ElementRef, DynamicComponentLoader } from 'angular2/angular2';
import { Router, RouterOutlet, ComponentInstruction } from 'angular2/router';
export declare class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter;
    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, nameAttr: string);
    activate(instruction: ComponentInstruction): Promise<any>;
}
