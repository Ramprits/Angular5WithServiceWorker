import { Component } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "o-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  loading: boolean;
  constructor(private router: Router, public title: Title) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
    this.title.setTitle("Home");
  }
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
