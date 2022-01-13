import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  tap } from 'rxjs/operators';
import { AppConfig } from './config.models';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {

public BASE_URL = 'not set in here';

  constructor(private httpClient: HttpClient) { }

  initialize() {
    return this.httpClient.get<AppConfig>('./assets/config/config.json')
    .pipe(tap((response: AppConfig) => {
      this.BASE_URL = response.BASE_URL;
    }));
  }

}
