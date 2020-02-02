import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CPUTemperature } from '../model/cpu-temperatur';

@Injectable({
  providedIn: 'root'
})
export class CpuTemperatureService {

  url: string = "https://pi-cpu-temp-api-maxionderon.herokuapp.com/CpuTemperature";

  constructor(private http: HttpClient) { }

  getCPUTemperatures(): Observable<CPUTemperature[]> {

    return this.http.get<CPUTemperature[]>(this.url, this.getHttpOptions() );

  }

  getHttpOptions() {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    
    return { headers };

  }

}
