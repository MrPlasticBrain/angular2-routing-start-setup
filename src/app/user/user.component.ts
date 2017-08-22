import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'rt-user',
  template: `
    <h2>User Works</h2>
    <a [routerLink]="['/user']">GOMNA</a>   
    <button (click)="navHome()">KUVA</button>
    User id {{userId}}
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private router: Router,private activatedRoute:ActivatedRoute) { 
    //this.userId = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(
      (params:any)=>this.userId = params['id']
    )
  }
  userId:number;

  ngOnInit() {
  }
  navHome(){
    this.router.navigate(['']);
  }
}
