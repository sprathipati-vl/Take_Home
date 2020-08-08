import { Component, OnInit } from '@angular/core';
import {APIService} from './services/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'take-home';
  serviceList: any;
  providerList: any;
  errorMessage : string;
  selectedIndex: number;
  constructor(private apiService : APIService)
  {

  }

  ngOnInit()
  {
    this.getServices();
    this.getProviders();
  }
  
  getServices()
  {
    this.apiService.getServices()
    .subscribe(
      (response) => {                           
        this.serviceList = response.data;
      },
      (error) => {                              
        this.errorMessage = error;
      }
    )
  }

  getProviders()
  {
    this.apiService.getProviders()
    .subscribe(
      (response) => {                           
        this.providerList = response.data;
      },
      (error) => {                              
        this.errorMessage = error;
      }
    )
  }

  selectService(i: number)
  {
    this.selectedIndex = i;
  }
}
