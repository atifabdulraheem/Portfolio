import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  protected  navItems: string[] = ['About', 'Skills', 'Projects', 'Contacts'];

  scrollTo(section: string) {
    let elementId = section.toLowerCase().replace(' ', '-');
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
