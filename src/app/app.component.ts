import { Component } from '@angular/core';

interface sideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sidenavbar';

  isSideNavCollapsed=false;
  screenWidth=0;

  onToggleSideNav(data:sideNavToggle):void{
    this.screenWidth=this.screenWidth;
    this.isSideNavCollapsed=data.collapsed;

  }
}
