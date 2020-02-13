import { Component } from '@angular/core'

@Component({
  selector: 'kit-topbar-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class TopbarUserMenuComponent {
  badgeCount: number = 7

  constructor() {}

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }
}
