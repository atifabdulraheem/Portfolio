import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/atif-abdul-raheem-412837264', '_blank');
  }

  get email(): string {
    return 'atifabdulraheem2482@gmail.com';
  }
}
