import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth = false;
  subscription: Subscription;

  @Output()
  closeSidenav: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.authChange.subscribe(authChange => {
      this.isAuth = authChange;
    });
  }

  onClose() {
    this.closeSidenav.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
