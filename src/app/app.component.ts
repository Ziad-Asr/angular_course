import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CardComponent } from './card/card.component';
import { CardDataInterface } from './app.component.model';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root', // starts with word (app- ....)
  standalone: true,
  imports: [RouterOutlet, DemoComponent, CardComponent, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // styleUrls: ['...', '...']
})
export class AppComponent {
  title: string = 'angular_course';
  data = { title: 'angular_course', count: 10 };

  onLogoclicked(): void {
    alert('Hello Angular!');
  }

  onKeyUp(title: string): void {
    this.data.title = title;
  }

  dataOfCard = {
    title: 'Angular Course',
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    text: 'Desc of the card',
  };

  onCourseClicked(course: CardDataInterface): void {
    console.log('On Course clicked!!!!!', course.title);
  }

  onTestClicked(title: string): void {
    console.log('title');
    console.log(title);
  }
}
