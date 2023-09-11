import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomUser } from 'src/app/fetched-user/fetched-user.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'https://randomuser.me/api/'; 
  private localStorageKey = 'userList';

  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getUsers(): RandomUser[] {
    const usersData = localStorage.getItem(this.localStorageKey);
    return usersData ? JSON.parse(usersData) : [];
  }

  // Add a new user to the list and save it to local storage
  addUser(user: RandomUser): void {
    // const userList = this.getUsers();
    // userList.push(user);
    // localStorage.setItem(this.localStorageKey, JSON.stringify(userList));
    const userList = this.getUsers();

    // Check if the user already exists in the list
    const userExists = userList.some((existingUser) => {
      return (
        existingUser.email.toLowerCase() === user.email.toLowerCase()
      );
    });

    // Add the user only if it doesn't already exist
    if (!userExists) {
      userList.push(user);
      localStorage.setItem(this.localStorageKey, JSON.stringify(userList));
    }
  }
}
