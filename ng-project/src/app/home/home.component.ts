import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks = [
    {
      label: 'About',
      path: 'about'
    },
    {
      label: 'Events',
      path: 'events'
    },
    {
      label: 'Photos',
      path: 'photos'
    },
    {
      label: 'Contact',
      path: 'contact'
    }
  ];
  activeLink = this.navLinks[0];

  constructor() {}

  ngOnInit() {
    let activeIndex = this.navLinks.findIndex(
      link => `/${link.path}` === window.location.pathname
    );
    if (activeIndex === -1) {
      activeIndex = 0;
    }
    this.activeLink = this.navLinks[activeIndex];
  }
}
