import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Servicio para mostrar los usuarios
import { UsersService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(private usersService: UsersService, private router: Router) {
    this.usersService.getAllUsers().subscribe((data: any) => {
      this.users = data.data;
    });

    this.usersService.getAllUsersSecond().subscribe((data: any) => {
      this.users = this.users.concat(data.data);
      console.log(this.users);
    })
  }

  navigate(id){
    this.router.navigate(['/user', id]);
  }

  ngOnInit(): void {
  }

}
