import { Component, OnInit } from '@angular/core';
import { ConfigLoaderService } from './config-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Config-After-Build';
  BASE_URL: String = '';

  constructor(private configLoaderService: ConfigLoaderService){}

  ngOnInit() {
    this.BASE_URL = this.configLoaderService.BASE_URL;
  }
}
