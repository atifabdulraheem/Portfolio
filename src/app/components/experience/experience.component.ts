import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Linux", src: "./assets/technologies/linux.png"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "Network", src: "./assets/technologies/network.png"},
    {name: "Javascript", src: "./assets/technologies/js.png"},
    {name: "AWS", src: "./assets/technologies/aws.png"},
    {name: "GIT", src: "./assets/technologies/git.png"},
    {name: "C#", src: "./assets/technologies/c.png"},
    {name: "CloudComputing", src: "./assets/technologies/cloudcomputing.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "GitHub", src: "./assets/technologies/github.png"},
    {name: "Debugging", src: "./assets/technologies/debugging.png"},

  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 7 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
