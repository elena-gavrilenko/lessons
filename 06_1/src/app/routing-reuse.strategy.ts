// если мы хотим менять маршрут
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class ProjectReuseStrategy implements RouteReuseStrategy {
    
    public shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
    // возможность сохранения
    public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
    public shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }
    // переиспользовать маршрут(обновить и перерисовать)
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return (curr.component !== future.component) || future.data["reuse"];
    }
}