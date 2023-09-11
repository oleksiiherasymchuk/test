import { Component } from '@angular/core';
import { RandomUser } from '../fetched-user/fetched-user.component';

@Component({
  selector: 'app-saved-user',
  templateUrl: './saved-user.component.html',
  styleUrls: ['./saved-user.component.scss']
})
export class SavedUserComponent {
  public userListFromLocalStorage!: RandomUser[];

  ngOnInit(): void {
    this.userListFromLocalStorage = this.getUserListFromLocalStorage();
    // console.log(this.userListFromLocalStorage);
    
  }

  getUserListFromLocalStorage(): RandomUser[] {
    const userList = JSON.parse(localStorage.getItem('userList') || '[]');
    return userList;
  }
}
