import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuth = false;
  subscription: Subscription;

  @Output()
  sidenavToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    console.log('Clicou no botão');
    this.sidenavToggle.emit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
