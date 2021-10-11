import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../shared/services/shared-services-index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private _routing: RoutingService) {}

  ngOnInit(): void {}

  handleRouting(path: string): void {
    this._routing.rootRouting(path);
  }
}
