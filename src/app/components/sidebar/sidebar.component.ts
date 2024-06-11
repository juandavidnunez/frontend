import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';
import { Location } from '@angular/common';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export let ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'nosotros',
    icon: 'ni-satisfied text-red',
    class: '3'  // Valor por defecto
  },
  { path: '/dashboard', title: 'nosotros',  icon: 'ni-satisfied  text-red', class: '1' },
  { path: '/icons', title: 'chat',  icon: 'ni-chat-round text-red', class: '1' },
  { path: '/maps', title: 'sedes',  icon: 'ni-pin-3 text-red', class: '2' },
  { path: '/user-profile', title: 'perfil',  icon: 'ni-single-02 text-red', class: '1' },
  { path: '/tables', title: 'utilidades',  icon: 'ni-sound-wave text-red', class: '2' },
  { path: '/login', title: 'Login',  icon: 'ni-key-25 text-red', class: '0' },
  { path: '/register', title: 'Register',  icon: 'ni-circle-08 text-red', class: '0' },
  { path: '/servi/list', title: 'servicios',  icon: 'ni-align-left-2 text-red', class: '1' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  theUser: User;
  subscription: Subscription;

  public menuItems: any[];
  public isCollapsed = true;

  public focus;
  public listTitles: any[];
  public location: Location;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private theSecurityService: SecurityService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

    this.subscription = this.theSecurityService.getUser().subscribe(data => {
      this.theUser = data;
      this.updateRoutes();
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    });
  }

  updateRoutes() {
    ROUTES = ROUTES.map(route => {
      if (route.path === '/tables') {
        return {
          ...route,
          class: this.theUser.role.name === 'administrador' ? '2' : '3'
        };
      }
      return route;
    });
  }

  gettheSecurityService() {
    return this.theSecurityService;
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {
    this.theSecurityService.logout();
  }
}
