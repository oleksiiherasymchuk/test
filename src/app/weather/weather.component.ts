import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() weatherData!: any;
  @Input() city!: string;
  @Input() coordinates: any = {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.city);
    
  }

  getMinTemperature(): string | null {
    if (
      this.weatherData &&
      this.weatherData.hourly &&
      this.weatherData.hourly.temperature_2m
    ) {
      return Math.min(...this.weatherData.hourly.temperature_2m) + '°C';
    }
    return null;
  }

  getMaxTemperature(): string | null {
    if (
      this.weatherData &&
      this.weatherData.hourly &&
      this.weatherData.hourly.temperature_2m
    ) {
      return Math.max(...this.weatherData.hourly.temperature_2m) + '°C';
    }
    return null;
  }

  getWeatherImageURL(weatherCode: number): string {
    if (weatherCode >= 0 && weatherCode <= 3) {
      return 'https://cdn-icons-png.flaticon.com/512/3222/3222800.png';
    } else if (weatherCode >= 45 && weatherCode <= 57) {
      return 'https://w7.pngwing.com/pngs/44/621/png-transparent-cloud-drizzle-rain-weather-weather-icon.png';
    } else if (weatherCode >= 60 && weatherCode <= 70) {
      return 'https://img.freepik.com/premium-vector/3d-cartoon-icon-weather-forecast-drizzle-rain-vector-illustration_595345-36.jpg';
    } else if (weatherCode >= 70 && weatherCode <= 80) {
      return 'https://www.iconninja.com/files/115/213/292/snow-sky-flakes-clouds-winter-christmas-cold-icon.svg';
    } else if (weatherCode >= 81 && weatherCode <= 99) {
      return 'https://cdn-icons-png.flaticon.com/512/4150/4150944.png';
    }
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Weather_icon_-_sunny.svg/512px-Weather_icon_-_sunny.svg.png';
  }
}
