import { Component } from '@angular/core';
import { faCoffee, faFolder, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  faCoffee = faCoffee;
  faFolder = faFolder;
  faHome = faHome;
}
