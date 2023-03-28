import { WeatherClient } from './../clients/weather.client';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleEnum } from '../models/role.enum';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent implements OnInit {
  public weather: Observable<any> = this.weatherClient.getWeatherData();
  
  constructor(
    private authenticationService: AuthenticationService,
    private weatherClient: WeatherClient
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }

  isAdmin(): boolean {
    const user = this.authenticationService.getUser();
    return user !== null && user.roles.indexOf(RoleEnum.Admin) !== -1;
  }
}