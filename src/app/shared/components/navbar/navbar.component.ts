import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isuserhod : boolean = true

  accessfor:string=localStorage.getItem('userole')!
  
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onlogoutuser(){
  localStorage.removeItem('username')
  localStorage.removeItem('password')
  this._router.navigate([''])
  }

}
