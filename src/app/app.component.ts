import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutComponent} from "./components/about/about.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProfileComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Portfolio';
}
