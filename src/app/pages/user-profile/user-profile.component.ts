import { Component, OnInit, ElementRef } from '@angular/core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { ROUTES } from 'src/app/components/sidebar/sidebar.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  theUser:User;
  subscription: Subscription;



  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location,
      private element: ElementRef,
       private router: Router,
      private theSecurityService:SecurityService) {
    this.location = location;
  }
   gettheSecurityService(){
    return this.theSecurityService
   }
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.subscription=this.theSecurityService.getUser().subscribe(data=>{
      this.theUser=data;
    })
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  logout(){
    this.theSecurityService.logout()
  }

}