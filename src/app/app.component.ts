import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root', // starts with word (app- ....)
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // styleUrls: ['...', '...']
})
export class AppComponent {
  title: string = 'angular_course';
  data = { title: 'angular_course', count: 10 };
}
