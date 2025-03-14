import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NavLinksComponent } from '../shared/nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NavLinksComponent], // Ensure CommonModule is imported
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
