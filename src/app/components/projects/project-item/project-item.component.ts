import {Component, Input} from '@angular/core';
import {Project} from "../projects.component";

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: '../projects.component.scss'
})
export class ProjectItemComponent {

  @Input({required: true}) project!: Project;
}
