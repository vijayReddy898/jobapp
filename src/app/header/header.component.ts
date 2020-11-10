import { Component, OnInit } from '@angular/core';
import {GlobalServices} from '../GlobalService.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public global:GlobalServices,private router: Router) { }

  ngOnInit() {
  }
  signOut()
  {
   GlobalServices.setUserName(null);    
    this.router.navigate(['']);
  }

}
