import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../services/app-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private configService: AppConfigService
  ) {
    console.log('DashboardComponent.constructor');
    console.log(configService.appConfig.ceeConfig);
  }

  ngOnInit(): void {
    console.log('DashboardComponent.ngOnInit');
  }

}
