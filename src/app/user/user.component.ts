import { DetailServiceService } from './../detail/detail-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listUser: any;

  constructor(public server: DetailServiceService) { }

  ngOnInit() {
    this.getUser()
  }
  getUser() {
    this.server.getApi('users').subscribe((res) => {
      this.listUser = res
    })
  }
}
