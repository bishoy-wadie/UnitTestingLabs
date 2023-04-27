import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(public myService: DemoService) {}
  users: any;

  ngOnInit(): void {
    // console.log(this.myService.getAllUsers().subscribe())
    // this.myService.getAllUsers().subscribe(
    //   (res)=>{console.log(res);},
    //   (err)=>{console.log(err);})
    this.myService.getAllUsers();
  }
}
