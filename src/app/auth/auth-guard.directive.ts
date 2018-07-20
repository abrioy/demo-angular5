import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs/Subscription";

@Directive({
  selector: '[authGuard]'
})
export class AuthGuardDirective implements OnInit, OnDestroy {
  @Input('authGuard') accessRight;
  private observable: Subscription;

  constructor(private authService: AuthService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.observable = this.authService.isCurrentAuthorized(this.accessRight).subscribe(isAuthorized => {
      if (isAuthorized) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy() {
    this.observable.unsubscribe()
  }
}
