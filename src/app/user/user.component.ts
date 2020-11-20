import { DetailServiceService } from './../detail/detail-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listUser: any;
  api: any;

  constructor(public server: DetailServiceService,
    public router: Router) { }

  ngOnInit() {
    this.getUser()
  }
  getUser() {
    this.api = this.server.getApi('users').subscribe((res) => {
      this.listUser = res
    })
  }
  goto(route) {
    this.api.unsubscribe()
    this.router.navigate([route])
  }
}
