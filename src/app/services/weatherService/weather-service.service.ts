import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getCurrentWeather(latitude: string, longitude: string): Observable<any> {
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current_weather: true,
      hourly: 'temperature_2m',
    };

    return this.http.get<any>(this.apiUrl, { params });
  }
}
