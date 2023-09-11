import { Component } from '@angular/core';
import { UserServiceService } from '../services/userService/user-service.service';
import { WeatherServiceService } from '../services/weatherService/weather-service.service';

export interface RandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
}

@Component({
  selector: 'app-fetched-user',
  templateUrl: './fetched-user.component.html',
  styleUrls: ['./fetched-user.component.scss']
})
export class FetchedUserComponent {
  randomUser!: RandomUser;
  weatherData!: any;
  constructor(
    private userDataService: UserServiceService,
    private weatherService: WeatherServiceService
  ) {}

  ngOnInit(): void {
    this.getRandomUserData();
  }

  getRandomUserData(): void {
    this.userDataService.getRandomUser().subscribe((data) => {
      if (Array.isArray(data.results) && data.results.length > 0) {
        this.randomUser = data.results[0];
        this.getWeatherData();
      }
    });
  }

  getWeatherData(): void {
    if (this.randomUser.location && this.randomUser.location.coordinates) {
      const { latitude, longitude } = this.randomUser.location.coordinates;
      this.weatherService
        .getCurrentWeather(latitude, longitude)
        .subscribe((weatherData) => {
          this.weatherData = weatherData;
          console.log(weatherData);
        });
    }
  }

  saveUserData(): void {
    if (this.randomUser) {
      this.userDataService.addUser(this.randomUser);
      console.log('User data saved to local storage:', this.randomUser);
    }
  }
}
