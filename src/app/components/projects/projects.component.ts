import { Component } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";
import { ProjectItemComponent } from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string; // GitHub link
  liveLink?: string; // New field for Live Version
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[] = [
    {
      name: 'My Portfolio',
      description: 'My portfolio is built using Angular for a dynamic and responsive UI. It features a sleek design with modern web technologies. Check out the code on GitHub—feel free to explore, fork, and customize it!🚀',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/atifabdulraheem/Portfolio',
      liveLink: 'https://atifabdulraheem.github.io/Portfolio/'
    },
    {
      name: 'Admin Dashboard',
      description: 'Develop a feature-rich admin dashboard using Angular and Angular Material. It includes a responsive sidebar, interactive data visualizations, and dynamic reactive forms. Explore the code on GitHub, fork it, and customize it to fit your needs!🚀',
      technologies: ['Angular', 'Angular Material', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages'],
      src: './assets/projects/admin.png',
      link: 'https://github.com/atifabdulraheem/Admin-Dashboard',
      liveLink: 'https://atifabdulraheem.github.io/Admin-Dashboard/'
    },
    {
      name: 'Weather App',
      description: 'A weather app built with Angular and TypeScript, focusing on API integration, data binding, and responsive design. Check out the code on GitHub—feel free to explore, fork, and customize it to suit your needs!🚀',
      technologies: ['Angular', 'HTML', 'SCSS', 'Angular Material', 'TypeScript', 'Bootstrap', 'HTTP Client', 'OpenWeatherMap API'],
      src: './assets/projects/weather.png',
      link: 'https://github.com/atifabdulraheem/Weather-App',
      liveLink: 'https://atifabdulraheem.github.io/Weather-App/'
    },
    {
      name: 'Bill Management System',
      description: 'The Bill Optimization System analyzes utility usage patterns, providing personalized cost-saving recommendations. It offers a user-friendly interface, detailed reports, and visualizations. Users can reduce energy consumption, lower bills, and contribute to a sustainable future. It integrates with smart home devices for real-time monitoring!🚀',
      technologies: ['Python', 'Tkinter'],
      src: './assets/projects/bill.png',
      link: 'https://github.com/atifabdulraheem/Bill-Optimization-System'
    },
    {
      name: 'Analog and Digital Clock',
      description: 'The Digital Clock and Analog Clock project is a simple, visually appealing clock implemented in Python using tkinter. It displays the current time in real-time, showing hours, minutes, and seconds. Features include a user-friendly interface and customizable appearance, making it a useful and adaptable desktop application.',
      technologies: ['Python'],
      src: './assets/projects/clock.png',
      link: 'https://github.com/atifabdulraheem/Analog-Clock'
    }
  ];
}
