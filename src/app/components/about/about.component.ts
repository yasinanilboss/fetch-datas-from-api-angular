import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  username: string | undefined;
  users: any;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.username = this.userService.username;
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        // console.log(res);
        this.users = res;
      })

  }

}
