import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-user-detail',
  template: `
    <p>
      user-detail Works!
    </p>
    <a [routerLink]="['/user']">User</a>   
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
